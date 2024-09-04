
import Dialog from "@/Components/Shared/Dialog"
import { useRef } from "react"
import Button from "@/Components/Shared/Button"
import IconButton from "@/Components/Shared/IconButton.tsx"
import EpisodeDetail from "../EpisodeDetail"

type ProgramCardProps = {
    episodeNumber: number
    thumbnail: string
    code: string
    duration: string
    productionDate: string
    theme: string
    desc: string
    segmentNumber: number
}

const ProgramCard = ({
    episodeNumber,
    thumbnail,
    code,
    duration,
    theme,
    desc,
    segmentNumber
}: ProgramCardProps) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    function toggleDialog() {
        if (!dialogRef.current) {
            return;
        }
        dialogRef.current.hasAttribute("open")
            ? dialogRef.current.close()
            : dialogRef.current.showModal();
    }

    return (
        <>
            <div className='max-w-[256px] h-fit flex flex-col gap-3 p-3 shadow-1 rounded-md'>
                <img src={thumbnail} alt={`episode ${episodeNumber}`} className="w-[232px] h-[174px] rounded-md" />
                <p className="body-2 font-semibold text-center">Episode {episodeNumber}</p>
                <div className="flex items-center justify-between gap-3">
                    <Button type="button" label="Detail" style="Filled" color="Primary" width="Full" size="Small" onClick={toggleDialog} />
                    <IconButton icon="/icon/download-outlined.svg" style="Outlined" />
                </div>
            </div>
            <Dialog size="Normal" toggleDialog={toggleDialog} ref={dialogRef}>
                <EpisodeDetail
                    code={code}
                    duration={duration}
                    segmentNumber={segmentNumber}
                    theme={theme}
                    desc={desc}
                    onClose={toggleDialog}
                />
            </Dialog>
        </>
    )
}

export default ProgramCard
