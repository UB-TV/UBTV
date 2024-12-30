import Dialog from "@/Components/Shared/Dialog";
import { useRef } from "react";
import Button from "@/Components/Shared/Button";
import EditProgramForm from "../EditProgramForm";

type ProgramType = {
    id: number;
    code: string;
    slug: string;
    name: string;
    description: string;
    is_active: boolean;
    premiere_at: string;
};

type EditProgramButtonProps = {
    program: ProgramType;
    onSuccess?: () => void;
};

const EditProgramButton = ({ program, onSuccess }: EditProgramButtonProps) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    function toggleDialog() {
        if (!dialogRef.current) {
            return;
        }
        dialogRef.current.hasAttribute("open")
            ? dialogRef.current.close()
            : dialogRef.current.showModal();
    }

    const handleSuccess = () => {
        toggleDialog();
        if (onSuccess) {
            onSuccess();
        }
    };

    return (
        <>
            <Button
                type="button"
                label="Edit"
                style="Outlined"
                color="Primary"
                width="Fit"
                size="Medium"
                icon="/icon/edit.svg"
                iconPosition="Left"
                onClick={toggleDialog}
            />
            <Dialog size="Normal" toggleDialog={toggleDialog} ref={dialogRef}>
                <h1 className="heading-2 font-semibold text-left">
                    Edit Program
                </h1>
                <EditProgramForm
                    formData={{
                        code: program.code,
                        name: program.name,
                        description: program.description,
                        is_active: program.is_active,
                        premiere_at: program.premiere_at,
                        slug: program.slug,
                    }}
                    onSuccess={handleSuccess}
                />
            </Dialog>
        </>
    );
};

export default EditProgramButton;
