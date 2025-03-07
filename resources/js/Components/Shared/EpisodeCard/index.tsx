import Button from "@/Components/Shared/Button";
import DetailEpisodeForm from "@/Components/MCR/DetailEpisodeForm";
// Component
import Dialog from "@/Components/Shared/Dialog";
import EditEpisodeForm from "@/Components/Producer/EditEpisodeForm";
import RevisionForm from "../../MCR/RevisionForm";
import useDeleteEpisode from "@/repositories/producer/useDeletEpisode";
import { useRef } from "react";

type EpisodeCardProps = {
    program_id?: number;
    epsideo_id?: number;
    episodeNumber: number;
    thumbnail: string;
    code: string;
    duration: string;
    productionDate: string;
    theme: string;
    desc: string;
    status?: string;
    airingStatus: string;
    productionStatus: string;
    segment: number;
    isRevision?: boolean;
    enableDelete?: boolean;
    enableEdit?: boolean;
};

const EpisodeCard = ({
    program_id,
    epsideo_id,
    episodeNumber,
    thumbnail,
    code,
    duration,
    productionDate,
    theme,
    desc,
    airingStatus,
    segment,
    status,
    isRevision = false,
    enableDelete = false,
    enableEdit = false,
}: EpisodeCardProps) => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const revisionDialogRef = useRef<HTMLDialogElement>(null);
    const editDialogRef = useRef<HTMLDialogElement>(null);

    function toggleDialog() {
        if (!dialogRef.current) {
            return;
        }
        dialogRef.current.hasAttribute("open")
            ? dialogRef.current.close()
            : dialogRef.current.showModal();
    }

    function toggleRevisionDialog() {
        if (!revisionDialogRef.current) {
            return;
        }
        revisionDialogRef.current.hasAttribute("open")
            ? revisionDialogRef.current.close()
            : revisionDialogRef.current.showModal();
    }

    function toggleEditDialog() {
        if (!editDialogRef.current) {
            return;
        }
        editDialogRef.current.hasAttribute("open")
            ? editDialogRef.current.close()
            : editDialogRef.current.showModal();
    }

    const { deleteEpisode, isLoading, error } = useDeleteEpisode();

    return (
        <>
            <div
                className={`${
                    airingStatus === "ON_AIR"
                        ? "border-2 border-solid border-success-600"
                        : ""
                } max-w-[280px] h-fit flex flex-col gap-3 p-3 shadow-1 rounded-md`}
            >
                <img
                    src={thumbnail}
                    alt={`episode ${episodeNumber}`}
                    className="min-w-[170px] h-[120px] rounded-md object-cover"
                />
                <p className="body-2 font-bold">Episode {episodeNumber}</p>
                <div className="flex items-center justify-between gap-2">
                    <Button
                        type="button"
                        label="Detail"
                        style="Filled"
                        color="Primary"
                        width="Full"
                        size="Small"
                        className="flex-1"
                        onClick={toggleDialog}
                    />
                    {isRevision && (
                        <Button
                            type="button"
                            label="Revisi"
                            style="Outlined"
                            color="Primary"
                            width="Full"
                            size="Small"
                            className="flex-1"
                            onClick={toggleRevisionDialog}
                        />
                    )}
                    {enableDelete && (
                        <Button
                            type="button"
                            style="Filled"
                            color="Error"
                            width="Fit"
                            size="Small"
                            className="flex-1"
                            icon="/icon/delete.svg"
                            iconOnly
                            onClick={() =>
                                deleteEpisode(String(epsideo_id) ?? "")
                            }
                        />
                    )}
                </div>
            </div>
            <Dialog size="Normal" toggleDialog={toggleDialog} ref={dialogRef}>
                <div className="flex items-center justify-between">
                    <h1 className="heading-2 font-semibold text-left">
                        Episode {episodeNumber}
                    </h1>
                    {enableEdit && (
                        <Button
                            type="button"
                            style="Outlined"
                            color="Primary"
                            label="Edit"
                            width="Fit"
                            size="Small"
                            onClick={toggleEditDialog}
                        />
                    )}
                </div>
                <DetailEpisodeForm
                    code={code}
                    productionDate={productionDate}
                    theme={theme}
                    desc={desc}
                    duration={duration}
                    segment={segment}
                />
                <Button
                    type="button"
                    label="Kembali"
                    style="Filled"
                    color="Primary"
                    width="Full"
                    size="Large"
                    onClick={toggleDialog}
                />
            </Dialog>
            <Dialog
                size="Normal"
                toggleDialog={toggleEditDialog}
                ref={editDialogRef}
            >
                <h1 className="heading-2 font-semibold text-left">
                    Episode {episodeNumber}
                </h1>
                <EditEpisodeForm
                    programId={program_id ?? 0}
                    episodeId={epsideo_id ?? 0}
                    code={code}
                    start_production={productionDate}
                    theme={theme}
                    description={desc}
                    duration={duration}
                    segment_count={segment}
                    status={status ?? ""}
                    onCloseDialog={toggleEditDialog}
                />
            </Dialog>
            <Dialog
                size="Normal"
                toggleDialog={toggleRevisionDialog}
                ref={revisionDialogRef}
            >
                <h1 className="heading-2 font-semibold text-left">Revisi</h1>
                <RevisionForm
                    programId={program_id ?? 0}
                    episodeId={epsideo_id ?? 0}
                />
            </Dialog>
        </>
    );
};

export default EpisodeCard;
