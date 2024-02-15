import { useMemo, useState } from "react"
// Data
import { CAMERAMAN_HEADER } from "@/Constants/TableHeader"
import { getLayoutMenu, getPrograms } from "@/util/RoleData"
// Component
import SearchField from "@/Components/Dashboard/SearchField"
import Table from "@/Components/Dashboard/Table"
import Layout from "@/Layout"

const NotUploadedProgram = () => {
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

    const filteredUploadedPrograms = useMemo(
        () => filterPrograms(ProgramsData.filter((program: any) => !program.uploadStatus), searchInput),
        [ProgramsData, searchInput]
    );

    return (
        <Layout menus={getLayoutMenu()}>
            <>
                <h1 className="heading-3 font-semibold">Belum Upload </h1>
                <div className="flex items-center gap-6">
                    <SearchField onSearch={handleSearch} />
                    <p className="caption-1">
                        <span className="font-semibold">{ProgramsData.filter((program: any) => !program.uploadStatus).length}</span> Program
                    </p>
                </div>
                {filteredUploadedPrograms.length > 0 ? (
                    <Table head={CAMERAMAN_HEADER} body={filteredUploadedPrograms} action="/icon/more-fill.svg" pagination={true} type="Program" redirectUrl="not-uploaded" />
                ) : (
                    <p className="body-1 font-semibol">Tidak ada program yang ditemukan</p>
                )}
            </>
        </Layout>
    )
}

export default NotUploadedProgram
