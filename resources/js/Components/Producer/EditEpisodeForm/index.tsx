import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
// Component
import DisabledInputField from "@/Components/Form/Disabled/DisabledInputField"
import DisabledTextarea from "@/Components/Form/Disabled/DisabledTextArea"
import Button from "@/Components/Shared/Button";
import InputField from "@/Components/Form/InputField";
import Select from "@/Components/Form/Select";
import { durationOptions } from "@/Constants/FormOptions";
import TextArea from "@/Components/Form/TextArea";

type EditEpisodeFormProps = {
    code: string
    duration: string
    productionDate: string
    productionStatus: string
    theme: string
    desc: string
    segment: number
}

const schema = z.object({
    code: z.string(),
    duration: z.string(),
    theme: z.string(),
    productionDate: z.string(),
    productionStatus: z.string(),
    desc: z.string(),
    segment: z.string()
});

type FormFields = z.infer<typeof schema>;

const EditEpisodeForm = ({
    code,
    duration,
    productionDate,
    productionStatus,
    theme,
    desc,
    segment
}: EditEpisodeFormProps) => {

    const {
        register,
        handleSubmit,
        formState,
        control
    } = useForm<FormFields>({
        resolver: zodResolver(schema),
    });

    const { errors } = formState;

    const onSubmit: SubmitHandler<FormFields> = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex items-start justify-between mb-12">
                <div className="w-[48%] flex flex-col gap-6">
                    <InputField
                        id="code"
                        type="text"
                        label="Kode"
                        placeholder="Masukkan Kode"
                        control={control}
                        value={code}
                    />
                    {errors.code && (
                        <span className="text-error-500">{errors.code.message}</span>
                    )}
                    <Select
                        id="duration"
                        placeholder="Pilih Durasi"
                        label="Durasi"
                        options={durationOptions}
                        control={control}
                        value={duration}
                    />
                    <InputField
                        id="theme"
                        type="text"
                        label="Tema"
                        placeholder="Masukkan Tema"
                        control={control}
                        value={theme}
                    />
                    {errors.theme && (
                        <span className="text-error-500">{errors.theme.message}</span>
                    )}
                    <InputField
                        id="segment"
                        type="text"
                        label="Jumlah Segmen"
                        placeholder="Masukkan Jumlah Segmen"
                        control={control}
                        value={segment.toString()}
                    />
                    {errors.segment && (
                        <span className="text-error-500">{errors.segment.message}</span>
                    )}
                </div>
                <div className="w-[48%] flex flex-col gap-6">
                    <InputField
                        id="productionStatus"
                        type="text"
                        label="Status Episode"
                        placeholder="Masukkan Status Episode"
                        control={control}
                        value={productionStatus}
                    />
                    {errors.productionStatus && (
                        <span className="text-error-500">{errors.productionStatus.message}</span>
                    )}
                    <InputField
                        id="productionDate"
                        type="text"
                        label="Tanggal Produksi"
                        placeholder="Masukkan Tanggal Produksi"
                        control={control}
                        value={productionDate}
                    />
                    {errors.productionDate && (
                        <span className="text-error-500">{errors.productionDate.message}</span>
                    )}
                    <TextArea
                        id="desc"
                        label="Deskripsi"
                        placeholder="Masukkan Deskripsi"
                        control={control}
                        maxLength={200}
                        value={desc}
                    />
                    {errors.desc && (
                        <span className="text-error-500">{errors.desc.message}</span>
                    )}
                </div>
            </div>
            <Button type="submit" label="Edit" style="Filled" color="Primary" width="Full" size="Large" />
        </form>
    )
}

export default EditEpisodeForm
