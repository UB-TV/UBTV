import SearchField from "@/Components/Dashboard/SearchField"
import Table from "@/Components/Dashboard/Table"
import { REGISTERED_HEADER } from "@/Constants/TableHeader"
import { ProgramMenus, ListPrograms } from "@/Constants/Temp"
import Layout from "@/Layout"
import { useMemo, useState } from "react"

const RegisteredProgram = () => {
    const [searchInput, setSearchInput] = useState('');

    const handleSearch = (input: string) => {
        setSearchInput(input);
    };

    const handleDelete = (slug: string) => {
        console.log(`Deleting program with slug: ${slug}`);
      };

    const filterPrograms = (programs: any, searchInput: string) => {
        const filteredPrograms = programs.filter((program: any) =>
            program.title.toLowerCase().includes(searchInput.toLowerCase())
        );
        return filteredPrograms;
    };

    const filteredRegisteredPrograms = useMemo(
        () => filterPrograms(ListPrograms.filter((program) => !program.programStatus), searchInput),
        [ListPrograms, searchInput]
    );

    return (
        <Layout menus={ProgramMenus}>
            <>
                <h1 className="heading-3 font-semibold">Terdaftar</h1>
                <div className="flex items-center gap-6">
                    <SearchField onSearch={handleSearch} />
                    <p className="caption-1">
                        <span className="font-semibold">{ListPrograms.filter((program) => !program.programStatus).length}</span> Program
                    </p>
                </div>
                {filteredRegisteredPrograms.length > 0 ? (
                    <Table head={REGISTERED_HEADER} body={filteredRegisteredPrograms}  action="/icon/more-fill.svg" pagination={true} programStatus={filteredRegisteredPrograms.programStatus} showProgramStatus={true} slug={filteredRegisteredPrograms.slug} showDelete={true} onDelete={handleDelete}/>
                ) : (
                    <p className="body-1 font-semibol">Tidak ada program yang ditemukan</p>
                )}
            </>
        </Layout>
    )
}

export default RegisteredProgram
