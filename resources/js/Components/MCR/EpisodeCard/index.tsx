
import { useRef } from "react"
// Component
import Dialog from "@/Components/Shared/Dialog"
import Button from "@/Components/Shared/Button"
import DetailEpisodeForm from "../DetailEpisodeForm"

type EpisodeCardProps = {
    episodeNumber: number
    thumbnail: string
    code: string
    duration: string
    productionDate: string
    theme: string
    desc: string
    airingStatus: string
    productionStatus: string
    segment: number
}

const EpisodeCard = ({
    episodeNumber,
    thumbnail,
    code,
    duration,
    productionDate,
    theme,
    desc,
    airingStatus,
    productionStatus,
    segment
}: EpisodeCardProps) => {
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
            <div className={`${airingStatus === 'On Air' ? 'border-2 border-solid border-success-600' : ''} max-w-[172px] h-fit flex flex-col gap-3 p-3 shadow-1 rounded-md`}>
                <img src={thumbnail} alt={`episode ${episodeNumber}`} className="w-[148px] h-[111px] rounded-md" />
                <p className="body-2 font-bold">Episode {episodeNumber}</p>
                <p className="caption-1">{productionStatus}</p>
                <Button type="button" label="Detail" style="Outlined" color="Primary" width="Full" size="Small" onClick={toggleDialog} />
            </div>
            <Dialog size="Normal" toggleDialog={toggleDialog} ref={dialogRef}>
                <h1 className="heading-2 font-semibold text-left">Episode {episodeNumber}</h1>
                <DetailEpisodeForm code={code} productionDate={productionDate} theme={theme} desc={desc} duration={duration} segment={segment} />
                <Button type="button" label="Kembali" style="Filled" color="Primary" width="Full" size="Large" onClick={toggleDialog} />
            </Dialog>
        </>
    )
}

export default EpisodeCard
