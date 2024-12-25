import { useMemo, useState } from 'react';
// Component
import { IGeneralPaginationTable } from '@/models/generalinterfaces';
import { IVideoProgram } from '@/models/videprograminterfaces';
import { MCR_VALIDATION_HEADER } from '@/Constants/TableHeader';
import Layout from "@/Layout";
import SearchField from '@/Components/Dashboard/SearchField';
import Table from '@/Components/Dashboard/Table';

const ProgramValidation = ({
    data,
    links
}: IGeneralPaginationTable<IVideoProgram[]>) => {

    const [searchInput, setSearchInput] = useState('');

    const handleSearch = (input: string) => {
        setSearchInput(input);
    };

    const filterPrograms = (programs: IVideoProgram[], searchInput: string) => {
        const filteredPrograms = programs.filter((program: IVideoProgram) =>
            program.name.toLowerCase().includes(searchInput.toLowerCase())
        );
        return filteredPrograms;
    };

    const filteredPrograms = useMemo(
        () => filterPrograms(data, searchInput),
        [searchInput]
    );

    return (
        <Layout>
            <>
                <h1 className="heading-3 font-semibold">Perlu Validasi </h1>
                <div className="flex items-center gap-6">
                    <SearchField onSearch={handleSearch} />
                    <p className="caption-1">
                        <span className="font-semibold">{data.length}</span> Program
                    </p>
                </div>
                {filteredPrograms.length > 0 ? (
                    <Table
                        head={MCR_VALIDATION_HEADER}
                        body={filteredPrograms}
                        action="/icon/more-fill.svg"
                        pagination={true}
                        type="Program Status"
                        redirectUrl="pending"
                        isRedirectPrefix
                        pagination_link={links}
                    />
                ) : (
                    <p className="body-1 font-semibol">Tidak ada program yang ditemukan</p>
                )}
            </>
        </Layout>
    );
};

export default ProgramValidation;
