import DisabledInputField from "@/Components/Form/Disabled/DisabledInputField"
import DisabledTextarea from "@/Components/Form/Disabled/DisabledTextArea"

type DetailEpisodeFormProps = {
    code: string
    duration: string
    productionDate: string
    theme: string
    desc: string
    segment: number
}

const DetailEpisodeForm = ({
    code,
    duration,
    productionDate,
    theme,
    desc,
    segment
}: DetailEpisodeFormProps) => {
    return (
        <div className="flex items-start justify-between">
            <div className="w-[48%] flex flex-col gap-6">
                <DisabledInputField
                    id="code"
                    label="Kode"
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
                    label="Jumlah Segmen"
                    type="text"
                    value={segment.toString()}
                />
            </div>
            <div className="w-[48%] flex flex-col gap-6">
                <DisabledInputField
                    id="productionDate"
                    label="Produksi"
                    type="text"
                    value={productionDate}
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

export default DetailEpisodeForm
