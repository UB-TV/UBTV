import { useMemo, useState } from "react";
// Function
import { getLayoutMenu, getPrograms } from "@/util/RoleData";
// Data
import { MCR_PROGRAM_HEADER } from "@/Constants/TableHeader";
// Component
import SearchField from "@/Components/Dashboard/SearchField";
import Layout from "@/Layout";
import Table from "@/Components/Dashboard/Table";

const Program = () => {
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

    const allPrograms = useMemo(
        () => filterPrograms(ProgramsData, searchInput),
        [ProgramsData, searchInput]
    );

    const programSectionVisible = allPrograms.length > 0;

    return (
        <Layout>
            <>
                <h1 className="heading-3 font-semibold">Program</h1>
                <div className="flex items-center gap-6">
                    <SearchField onSearch={handleSearch} />
                    <p className="caption-1">
                        <span className="font-semibold">{allPrograms.length}</span> Program
                    </p>
                </div>
                {programSectionVisible ? (
                    <Table head={MCR_PROGRAM_HEADER} body={allPrograms} action="/icon/more-fill.svg" pagination={true} type="Program Status" />
                ) : (
                    <p className="body-1 font-semibol">Tidak ada program yang ditemukan</p>
                )}
            </>
        </Layout>
    );
};

export default Program;
