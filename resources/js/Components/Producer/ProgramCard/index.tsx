
import { useRef } from "react"
// Component
import Dialog from "@/Components/Shared/Dialog"
import Button from "@/Components/Shared/Button"
import DetailEpisodeForm from "../DetailEpisodeForm"
import EditEpisodeForm from "../EditEpisodeForm"

type ProgramCardProps = {
    episodeNumber: number
    thumbnail: string
    code: string
    duration: string
    productionDate: string
    theme: string
    desc: string
    productionStatus: string
    segment: number
}

const ProgramCard = ({
    episodeNumber,
    thumbnail,
    code,
    duration,
    productionDate,
    theme,
    desc,
    productionStatus,
    segment
}: ProgramCardProps) => {
    const detailDialogRef = useRef<HTMLDialogElement>(null);
    const editDialogRef = useRef<HTMLDialogElement>(null);

    function toggleDetailDialog() {
        if (!detailDialogRef.current) {
            return;
        }
        detailDialogRef.current.hasAttribute("open")
            ? detailDialogRef.current.close()
            : detailDialogRef.current.showModal();
    }

    function toggleEditDialog() {
        if (detailDialogRef) detailDialogRef.current?.close();

        if (!editDialogRef.current) {
            return;
        }
        editDialogRef.current.hasAttribute("open")
            ? editDialogRef.current.close()
            : editDialogRef.current.showModal();
    }

    return (
        <>
            <div className='w-[256px] h-fit flex flex-col gap-3 p-3 shadow-1 rounded-md'>
                <img src={thumbnail} alt={`episode ${episodeNumber}`} className="rounded-md" />
                <p className="body-2 font-bold text-center">Episode {episodeNumber}</p>
                <Button type="button" label="Detail" style="Filled" color="Primary" width="Full" size="Small" onClick={toggleDetailDialog} />
            </div>
            <Dialog size="Normal" toggleDialog={toggleEditDialog} ref={editDialogRef}>
                <h1 className="heading-2 font-semibold text-left">Episode {episodeNumber}</h1>
                <EditEpisodeForm code={code} productionDate={productionDate} productionStatus={productionStatus} theme={theme} desc={desc} duration={duration} segment={segment} />
            </Dialog>
            <Dialog size="Normal" toggleDialog={toggleDetailDialog} ref={detailDialogRef}>
                <div className="flex items-center justify-between">
                    <h1 className="heading-2 font-semibold text-left">Episode {episodeNumber}</h1>
                    <Button type="button" label="Edit" style="Outlined" color="Primary" width="Fit" size="Large" icon="/icon/edit.svg" iconPosition="Left" onClick={toggleEditDialog} />
                </div>
                <DetailEpisodeForm code={code} productionDate={productionDate} productionStatus={productionStatus} theme={theme} desc={desc} duration={duration} segment={segment} />
                <Button type="button" label="Kembali" style="Filled" color="Primary" width="Full" size="Large" onClick={toggleDetailDialog} />
            </Dialog>
        </>
    )
}

export default ProgramCard
