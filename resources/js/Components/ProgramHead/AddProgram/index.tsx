import Dialog from "@/Components/Shared/Dialog";
import { useRef } from "react";
import Button from "@/Components/Shared/Button";
import AddProgramForm from "../AddProgramForm";

const AddProgramButton = () => {
const dialogRef = useRef<HTMLDialogElement>(null);

    function toggleDialog() {
        if (!dialogRef.current) {
            return;
        }
        dialogRef.current.hasAttribute("open")
            ? dialogRef.current.close()
            : dialogRef.current.showModal();
    }

    return(
        <>
        <Button
            type="button"
            label="Tambah Program"
            style="Filled"
            color="Primary"
            width="Fit"
            size="Medium"
            icon="/icon/plus-white.svg"
            iconPosition="Left"
            onClick={toggleDialog}
        />
        <Dialog
        size="Normal"
        toggleDialog={toggleDialog}
        ref={dialogRef}
        >
            <h1 className="heading-2 font-semibold text-left">Tambah Program</h1>
            <AddProgramForm />
        </Dialog>
        </>
    )
}

export default AddProgramButton;