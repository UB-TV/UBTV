import { useMemo, useState } from "react";

// Component
import { IGeneralPaginationTable } from "@/models/generalinterfaces";
import { IVideoProgram } from "@/models/videprograminterfaces";
import Layout from "@/Layout";
// Data
import { PRODUCER_NEW_PROGRAM_HEADER } from "@/Constants/TableHeader";
import SearchField from "@/Components/Dashboard/SearchField";
import Table from "@/Components/Dashboard/Table";

const NewProgram = ({
    data,
    links,
}: IGeneralPaginationTable<IVideoProgram[]>) => {
    const [searchInput, setSearchInput] = useState("");

    const handleSearch = (input: string) => {
        setSearchInput(input);
    };

    const filterPrograms = (programs: IVideoProgram[], searchInput: string) => {
        if (!searchInput.trim()) return data;

        const searchTerm = searchInput.toLowerCase();
        const filteredPrograms = programs.filter((program: any) =>
            program.name.toLowerCase().includes(searchTerm)
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
                <h1 className="heading-3 font-semibold">Program Baru</h1>
                <div className="flex items-center gap-6">
                    <SearchField onSearch={handleSearch} />
                    <p className="caption-1">
                        <span className="font-semibold">{data.length}</span>{" "}
                        Program
                    </p>
                </div>
                {filteredPrograms.length > 0 ? (
                    <Table
                        head={PRODUCER_NEW_PROGRAM_HEADER}
                        body={filteredPrograms}
                        action="/icon/more-fill.svg"
                        pagination={true}
                        pagination_link={links}
                        type="Program"
                        isRedirectPrefix
                        redirectUrl="program"
                    />
                ) : (
                    <p className="body-1 font-semibol">
                        Tidak ada program yang ditemukan
                    </p>
                )}
            </>
        </Layout>
    );
};

export default NewProgram;
