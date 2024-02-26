import DisabledInputField from "@/Components/Form/Disabled/DisabledInputField"
import DisabledTextarea from "@/Components/Form/Disabled/DisabledTextArea"
import Button from "@/Components/Shared/Button"

type EpisodeDetailProps = {
    code: string
    duration: string
    segmentNumber: number
    theme: string
    desc: string
    onClose: () => void
}

const EpisodeDetail = ({
    code,
    duration,
    segmentNumber,
    theme,
    desc,
    onClose
}: EpisodeDetailProps) => {
    return (
        <div className="flex flex-col gap-12">
            <h2 className="heading-2 font-semibold">Detail Episode</h2>
            <div>
                <div className="w-full flex items-start justify-between">
                    <div className="max-w-[48%] w-full flex flex-col gap-3">
                        <div>
                            <h1 className="heading-5 font-semibold mb-[6px]">Kode</h1>
                            <p className="body-2 font-semibold text-secondary-text">{code}</p>
                        </div>
                        <div>
                            <h1 className="heading-5 font-semibold mb-[6px]">Tema</h1>
                            <p className="body-2 font-semibold text-secondary-text">{theme}</p>
                        </div>
                    </div>
                    <div className="max-w-[48%] w-full flex flex-col gap-3">
                        <div>
                            <h1 className="heading-5 font-semibold mb-[6px]">Jumlah Segment</h1>
                            <p className="body-2 font-semibold text-secondary-text">{segmentNumber}</p>
                        </div>
                        <div>
                            <h1 className="heading-5 font-semibold mb-[6px]">Durasi</h1>
                            <p className="body-2 font-semibold text-secondary-text">{duration}</p>
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <h1 className="heading-5 font-semibold mb-[6px]">Deskripsi</h1>
                    <p className="body-2 font-semibold text-secondary-text">{desc}</p>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <Button type="button" label="Unduh" style="Filled" color="Primary" width="Full" size="Large" />
                <Button type="button" label="Tutup" style="Outlined" color="Primary" width="Full" size="Large" onClick={onClose} />
            </div>
        </div>
    )
}

export default EpisodeDetail
