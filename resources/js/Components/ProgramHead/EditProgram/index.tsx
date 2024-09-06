import Dialog from "@/Components/Shared/Dialog";
import { useRef, useState, useEffect } from "react";
import Button from "@/Components/Shared/Button";
import EditProgramForm from "../EditProgramForm";

type ProgramType = {
    slug: string;
    status: "Aktif" | "Tidak Aktif";
    code: string;
    title: string;
    episode: Array<{ code: string; duration: string; productionDate: string; theme: string; desc: string; }>;
    members: Array<{ name: string; role: string }>;
    desc: string;
    premiere: string;
};

type FormDataType = {
    code: string;
    name: string;
    desc: string;
    status: "Aktif" | "Tidak Aktif",
    premiere: string;
    team: string[];
};

type EditProgramButtonProps = {
    program: ProgramType;
}

const EditProgramButton = ({ program }: EditProgramButtonProps) => {
const dialogRef = useRef<HTMLDialogElement>(null);
const [formData, setFormData] = useState<FormDataType>({
    code: program.code,
        name: program.title,
        desc: program.desc,
        status: program.status,
        premiere: program.premiere,
        team: program.members.map(member => member.name),
    });

useEffect(() => {
    if (program) {
        const newFormData = {
            code: program.code || '',
            name: program.title || '',
            desc: program.desc || '',
            status: program.status,
            premiere: program.premiere || '',
            team: program.members ? program.members.map((member) => member.name) : [],
        };
        setFormData(newFormData);
    }
}, [program]);

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
            label="Edit"
            style="Outlined"
            color="Primary"
            width="Fit"
            size="Medium"
            icon="/icon/edit.svg"
            iconPosition="Left"
            onClick={toggleDialog}
        />
        <Dialog
        size="Normal"
        toggleDialog={toggleDialog}
        ref={dialogRef}
        >
            <h1 className="heading-2 font-semibold text-left">Edit Program</h1>
            <EditProgramForm formData={formData} />
        </Dialog>
        </>
    )
}

export default EditProgramButton;