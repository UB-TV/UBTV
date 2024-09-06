import SearchField from "@/Components/Dashboard/SearchField";
import Table from "@/Components/Dashboard/Table";
import { REGISTERED_HEADER, PROCESS_HEADER } from "@/Constants/TableHeader";
import { ProgramMenus, ListPrograms } from "@/Constants/Temp";
import Layout from "@/Layout";
import { useMemo, useState } from "react";
import AddProgramButton from "@/Components/ProgramHead/AddProgram";
import { Link } from "@inertiajs/react"

const Dashboard = () => {
    const [searchInput, setSearchInput] = useState('');

    const handleSearch = (input: string) => {
        setSearchInput(input);
    };

    const filterPrograms = (programs: any, searchInput: string) => {
        const filteredPrograms = programs.filter((program: any) =>
            program.title.toLowerCase().includes(searchInput.toLowerCase())
        );
        
        return filteredPrograms;
    };

    const formatPrograms = (programs: any) => {
        return programs.map((program: any) => {
            const latestEpisode = program.episode?.[program.episode.length - 1];
            return {
                ...program,
                statusEpisode: latestEpisode?.statusEpisode || '',
            };
        });
    };

    const filteredRegisteredPrograms = useMemo(
        () => filterPrograms(ListPrograms.filter((program) => !program.programStatus), searchInput),
        [ListPrograms, searchInput]
    );
    
    const filteredProcessPrograms = useMemo(
        () => filterPrograms(formatPrograms(ListPrograms.filter((program) => program.programStatus)), searchInput),
        [ListPrograms, searchInput]
    );

    const notUploadSectionVisible = filteredRegisteredPrograms.length > 0;
    const uploadSectionVisible = filteredProcessPrograms.length > 0;
    return (
        <Layout menus={ProgramMenus}>
            <>
                <h1 className="heading-3 font-semibold">Selamat Datang, Raina </h1>
                <div className="flex justify-between items-center w-full">
                    <div className="flex items-center gap-6">
                    <SearchField onSearch={handleSearch} />
                    <p className="caption-1">
                        <span className="font-semibold">{ListPrograms.length}</span> Program
                    </p>
                    </div>
                    <div className="flex items-center justify-between">
                            <AddProgramButton/>
                    </div>
                </div>
                {!notUploadSectionVisible && !uploadSectionVisible ? (
                    <p className="body-1 font-semibol">Tidak ada program yang ditemukan</p>
                ) : (
                    <>
                        {notUploadSectionVisible && (
                            <section>
                                <div className="flex justify-between items-center mb-3">
                                    <h2 className="heading-5 font-semibold">Terdaftar</h2>
                                    <Link href="/registered-program" className="caption-1 font-semibold text-primary-500 underline">Selengkapnya</Link>
                                </div>
                                <Table head={REGISTERED_HEADER} body={filteredRegisteredPrograms} action="/icon/more-fill.svg" pagination={false} programStatus={filteredRegisteredPrograms.programStatus} showProgramStatus={true} showDelete={false}/>
                            </section>
                        )}
                        {uploadSectionVisible && (
                            <section>
                                <div className="flex justify-between items-center mb-3">
                                    <h2 className="heading-5 font-semibold">Proses</h2>
                                    <Link href="/process-program" className="caption-1 font-semibold text-primary-500 underline">Selengkapnya</Link>
                                </div>
                                <Table head={PROCESS_HEADER} body={filteredProcessPrograms} programStatus={false} slug={filteredProcessPrograms.slug} action="/icon/more-fill.svg" pagination={false} showDelete={false}/>
                            </section>
                        )}
                    </>
                )}
            </>
        </Layout>
    );
};

export default Dashboard;
