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
import useEditEpisode from "@/repositories/producer/useEditEpisode";
import { formatDateForApi } from "@/util/formatDateforDB";
import { useEffect } from "react";

type EditEpisodeFormProps = {
    programId: number,
    episodeId: number,
    code: string
    duration: string
    start_production: string
    theme: string
    description: string
    segment_count: number
    status: string;
    onCloseDialog: () => void;
}

const schema = z.object({
    code: z.string().min(1, "Code is required"),
    duration: z.string().min(1, "Duration is required"),
    theme: z.string().min(1, "Theme is required"),
    start_production: z.string().min(1, "Start production date is required"),
    description: z.string().min(1, "Description is required"),
    status: z.string().min(1, "Production status is required"),
    segment_count: z.string().min(1, "Segment count is required"),
});

type FormFields = z.infer<typeof schema>;

const EditEpisodeForm = ({
    programId,
    episodeId,
    code,
    duration,
    start_production,
    theme,
    status,
    description,
    segment_count,
    onCloseDialog
}: EditEpisodeFormProps) => {

    const statusOptions = [
        { optionLabel: "Producer Validation", value: "PRODUCER_VALIDATION" },
        { optionLabel: "MCR Validation", value: "MCR_VALIDATION" },
        { optionLabel: "Shooting", value: "SHOOTING" },
        { optionLabel: "Editing", value: "EDITING" },
        { optionLabel: "On Air", value: "ON_AIR" },
    ];

    const {
        register,
        handleSubmit,
        formState,
        control
    } = useForm<FormFields>({
        resolver: zodResolver(schema),
    });

    const { errors } = formState;

    useEffect(() => {
        console.log(start_production);
    }, [])

    const { editEpisode, isLoading, error } = useEditEpisode();

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        try {
            const formattedPayload = {
                program_id: programId,
                episode_id: episodeId,
                ...data,
                start_production: formatDateForApi(data.start_production),
            };

            console.log(formattedPayload);

            const response = await editEpisode(
                String(episodeId),
                formattedPayload
            );

            if (response) {
                onCloseDialog();
            }
        } catch (err) {
            console.error("Form submission error:", err);
        }
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
                        value={String(duration)}
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
                        id="segment_count"
                        type="text"
                        label="Jumlah Segmen"
                        placeholder="Masukkan Jumlah Segmen"
                        control={control}
                        value={segment_count.toString()}
                    />
                    {errors.segment_count && (
                        <span className="text-error-500">{errors.segment_count.message}</span>
                    )}
                </div>
                <div className="w-[48%] flex flex-col gap-6">
                    <InputField
                        id="start_production"
                        type="text"
                        label="Tanggal Mulai Produksi"
                        placeholder="Masukkan Tanggal Produksi"
                        control={control}
                        value={start_production}
                    />
                    {errors.start_production && (
                        <span className="text-error-500">{errors.start_production.message}</span>
                    )}
                    <Select
                        id="status"
                        placeholder="Pilih status episode"
                        label="Status"
                        options={statusOptions}
                        control={control}
                        value={status}
                    />
                    {errors.status && (
                        <span className="text-error-500">{errors.status.message}</span>
                    )}
                    <TextArea
                        id="description"
                        label="Deskripsi"
                        placeholder="Masukkan Deskripsi"
                        control={control}
                        maxLength={200}
                        value={description}
                    />
                    {errors.description && (
                        <span className="text-error-500">{errors.description.message}</span>
                    )}
                </div>
            </div>
            <Button
                type="submit"
                label="Edit"
                style="Filled"
                color="Primary"
                width="Full"
                size="Large"
            />
        </form>
    )
}

export default EditEpisodeForm
