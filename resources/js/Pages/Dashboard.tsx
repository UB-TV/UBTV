// Data
import {
    ACTIVE_HEAD_OF_PROGRAM_HEADER,
    CAMERAMAN_HEADER,
    EDITOR_HEADER,
    MCR_PROGRAM_HEADER,
    MCR_VALIDATION_HEADER,
    REGISTERED_HEAD_OF_PROGRAM_HEADER,
} from "@/Constants/TableHeader";
import { useMemo, useState } from "react";

import ActiveTable from "@/Components/Dashboard/TableSection/ActiveTable";
import AddProgramButton from "@/Components/HeadOfProgram/AddProgramButton";
import EditedProgramTable from "@/Components/Dashboard/TableSection/EditedProgramTable";
import { IVideoProgram } from "@/models/videprograminterfaces";
import Layout from "@/Layout";
import NotUploadedTable from "@/Components/Dashboard/TableSection/NotUploadedTable";
import ProgramTable from "@/Components/Dashboard/TableSection/ProgramTable";
import RegisteredTable from "@/Components/Dashboard/TableSection/RegisteredTable";
// Component
import SearchField from "@/Components/Dashboard/SearchField";
import UneditedProgramTable from "@/Components/Dashboard/TableSection/UneditedProgramTable";
import UploadedTable from "@/Components/Dashboard/TableSection/UploadedTable";
import ValidationTable from "@/Components/Dashboard/TableSection/ValidationTable";
// Function
import { useGetUserRole } from "@/util/RoleData";
import { usePage } from "@inertiajs/react";

interface IDashboard {
    pending_video_programs?: IVideoProgram[];
    uploaded_video_programs?: IVideoProgram[];
    all_edited_video_programs?: IVideoProgram[];
    some_unedited_video_programs?: IVideoProgram[];
    draft_programs: [];
    active_programs: [];
    programs?: IVideoProgram[];
    pending_programs?: IVideoProgram[];
}

const Dashboard = ({
    pending_video_programs = [],
    uploaded_video_programs = [],
    all_edited_video_programs = [],
    some_unedited_video_programs = [],
    draft_programs = [],
    active_programs = [],
    programs = [],
    pending_programs = [],
}: IDashboard) => {
    const [searchInput, setSearchInput] = useState("");

    const { user } = usePage<any>().props;
    const role = useGetUserRole();

    const allProgramLength =
        (Array.isArray(pending_video_programs)
            ? pending_video_programs.length
            : 0) +
        (Array.isArray(uploaded_video_programs)
            ? uploaded_video_programs.length
            : 0) +
        (Array.isArray(all_edited_video_programs)
            ? all_edited_video_programs.length
            : 0) +
        (Array.isArray(some_unedited_video_programs)
            ? some_unedited_video_programs.length
            : 0) +
        (Array.isArray(draft_programs) ? draft_programs.length : 0) +
        (Array.isArray(active_programs) ? active_programs.length : 0) +
        (Array.isArray(programs) ? programs.length : 0) +
        (Array.isArray(pending_programs) ? pending_programs.length : 0);

    const handleSearch = (input: string) => {
        setSearchInput(input);
    };

    const filterPrograms = (
        programs: IVideoProgram[] | undefined | null,
        searchInput: string
    ) => {
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

    const filteredRegisteredPrograms = useMemo(
        () => filterPrograms(draft_programs, searchInput),
        [draft_programs, searchInput]
    );

    const filteredActivePrograms = useMemo(
        () => filterPrograms(active_programs, searchInput),
        [active_programs, searchInput]
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
    const registeredSectionVisible = filteredRegisteredPrograms.length > 0;
    const activeSectionVisible = filteredActivePrograms.length > 0;
    const editedSectionVisible = filteredEditedPrograms.length > 0;
    const uneditedSectionVisible = filteredUneditedPrograms.length > 0;
    const programSectionVisible = filteredPrograms.length > 0;
    const pendingProgramSectionVisible = filteredPendingPrograms.length > 0;

    return (
        <Layout>
            <>
                <h1 className="heading-3 font-semibold">
                    Selamat Datang, {user.name}
                </h1>
                <div className="flex items-center justify-between w-full">
                    <div className="flex gap-6 items-center">
                        <SearchField onSearch={handleSearch} />
                        <p className="caption-1">
                            <span className="font-semibold">
                                {allProgramLength}
                            </span>{" "}
                            Program
                        </p>
                    </div>
                    {role === "head_of_program" && (
                        <div>
                            <AddProgramButton />
                        </div>
                    )}
                </div>

                {(() => {
                    if (
                        !notUploadSectionVisible &&
                        !uploadSectionVisible &&
                        !editedSectionVisible &&
                        !uneditedSectionVisible &&
                        !programSectionVisible &&
                        !pendingProgramSectionVisible &&
                        !registeredSectionVisible &&
                        !activeSectionVisible
                    ) {
                        return (
                            <p className="body-1 font-semibold">
                                Tidak ada program yang ditemukan
                            </p>
                        );
                    }

                    if (role === "head_of_program") {
                        return (
                            <>
                                {registeredSectionVisible && (
                                    <RegisteredTable
                                        header={
                                            REGISTERED_HEAD_OF_PROGRAM_HEADER
                                        }
                                        program={filteredRegisteredPrograms}
                                    />
                                )}
                                {activeSectionVisible && (
                                    <ActiveTable
                                        header={ACTIVE_HEAD_OF_PROGRAM_HEADER}
                                        program={filteredActivePrograms}
                                    />
                                )}
                            </>
                        );
                    }

                    if (role === "editor") {
                        return (
                            <>
                                {editedSectionVisible && (
                                    <EditedProgramTable
                                        header={EDITOR_HEADER}
                                        program={filteredEditedPrograms}
                                    />
                                )}
                                {uneditedSectionVisible && (
                                    <UneditedProgramTable
                                        header={EDITOR_HEADER}
                                        program={filteredUneditedPrograms}
                                    />
                                )}
                            </>
                        );
                    }

                    if (role === "mcr") {
                        return (
                            <>
                                {pendingProgramSectionVisible && (
                                    <ValidationTable
                                        header={MCR_VALIDATION_HEADER}
                                        program={filteredPendingPrograms}
                                    />
                                )}
                                {programSectionVisible && (
                                    <ProgramTable
                                        header={MCR_PROGRAM_HEADER}
                                        program={filteredPrograms}
                                    />
                                )}
                            </>
                        );
                    }

                    return (
                        <>
                            {notUploadSectionVisible && (
                                <NotUploadedTable
                                    header={CAMERAMAN_HEADER}
                                    program={filteredNotUploadedPrograms}
                                />
                            )}
                            {uploadSectionVisible && (
                                <UploadedTable
                                    header={CAMERAMAN_HEADER}
                                    program={filteredUploadedPrograms}
                                />
                            )}
                        </>
                    );
                })()}
            </>
        </Layout>
    );
};

export default Dashboard;
