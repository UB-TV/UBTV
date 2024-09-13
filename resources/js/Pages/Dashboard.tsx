import { useMemo, useState } from "react";
// Function
import { getPrograms, useGetUserRole } from "@/util/RoleData";
// Data
import { CAMERAMAN_HEADER, MCR_PROGRAM_HEADER, MCR_VALIDATION_HEADER } from "@/Constants/TableHeader";
// Component
import SearchField from "@/Components/Dashboard/SearchField";
import Layout from "@/Layout";
import NotUploadedTable from "@/Components/Dashboard/TableSection/NotUploadedTable";
import UploadedTable from "@/Components/Dashboard/TableSection/UploadedTable";
import ValidationTable from "@/Components/Dashboard/TableSection/ValidationTable";
import ProgramTable from "@/Components/Dashboard/TableSection/ProgramTable";
import { IVideoProgram } from "@/models/videprograminterfaces";
import { usePage } from "@inertiajs/react";

interface IDashboard {
    pending_video_programs: IVideoProgram[];
    uploaded_video_programs: IVideoProgram[];
}

const Dashboard = ({
    pending_video_programs,
    uploaded_video_programs
}: IDashboard) => {
    const [searchInput, setSearchInput] = useState('');

    const { user } = usePage<any>().props;
    const role = useGetUserRole();
    // TODO: Remove once all feature are integrated
    // const ProgramsData = getPrograms();

    const allProgramLength = pending_video_programs.length + uploaded_video_programs.length;

    const handleSearch = (input: string) => {
        setSearchInput(input);
    };


    const filterPrograms = (programs: IVideoProgram[], searchInput: string) => {
        const filteredPrograms = programs.filter((program: IVideoProgram) =>
            program.name.toLowerCase().includes(searchInput.toLowerCase())
        );
        return filteredPrograms;
    };

    const filteredNotUploadedPrograms = useMemo(
        () => filterPrograms(pending_video_programs, searchInput),
        [pending_video_programs, searchInput]
    );

    const filteredUploadedPrograms = useMemo(
        () => filterPrograms(uploaded_video_programs, searchInput),
        [uploaded_video_programs, searchInput]
    );

    // TODO: adjust based on MCR Response
    // const filteredValidationFalsePrograms = useMemo(
    //     () => filterPrograms(
    //         ProgramsData.filter((program: any) => program.episode.some((episode: any) => !episode.validationStatus)),
    //         searchInput
    //     ),
    //     [ProgramsData, searchInput]
    // );

    // TODO: adjust based on MCR Response
    // const allPrograms = useMemo(
    //     () => filterPrograms(ProgramsData, searchInput),
    //     [ProgramsData, searchInput]
    // );

    const notUploadSectionVisible = filteredNotUploadedPrograms.length > 0;
    const uploadSectionVisible = filteredUploadedPrograms.length > 0;

    // TODO: adjust based on MCR Response
    // const validatedFalseSectionVisible = filteredNotUploadedPrograms.length > 0;
    // const programSectionVisible = allPrograms.length > 0;

    return (
        <Layout>
            <>
                <h1 className="heading-3 font-semibold">Selamat Datang, {user.name} </h1>
                <div className="flex items-center gap-6">
                    <SearchField onSearch={handleSearch} />
                    <p className="caption-1">
                        <span className="font-semibold">{allProgramLength}</span> Program
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
                            // TODO: adjust based on MCR Response
                            {/* {validatedFalseSectionVisible && (
                                <ValidationTable header={MCR_VALIDATION_HEADER} program={filteredValidationFalsePrograms} />
                            )}
                            {programSectionVisible && (
                                <ProgramTable header={MCR_PROGRAM_HEADER} program={allPrograms} />
                            )} */}
                        </>
                    )
                )}
            </>
        </Layout>
    );
};

export default Dashboard;
