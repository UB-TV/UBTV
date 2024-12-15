// Dashboard.tsx
import { useMemo, useState } from "react";
// Function
import { getPrograms, useGetUserRole } from "@/util/RoleData";
// Data
import {
    CAMERAMAN_HEADER,
    EDITOR_HEADER,
    MCR_HEADER
} from "@/Constants/TableHeader";
// Component
import SearchField from "@/Components/Dashboard/SearchField";
import Layout from "@/Layout";
import NotUploadedTable from "@/Components/Dashboard/TableSection/NotUploadedTable";
import UploadedTable from "@/Components/Dashboard/TableSection/UploadedTable";
import ValidationTable from "@/Components/Dashboard/TableSection/ValidationTable";
import ProgramTable from "@/Components/Dashboard/TableSection/ProgramTable";
import { IVideoProgram } from "@/models/videprograminterfaces";
import { usePage } from "@inertiajs/react";
import EditedProgramTable from "@/Components/Dashboard/TableSection/EditedProgramTable";
import UneditedProgramTable from "@/Components/Dashboard/TableSection/UneditedProgramTable";

interface IDashboard {
    pending_video_programs?: IVideoProgram[];
    uploaded_video_programs?: IVideoProgram[];
    all_edited_video_programs?: IVideoProgram[];
    some_unedited_video_programs?: IVideoProgram[];
    programs?: IVideoProgram[];
    pending_programs?: IVideoProgram[];
}

const Dashboard = ({
    pending_video_programs = [],
    uploaded_video_programs = [],
    all_edited_video_programs = [],
    some_unedited_video_programs = [],
    programs = [],
    pending_programs = []
}: IDashboard) => {
    const [searchInput, setSearchInput] = useState('');

    const { user } = usePage<any>().props;
    const role = useGetUserRole();
    // TODO: Remove once all feature are integrated
    // const ProgramsData = getPrograms();

    const allProgramLength = pending_video_programs.length +
                           uploaded_video_programs.length +
                           all_edited_video_programs.length +
                           some_unedited_video_programs.length +
                           programs.length +
                           pending_programs.length;

    const handleSearch = (input: string) => {
        setSearchInput(input);
    };

    const filterPrograms = (programs: IVideoProgram[] | undefined | null, searchInput: string) => {
        if (!programs || !Array.isArray(programs)) {
            return [];
        }
        return programs.filter((program: IVideoProgram) =>
            program?.name?.toLowerCase().includes(searchInput.toLowerCase())
        );
    };

    const filteredNotUploadedPrograms = useMemo(
        () => filterPrograms(pending_video_programs, searchInput),
        [pending_video_programs, searchInput]
    );

    const filteredUploadedPrograms = useMemo(
        () => filterPrograms(uploaded_video_programs, searchInput),
        [uploaded_video_programs, searchInput]
    );

    const filteredEditedPrograms = useMemo(
        () => filterPrograms(all_edited_video_programs, searchInput),
        [all_edited_video_programs, searchInput]
    );

    const filteredUneditedPrograms = useMemo(
        () => filterPrograms(some_unedited_video_programs, searchInput),
        [some_unedited_video_programs, searchInput]
    );

    const filteredPrograms = useMemo(
        () => filterPrograms(programs, searchInput),
        [programs, searchInput]
    );

    const filteredPendingPrograms = useMemo(
        () => filterPrograms(pending_programs, searchInput),
        [pending_programs, searchInput]
    );

    const notUploadSectionVisible = filteredNotUploadedPrograms.length > 0;
    const uploadSectionVisible = filteredUploadedPrograms.length > 0;
    const editedSectionVisible = filteredEditedPrograms.length > 0;
    const uneditedSectionVisible = filteredUneditedPrograms.length > 0;
    const programSectionVisible = filteredPrograms.length > 0;
    const pendingProgramSectionVisible = filteredPendingPrograms.length > 0;

    return (
        <Layout>
            <>
                <h1 className="heading-3 font-semibold">Selamat Datang, {user.name}</h1>
                <div className="flex items-center gap-6">
                    <SearchField onSearch={handleSearch} />
                    <p className="caption-1">
                        <span className="font-semibold">{allProgramLength}</span> Program
                    </p>
                </div>
                {!notUploadSectionVisible && !uploadSectionVisible && !editedSectionVisible && !uneditedSectionVisible && !programSectionVisible && !pendingProgramSectionVisible ? (
                    <p className="body-1 font-semibold">Tidak ada program yang ditemukan</p>
                ) : (
                    role === 'editor' ? (
                        <>
                            {editedSectionVisible && (
                                <EditedProgramTable header={EDITOR_HEADER} program={filteredEditedPrograms} />
                            )}
                            {uneditedSectionVisible && (
                                <UneditedProgramTable header={EDITOR_HEADER} program={filteredUneditedPrograms} />
                            )}
                        </>
                    ) : role === 'mcr' ? (
                        <>
                            {pendingProgramSectionVisible && (
                                <ValidationTable header={MCR_HEADER} program={filteredPendingPrograms} />
                            )}
                            {programSectionVisible && (
                                <ProgramTable header={MCR_HEADER} program={filteredPrograms} />
                            )}
                        </>
                    ) : (
                        <>
                            {notUploadSectionVisible && (
                                <NotUploadedTable header={CAMERAMAN_HEADER} program={filteredNotUploadedPrograms} />
                            )}
                            {uploadSectionVisible && (
                                <UploadedTable header={CAMERAMAN_HEADER} program={filteredUploadedPrograms} />
                            )}
                        </>
                    )
                )}
            </>
        </Layout>
    );
};

export default Dashboard;
