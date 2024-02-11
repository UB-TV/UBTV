import TextArea from "@/Components/Form/TextArea";
import Button from "@/Components/Shared/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
    revisionMessage: z.string()
});

type FormFields = z.infer<typeof schema>;


type RevisionFormProps = {
    onCloseDialog: () => void;
}

const RevisionForm = ({
    onCloseDialog
}: RevisionFormProps) => {
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
        onCloseDialog();
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
            <Button
                type="submit"
                label="Kirim"
                style="Filled"
                color="Primary"
                width="Full"
                size="Large"
            />
        </form>
    )
}

export default RevisionForm
