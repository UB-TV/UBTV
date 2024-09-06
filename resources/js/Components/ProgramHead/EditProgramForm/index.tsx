import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
// Components
import Button from "@/Components/Shared/Button";
import InputField from "@/Components/Form/InputField";
import Select from "@/Components/Form/Select";
import TextareaField from "@/Components/Form/TextArea";
import RadioButtonGroup from "@/Components/Form/Radio";
import MultiSelect from "@/Components/Form/MultiSelect";

import { Team } from "@/Constants/Temp";

type EditProgramFormProps = {
    formData: {
        code: string;
        name: string;
        desc: string;
        status: "Aktif" | "Tidak Aktif",
        premiere: string;
        team: string[];
    };
};

const EditProgramSchema = z.object({
    code: z.string().min(8, "Kode minimal harus 8 karakter").nonempty("Kode program wajib diisi"),
    name: z.string().min(1, "Nama program tidak boleh kosong").nonempty("Nama program wajib diisi"),
    desc: z.string().nonempty("Deskripsi program wajib diisi"),
    status: z.string().nonempty("Status program wajib dipilih"),
    premiere: z.string().nonempty("Waktu premiere wajib dipilih"),
    team: z.array(z.string()).min(3, "Minimal 3 anggota tim harus dipilih"),
});

type EditProgramFormFields = z.infer<typeof EditProgramSchema>;

const EditProgramForm = ({ formData }: EditProgramFormProps) => {
    const { register, handleSubmit, formState, control, reset } = useForm<EditProgramFormFields>({
        resolver: zodResolver(EditProgramSchema),
        defaultValues: {...formData},
    });

    const { errors } = formState;

    useEffect(() => {
        reset(formData);
    }, [formData, reset]);

    const onSubmit: SubmitHandler<EditProgramFormFields> = (data) => {
        console.log("Form data:", data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap justify-between gap-6">
            <div className="w-[48%] flex flex-col gap-6">
                <div className="gap-3 flex flex-col">
                    <InputField
                        id="code"
                        type="text"
                        label="Kode"
                        placeholder="Masukkan Kode"
                        control={control}
                    />
                    {errors.code && <span className="text-error-500">{errors.code.message}</span>}
                    
                </div>
                <div className="gap-3 flex flex-col">
                    <InputField
                        id="name"
                        type="text"
                        label="Nama Program"
                        placeholder="Masukkan Nama Program"
                        control={control}
                    />
                    {errors.name && <span className="text-error-500">{errors.name.message}</span>}
                </div>
                <div className="gap-3 flex flex-col">
                    <TextareaField
                        id="desc"
                        label="Deskripsi"
                        placeholder="Masukkan deskripsi"
                        control={control}
                    />
                    {errors.desc && <span className="text-error-500">{errors.desc.message}</span>}
                </div>
            </div>
            <div className="w-[48%] flex flex-col gap-6">
            <div className="gap-3 flex flex-col">
            <RadioButtonGroup
            id="status"
            label="Status Program"
            options={[
                { label: 'Aktif', value: 'Aktif' },
                { label: 'Tidak Aktif', value: 'Tidak Aktif' },
            ]}
            control={control}
            />
                    {errors.status && <span className="text-error-500">{errors.status.message}</span>}
            </div>
            <div className="gap-3 flex flex-col">
                <Select
                    id="premiere"
                    label="Waktu Premiere"
                    placeholder="Pilih Waktu"
                    options={[
                        { value: '08:00 AM', optionLabel: '08:00 AM' },
                        { value: '10:00 AM', optionLabel: '10:00 AM' }
                    ]}
                    control={control}
                />
                {errors.premiere && <span className="text-error-500">{errors.premiere.message}</span>}
            </div>
            <div className="gap-3 flex flex-col">
                <MultiSelect id="team" label="Tim" options={Team} control={control}/>
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
    );

};

export default EditProgramForm;