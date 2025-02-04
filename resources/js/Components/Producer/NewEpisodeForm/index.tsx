import { SubmitHandler, useForm } from "react-hook-form";

import Button from "@/Components/Shared/Button";
import DatePicker from "@/Components/Form/DatePicker";
import InputField from "@/Components/Form/InputField";
import Select from "@/Components/Form/Select";
import TextArea from "@/Components/Form/TextArea";
import { durationOptions } from "@/Constants/FormOptions";
import useCreateEpisode from "@/repositories/producer/useCreateEpisode";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type NewEpisodeFormProps = {
    onCloseDialog: () => void;
    programId: number;
};

const schema = z.object({
    code: z.string(),
    duration: z.string(),
    theme: z.string(),
    segment_count: z.string().min(1),
    start_production: z.string(),
    description: z.string().max(200).min(1),
});

type FormFields = z.infer<typeof schema>;

const NewEpisodeForm = ({ onCloseDialog, programId }: NewEpisodeFormProps) => {
    const { createEpisode, isLoading, error } = useCreateEpisode();

    const { register, handleSubmit, formState, control } = useForm<FormFields>({
        resolver: zodResolver(schema),
    });

    const { errors } = formState;

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        try {
            await createEpisode({
                ...data,
                program_id: programId,
            });
            if (error) return;
            onCloseDialog();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {error && (
                <div className="mb-4 p-2 bg-error-50 text-error-500 rounded">
                    {error}
                </div>
            )}
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
                            <span className="text-error-500">
                                {errors.code.message}
                            </span>
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
                            <span className="text-error-500">
                                {errors.theme.message}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col gap-2">
                        <InputField
                            id="segment_count"
                            type="number"
                            label="Jumlah Episode"
                            placeholder="Masukkan Jumlah Segmen"
                            control={control}
                        />
                        {errors.segment_count && (
                            <span className="text-error-500">
                                {errors.segment_count.message}
                            </span>
                        )}
                    </div>
                </div>
                <div className="flex flex-col gap-6 w-[45%]">
                    <div className="flex flex-col gap-2">
                        <DatePicker
                            id="start_production"
                            label="Tanggal Mulai Produksi"
                            placeholder="Pilih Tanggal Mulai Produksi"
                            control={control}
                        />
                        {errors.start_production && (
                            <span className="text-error-500">
                                {errors.start_production.message}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col gap-2">
                        <TextArea
                            id="description"
                            label="Deskripsi"
                            placeholder="Masukkan Deskripsi"
                            control={control}
                            maxLength={200}
                        />
                        {errors.description && (
                            <span className="text-error-500">
                                {errors.description.message}
                            </span>
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
    );
};

export default NewEpisodeForm;
