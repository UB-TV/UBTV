
import Dialog from "@/Components/Shared/Dialog"
import { useRef } from "react"
import Button from "@/Components/Shared/Button"
import EpisodeForm from "../EpisodeForm"

type ProgramCardProps = {
    episodeNumber: number
    thumbnail: string
    code: string
    segment: number
    duration: "30 Minute" | "60 Minute" | "90 Minute";
    productionDate: string
    theme: string
    desc: string
    statusEpisode: "shooting" | "editing" | "validasi produser" | "validasi qc mcr" | "on air";
}

const ProgramCard = ({
    episodeNumber,
    thumbnail,
    code,
    duration,
    productionDate,
    segment,
    theme,
    desc,
    statusEpisode
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
            <div className={`${statusEpisode == "on air" ? 'border-2 border-solid border-success-600' : ''} max-w-[182px] h-fit flex flex-col gap-2 p-3 shadow-1 rounded-md`}>
                <img src={thumbnail} alt={`episode ${episodeNumber}`} className="w-[148px] h-[111px] rounded-md" />
                <p className="body-2 font-semibold">Episode {episodeNumber}</p>
                <p className="caption-1 font-normal">{statusEpisode}</p>
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
                    statusEpisode={statusEpisode}
                    segment={segment}
                />
                <Button type="button" label="Kembali" style="Filled" color="Primary" width="Full" size="Large" onClick={toggleDialog} />
            </Dialog>
        </>
    )
}

export default ProgramCard
