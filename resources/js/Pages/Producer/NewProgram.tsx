import { useMemo, useState } from "react";
// Function
import { getLayoutMenu, getPrograms } from "@/util/RoleData";
// Data
import { PRODUCER_NEW_PROGRAM_HEADER } from "@/Constants/TableHeader";
// Component
import SearchField from "@/Components/Dashboard/SearchField";
import Layout from "@/Layout";
import Table from "@/Components/Dashboard/Table";

const NewProgram = () => {
    const [searchInput, setSearchInput] = useState('');

    const ProgramsData = getPrograms();

    const handleSearch = (input: string) => {
        setSearchInput(input);
    };


    const filterPrograms = (programs: any, searchInput: string) => {
        const filteredPrograms = programs.filter((program: any) =>
            program.title.toLowerCase().includes(searchInput.toLowerCase())
        );
        return filteredPrograms;
    };

    const NewProgram = useMemo(() => filterPrograms(ProgramsData,searchInput),
        [ProgramsData, searchInput]
    );

    return (
        <Layout menus={getLayoutMenu()}>
            <>
                <h1 className="heading-3 font-semibold">Program Baru</h1>
                <div className="flex items-center gap-6">
                    <SearchField onSearch={handleSearch} />
                    <p className="caption-1">
                        <span className="font-semibold">{NewProgram.length}</span> Program
                    </p>
                </div>
                {NewProgram.length > 0  ? (
                    <Table head={PRODUCER_NEW_PROGRAM_HEADER} body={NewProgram} action="/icon/more-fill.svg" pagination={true} type="Program" redirectUrl="validation" />
                ) : (
                    <p className="body-1 font-semibol">Tidak ada program yang ditemukan</p>
                )}
            </>
        </Layout>
    );
};

export default NewProgram;
