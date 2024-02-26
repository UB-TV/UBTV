
import { useRef } from "react"
// Component
import Dialog from "@/Components/Shared/Dialog"
import Button from "@/Components/Shared/Button"
import RevisionForm from "../RevisionForm"
import DetailEpisodeForm from "../DetailEpisodeForm"

type ValidationCardProps = {
    episodeNumber: number
    thumbnail: string
    code: string
    duration: string
    productionDate: string
    segment: number
    theme: string
    desc: string
}

const ValidationCard = ({
    episodeNumber,
    thumbnail,
    code,
    duration,
    theme,
    productionDate,
    segment,
    desc,
}: ValidationCardProps) => {
    const detailRef = useRef<HTMLDialogElement>(null);
    const revisionlRef = useRef<HTMLDialogElement>(null);

    function toggleDialogDetail() {
        if (!detailRef.current) {
            console.log('p');

            return;
        }
        detailRef.current.hasAttribute("open")
            ? detailRef.current.close()
            : detailRef.current.showModal();
    }

    function toggleDialogRevision() {
        if (!revisionlRef.current) {
            return;
        }
        revisionlRef.current.hasAttribute("open")
            ? revisionlRef.current.close()
            : revisionlRef.current.showModal();
    }

    return (
        <>
            <div className='max-w-[256px] h-fit flex flex-col gap-3 p-3 shadow-1 rounded-md'>
                <img src={thumbnail} alt={`episode ${episodeNumber}`} className="w-[232px] h-[174px] rounded-md" />
                <p className="body-2 font-semibold text-center">Episode {episodeNumber}</p>
                <div className="flex items-center justify-between gap-3">
                    <Button type="button" label="Detail" style="Filled" color="Primary" width="Fit" size="Small" className="min-w-[45%]" onClick={toggleDialogDetail} />
                    <Button type="button" label="Revisi" style="Outlined" color="Primary" width="Fit" size="Small" className="min-w-[45%]" onClick={toggleDialogRevision} />
                </div>
            </div>
            {/* Detail Dialog */}
            <Dialog size="Normal" toggleDialog={toggleDialogDetail} ref={detailRef}>
                <h1 className="heading-2 font-semibold text-left">Episode {episodeNumber}</h1>
                <DetailEpisodeForm code={code} productionDate={productionDate} theme={theme} desc={desc} duration={duration} segment={segment} />
                <Button type="button" label="Kembali" style="Filled" color="Primary" width="Full" size="Large" onClick={toggleDialogDetail} />
            </Dialog>
            {/* Revision Dialog */}
            <Dialog size="Normal" toggleDialog={toggleDialogRevision} ref={revisionlRef}>
                <h2 className="heading-2 font-semibold">Revisi</h2>
                <RevisionForm />
            </Dialog>
        </>
    )
}

export default ValidationCard
