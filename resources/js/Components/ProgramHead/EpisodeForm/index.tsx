import DisabledInputField from "@/Components/Form/Disabled/DisabledInputField"
import DisabledTextarea from "@/Components/Form/Disabled/DisabledTextArea"

type EpisodeFormProps = {
    code: string;
    duration: "30 Minute" | "60 Minute" | "90 Minute";
    theme: string
    segment: number
    productionDate: string
    statusEpisode: "shooting" | "editing" | "validasi produser" | "validasi qc mcr" | "on air";
    desc: string
}

const EpisodeForm = ({
    code,
    duration,
    productionDate,
    theme,
    segment,
    statusEpisode,
    desc,
}: EpisodeFormProps) => {
    return (
        <div className="flex items-start justify-between">
            <div className="w-[48%] flex flex-col gap-6">
                <DisabledInputField
                    id="code"
                    label="Kode Episode"
                    type="text"
                    value={code}
                />
                <DisabledInputField
                    id="duration"
                    label="Durasi"
                    type="text"
                    value={duration}
                />
                <DisabledInputField
                    id="theme"
                    label="Tema"
                    type="text"
                    value={theme}
                />
                <DisabledInputField
                    id="segment"
                    label="Jumlah Segment"
                    type="text"
                    value={segment.toString()}
                />
            </div>
            <div className="w-[48%] flex flex-col gap-6">
                <DisabledInputField
                    id="statusEpisode"
                    label="Status Episode"
                    type="text"
                    value={statusEpisode}
                />
                <DisabledTextarea
                    id="desc"
                    label="Deskripsi"
                    maxLength={200}
                    value={desc}
                />
            </div>
        </div>
    )
}

export default EpisodeForm
