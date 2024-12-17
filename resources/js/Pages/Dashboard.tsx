import { useMemo, useState } from "react";
// Function
import { getPrograms, useGetUserRole } from "@/util/RoleData";
// Data
import {
    CAMERAMAN_HEADER,
    MCR_PROGRAM_HEADER,
    MCR_VALIDATION_HEADER,
    ACTIVE_HEAD_OF_PROGRAM_HEADER,
    REGISTERED_HEAD_OF_PROGRAM_HEADER,
    EDITOR_HEADER,
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
import RegisteredTable from "@/Components/Dashboard/TableSection/RegisteredTable";
import ActiveTable from "@/Components/Dashboard/TableSection/ActiveTable";
import AddProgramButton from "@/Components/HeadOfProgram/AddProgramButton";
interface IDashboard {
    pending_video_programs?: IVideoProgram[];
    uploaded_video_programs?: IVideoProgram[];
    all_edited_video_programs?: IVideoProgram[];
    some_unedited_video_programs?: IVideoProgram[];
    draft_programs: [];
    active_programs: [];
}

const Dashboard = ({
    pending_video_programs = [],
    uploaded_video_programs = [],
    all_edited_video_programs = [],
    some_unedited_video_programs = [],
    draft_programs = [],
    active_programs = [],
}: IDashboard) => {
    const [searchInput, setSearchInput] = useState("");

    const { user } = usePage<any>().props;
    const role = useGetUserRole();
    // TODO: Remove once all feature are integrated
    // const ProgramsData = getPrograms();

    const allProgramLength =
        pending_video_programs.length +
        uploaded_video_programs.length +
        all_edited_video_programs.length +
        some_unedited_video_programs.length +
        draft_programs.length +
        active_programs.length;

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
    const registeredSectionVisible = filteredRegisteredPrograms.length > 0;
    const activeSectionVisible = filteredActivePrograms.length > 0;
    const editedSectionVisible = filteredEditedPrograms.length > 0;
    const uneditedSectionVisible = filteredUneditedPrograms.length > 0;

    // TODO: adjust based on MCR Response
    // const validatedFalseSectionVisible = filteredNotUploadedPrograms.length > 0;
    // const programSectionVisible = allPrograms.length > 0;

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
                                {/* TODO: adjust based on MCR Response */}
                                {/* {validatedFalseSectionVisible && (
                                    <ValidationTable
                                        header={MCR_VALIDATION_HEADER}
                                        program={
                                            filteredValidationFalsePrograms
                                        }
                                    />
                                )}
                                {programSectionVisible && (
                                    <ProgramTable
                                        header={MCR_PROGRAM_HEADER}
                                        program={allPrograms}
                                    />
                                )} */}
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
