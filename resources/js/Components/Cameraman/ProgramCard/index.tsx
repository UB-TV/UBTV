
import Dialog from "@/Components/Shared/Dialog"
import { useRef } from "react"
import Button from "@/Components/Shared/Button"
import EpisodeForm from "../EpisodeForm"

interface IProgramCard {
    episodeNumber: number
    thumbnail?: string
    code: string
    duration: string
    productionDate: string
    theme: string
    desc: string
    isActive?: boolean
}

const ProgramCard = ({
    episodeNumber,
    thumbnail = '/image/program-thumbnail.jpg',
    code,
    duration,
    productionDate,
    theme,
    desc,
    isActive = false
}: IProgramCard) => {
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
            <div className={`${isActive ? 'border-2 border-solid border-success-600' : ''} max-w-[182px] h-fit flex flex-col gap-3 p-3 shadow-1 rounded-md`}>
                <img src={thumbnail} alt={`episode ${episodeNumber}`} className="w-[148px] h-[111px] rounded-md" />
                <p className="body-2 font-semibold">Episode {episodeNumber}</p>
                <Button type="button" label="Detail" style="Outlined" color="Primary" width="Full" size="Small" onClick={toggleDialog} />
            </div>
            <Dialog size="Normal" toggleDialog={toggleDialog} ref={dialogRef}>
                <h1 className="heading-2 font-semibold text-left">Episode {episodeNumber}</h1>
                <EpisodeForm
                    code={code}
                    duration={duration}
                    productionDate={productionDate}
                    theme={theme}
                    desc={desc}
                />
                <Button type="button" label="Kembali" style="Filled" color="Primary" width="Full" size="Large" onClick={toggleDialog} />
            </Dialog>
        </>
    )
}

export default ProgramCard
