import { useMemo, useState } from "react";
// Function
import { getLayoutMenu, getPrograms, getUserRole } from "@/util/RoleData";
// Data
import { CAMERAMAN_HEADER, MCR_PROGRAM_HEADER, MCR_VALIDATION_HEADER } from "@/Constants/TableHeader";
// Component
import SearchField from "@/Components/Dashboard/SearchField";
import Layout from "@/Layout";
import NotUploadedTable from "@/Components/Dashboard/TableSection/NotUploadedTable";
import UploadedTable from "@/Components/Dashboard/TableSection/UploadedTable";
import ValidationTable from "@/Components/Dashboard/TableSection/ValidationTable";
import ProgramTable from "@/Components/Dashboard/TableSection/ProgramTable";

const Dashboard = () => {
    const [searchInput, setSearchInput] = useState('');

    const role = getUserRole();
    const ProgramsData = getPrograms();

    const handleSearch = (input: string) => {
        setSearchInput(input);
    };


    const filterPrograms = (programs: any, searchInput: string) => {
        const filteredPrograms = programs.filter((program: any) =>
            program.title.toLowerCase().includes(searchInput.toLowerCase())
        );
        console.log(filteredPrograms);

        return filteredPrograms;
    };

    const filteredNotUploadedPrograms = useMemo(
        () => filterPrograms(ProgramsData.filter((program: any) => !program.uploadStatus), searchInput),
        [ProgramsData, searchInput]
    );

    const filteredUploadedPrograms = useMemo(
        () => filterPrograms(ProgramsData.filter((program: any) => program.uploadStatus), searchInput),
        [ProgramsData, searchInput]
    );

    const filteredValidationFalsePrograms = useMemo(
        () => filterPrograms(
            ProgramsData.filter((program: any) => program.episode.some((episode: any) => !episode.validationStatus)),
            searchInput
        ),
        [ProgramsData, searchInput]
    );

    const allPrograms = useMemo(
        () => filterPrograms(ProgramsData, searchInput),
        [ProgramsData, searchInput]
    );

    const notUploadSectionVisible = filteredNotUploadedPrograms.length > 0;
    const uploadSectionVisible = filteredUploadedPrograms.length > 0;
    const validatedFalseSectionVisible = filteredNotUploadedPrograms.length > 0;
    const programSectionVisible = filteredUploadedPrograms.length > 0;

    return (
        <Layout menus={getLayoutMenu()}>
            <>
                <h1 className="heading-3 font-semibold">Selamat Datang, Raina </h1>
                <div className="flex items-center gap-6">
                    <SearchField onSearch={handleSearch} />
                    <p className="caption-1">
                        <span className="font-semibold">{ProgramsData.length}</span> Program
                    </p>
                </div>
                {!notUploadSectionVisible && !uploadSectionVisible ? (
                    <p className="body-1 font-semibol">Tidak ada program yang ditemukan</p>
                ) : (
                    role !== 'mcr' ? (
                        <>
                            {notUploadSectionVisible && (
                                <NotUploadedTable header={CAMERAMAN_HEADER} program={filteredNotUploadedPrograms} />
                            )}
                            {uploadSectionVisible && (
                                <UploadedTable header={CAMERAMAN_HEADER} program={filteredUploadedPrograms} />
                            )}
                        </>
                    ) : (
                        <>
                            {validatedFalseSectionVisible && (
                                <ValidationTable header={MCR_VALIDATION_HEADER} program={filteredValidationFalsePrograms} />
                            )}
                            {programSectionVisible && (
                                <ProgramTable header={MCR_PROGRAM_HEADER} program={allPrograms} />
                            )}
                        </>
                    )
                )}
            </>
        </Layout>
    );
};

export default Dashboard;
