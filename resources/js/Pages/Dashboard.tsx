import SearchField from "@/Components/Dashboard/SearchField";
import Table from "@/Components/Dashboard/Table";
import { CAMERAMAN_HEADER } from "@/Constants/TableHeader";
import { CameramanMenus, CameramanPrograms, EditorMenus } from "@/Constants/Temp";
import Layout from "@/Layout";
import { useMemo, useState } from "react";

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

    const filteredNotUploadedPrograms = useMemo(
        () => filterPrograms(CameramanPrograms.filter((program) => !program.uploadStatus), searchInput),
        [CameramanPrograms, searchInput]
    );

    const filteredUploadedPrograms = useMemo(
        () => filterPrograms(CameramanPrograms.filter((program) => program.uploadStatus), searchInput),
        [CameramanPrograms, searchInput]
    );

    const notUploadSectionVisible = filteredNotUploadedPrograms.length > 0;
    const uploadSectionVisible = filteredUploadedPrograms.length > 0;
    return (
        <Layout menus={EditorMenus}>
            <>
                <h1 className="heading-3 font-semibold">Selamat Datang, Raina </h1>
                <div className="flex items-center gap-6">
                    <SearchField onSearch={handleSearch} />
                    <p className="caption-1">
                        <span className="font-semibold">{CameramanPrograms.length}</span> Program
                    </p>
                </div>
                {!notUploadSectionVisible && !uploadSectionVisible ? (
                    <p className="body-1 font-semibol">Tidak ada program yang ditemukan</p>
                ) : (
                    <>
                        {notUploadSectionVisible && (
                            <section>
                                <h2 className="heading-5 font-semibold mb-3">Belum Upload</h2>
                                <Table head={CAMERAMAN_HEADER} body={filteredNotUploadedPrograms} action="/icon/more-fill.svg" pagination={false} type="Program" />
                            </section>
                        )}
                        {uploadSectionVisible && (
                            <section>
                                <h2 className="heading-5 font-semibold mb-3">Sudah Upload</h2>
                                <Table head={CAMERAMAN_HEADER} body={filteredUploadedPrograms} action="/icon/more-fill.svg" pagination={false} type="Program" />
                            </section>
                        )}
                    </>
                )}
            </>
        </Layout>
    );
};

export default Dashboard;
