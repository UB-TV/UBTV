import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/Components/Shared/Button";
import TextArea from "@/Components/Form/TextArea";
import useSubmitRevision from "@/repositories/shared/useSubmitRevision";

const schema = z.object({
    revisionMessage: z.string().min(1, "Pesan revisi tidak boleh kosong")
});

type FormFields = z.infer<typeof schema>;

interface RevisionFormProps {
    programId: number;
    episodeId: number;
    onSuccess?: () => void;
}

const RevisionForm = ({ programId, episodeId, onSuccess }: RevisionFormProps) => {
    const { submitRevision, isLoading, error } = useSubmitRevision();

    const {
        handleSubmit,
        formState,
        control,
        reset
    } = useForm<FormFields>({
        resolver: zodResolver(schema),
    });

    const { errors } = formState;

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        try {
            const response = await submitRevision({
                program_id: programId,
                episode_id: episodeId,
                message: data.revisionMessage
            });

        } catch (err) {
            console.error("Failed to submit revision:", err);
        }
    };

    return (
        <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <TextArea
                    id="revisionMessage"
                    label="Pesan"
                    placeholder="Masukkan pesan revisi"
                    control={control}
                    maxLength={200}
                />
                {errors.revisionMessage && (
                    <span className="text-error-500">{errors.revisionMessage.message}</span>
                )}
            </div>
            {error && (
                <div className="p-2 bg-error-50 text-error-700 rounded">
                    {error}
                </div>
            )}
            <Button
                type="submit"
                label={isLoading ? "Mengirim..." : "Kirim"}
                style="Filled"
                color="Primary"
                width="Full"
                size="Large"
            />
        </form>
    );
};

export default RevisionForm;
