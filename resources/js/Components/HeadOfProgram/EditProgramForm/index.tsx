import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { useProgramService } from "@/repositories/HeadOfProgram/useProgramService";
// Components
import Button from "@/Components/Shared/Button";
import InputField from "@/Components/Form/InputField";
import TextareaField from "@/Components/Form/TextArea";
import RadioButtonGroup from "@/Components/Form/Radio";

type EditProgramFormProps = {
    formData: {
        code: string;
        name: string;
        description: string;
        is_active: boolean;
        premiere_at: string;
        slug: string;
    };
    onSuccess: () => void;
};

const EditProgramSchema = z.object({
    code: z.string().min(1, "Kode program wajib diisi"),
    name: z.string().min(1, "Nama program wajib diisi"),
    description: z.string().min(1, "Deskripsi program wajib diisi"),
    is_active: z.boolean(),
    premiere_at: z.string().min(1, "Waktu premiere wajib dipilih"),
});

type EditProgramFormFields = z.infer<typeof EditProgramSchema>;

const EditProgramForm = ({ formData, onSuccess }: EditProgramFormProps) => {
    const { updateProgram, loading, error } = useProgramService();

    console.log("Initial formData:", formData);

    const formatDateForInput = (dateString: string) => {
        try {
            // Split tanggal dan waktu dari format "YYYY-MM-DD HH:mm:ss"
            const [datePart, timePart] = dateString.split(" ");
            if (!datePart || !timePart) return "";

            // Ambil jam dan menit saja dari waktu
            const [hours, minutes] = timePart.split(":");

            // Gabungkan dalam format yang sesuai untuk input datetime-local
            return `${datePart}T${hours}:${minutes}`;
        } catch (e) {
            console.error("Error formatting date:", e);
            return "";
        }
    };

    const { register, handleSubmit, formState, control, reset } =
        useForm<EditProgramFormFields>({
            resolver: zodResolver(EditProgramSchema),
            defaultValues: {
                code: formData.code,
                name: formData.name,
                description: formData.description,
                is_active: formData.is_active,
                premiere_at: formatDateForInput(formData.premiere_at),
            },
        });

    const { errors } = formState;

    useEffect(() => {
        reset({
            ...formData,
            premiere_at: formatDateForInput(formData.premiere_at),
        });
    }, [formData, reset]);

    const onSubmit: SubmitHandler<EditProgramFormFields> = async (data) => {
        console.log("Form submitted with data:", data);
        try {
            const submissionData = {
                code: data.code,
                name: data.name,
                description: data.description,
                is_active: data.is_active,
                premiere_at: formatDateForSubmission(data.premiere_at),
                slug: formData.slug,
            };
            console.log("Submission data:", submissionData);

            const result = await updateProgram(submissionData);
            console.log("Update result:", result);
            if (result) {
                onSuccess();
            }
        } catch (err) {
            console.error("Failed to update program:", err);
        }
    };

    const formatDateForSubmission = (dateString: string): string => {
        try {
            // dateString akan dalam format "YYYY-MM-DDThh:mm"
            // Kita perlu mengubahnya menjadi "YYYY-MM-DD hh:mm:00"
            return dateString.replace("T", " ") + ":00";
        } catch (e) {
            console.error("Error formatting date for submission:", e);
            return dateString;
        }
    };

    const formattedDate = formatDateForInput(formData.premiere_at);
    console.log("Formatted Premiere Date:", formattedDate);

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-wrap justify-between gap-6"
        >
            <div className="w-[48%] flex flex-col gap-6">
                <div className="gap-3 flex flex-col">
                    <InputField
                        id="code"
                        type="text"
                        label="Kode"
                        placeholder="Masukkan Kode"
                        {...register("code")}
                        control={control}
                    />
                    {errors.code && (
                        <span className="text-error-500">
                            {errors.code.message}
                        </span>
                    )}
                </div>
                <div className="gap-3 flex flex-col">
                    <InputField
                        id="name"
                        type="text"
                        label="Nama Program"
                        placeholder="Masukkan Nama Program"
                        {...register("name")}
                        control={control}
                    />
                    {errors.name && (
                        <span className="text-error-500">
                            {errors.name.message}
                        </span>
                    )}
                </div>
                <div className="gap-3 flex flex-col">
                    <TextareaField
                        id="description"
                        label="Deskripsi"
                        placeholder="Masukkan deskripsi"
                        maxLength={200}
                        {...register("description")}
                        control={control}
                    />
                    {errors.description && (
                        <span className="text-error-500">
                            {errors.description.message}
                        </span>
                    )}
                </div>
            </div>
            <div className="w-[48%] flex flex-col gap-6">
                <div className="gap-3 flex flex-col">
                    <RadioButtonGroup
                        id="is_active"
                        label="Status Program"
                        options={[
                            { label: "Aktif", value: true },
                            { label: "Tidak Aktif", value: false },
                        ]}
                        {...register("is_active")}
                        control={control}
                    />
                </div>
                <div className="gap-3 flex flex-col">
                    <label
                        htmlFor="premiere_at"
                        className="text-sm font-medium"
                    >
                        Waktu Premiere
                    </label>
                    <input
                        type="datetime-local"
                        id="premiere_at"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        {...register("premiere_at")}
                    />
                    {errors.premiere_at && (
                        <span className="text-error-500">
                            {errors.premiere_at.message}
                        </span>
                    )}
                </div>
            </div>
            <Button
                type="submit"
                label={loading ? "Menyimpan..." : "Simpan"}
                style="Filled"
                color="Primary"
                width="Full"
                size="Large"
            />
            {error && (
                <span className="text-error-500 w-full text-center">
                    {error}
                </span>
            )}
        </form>
    );
};

export default EditProgramForm;
