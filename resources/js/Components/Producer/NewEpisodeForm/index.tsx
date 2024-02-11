import DisabledInputField from "@/Components/Form/Disabled/DisabledInputField"
import DisabledTextarea from "@/Components/Form/Disabled/DisabledTextArea"
import InputField from "@/Components/Form/InputField"
import Select from "@/Components/Form/Select"
import TextArea from "@/Components/Form/TextArea"
import Button from "@/Components/Shared/Button"
import { durationOptions } from "@/Constants/FormOptions"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"

type NewEpisodeFormProps = {
    onCloseDialog: () => void;
}

const schema = z.object({
    code: z.string(),
    duration: z.string(),
    theme: z.string(),
    segment: z.string().min(1),
    startProductionDate: z.string(),
    desc: z.string().max(200).min(1)
});

type FormFields = z.infer<typeof schema>;

const NewEpisodeForm = ({
    onCloseDialog
}: NewEpisodeFormProps) => {

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
        onCloseDialog()
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex items-start justify-between mb-12">
                <div className="flex flex-col gap-6 w-[45%]">
                    <div className="flex flex-col gap-2">
                        <InputField
                            id="code"
                            type="text"
                            label="Kode Episode"
                            placeholder="Masukkan Kode Episode"
                            control={control}
                        />
                        {errors.code && (
                            <span className="text-error-500">{errors.code.message}</span>
                        )}
                    </div>
                    <Select
                        id="duration"
                        placeholder="Pilih Durasi"
                        label="Durasi"
                        options={durationOptions}
                        control={control}
                    />
                    <div className="flex flex-col gap-2">
                        <InputField
                            id="theme"
                            type="text"
                            label="Tema"
                            placeholder="Massukkan Tema"
                            control={control}
                        />
                        {errors.theme && (
                            <span className="text-error-500">{errors.theme.message}</span>
                        )}
                    </div>
                    <div className="flex flex-col gap-2">
                        <InputField
                            id="segment"
                            type="number"
                            label="Jumlah Episode"
                            placeholder="Masukkan Jumlah Segmen"
                            control={control}
                        />
                        {errors.segment && (
                            <span className="text-error-500">{errors.segment.message}</span>
                        )}
                    </div>
                </div>
                <div className="flex flex-col gap-6 w-[45%]">
                    <div className="flex flex-col gap-2">
                        <InputField
                            id="startProductionDate"
                            type="text"
                            label="Tanggal Mulai Produksi"
                            placeholder="Masukkan Tanggal Mulai Produksi"
                            control={control}
                        />
                        {errors.startProductionDate && (
                            <span className="text-error-500">{errors.startProductionDate.message}</span>
                        )}
                    </div>
                    <div className="flex flex-col gap-2">
                        <TextArea
                            id="desc"
                            label="Deskripsi"
                            placeholder="Masukkan Deskripsi"
                            control={control}
                            maxLength={200}
                        />
                        {errors.desc && (
                            <span className="text-error-500">{errors.desc.message}</span>
                        )}
                    </div>
                </div>
            </div>
            <Button
                type="submit"
                label="Daftar"
                style="Filled"
                color="Primary"
                width="Full"
                size="Large"
            />
        </form>
    )
}

export default NewEpisodeForm
