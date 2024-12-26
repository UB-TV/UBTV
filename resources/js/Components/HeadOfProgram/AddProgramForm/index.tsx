import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
// Components
import Button from "@/Components/Shared/Button";
import InputField from "@/Components/Form/InputField";
import TextareaField from "@/Components/Form/TextArea";
import RadioButtonGroup from "@/Components/Form/Radio";
import { useProgramService } from "@/repositories/HeadOfProgram/useProgramService";

const AddProgramSchema = z.object({
    code: z.string().min(1, "Kode program wajib diisi"),
    name: z.string().min(1, "Nama program wajib diisi"),
    description: z.string().min(1, "Deskripsi wajib diisi"),
    is_active: z.boolean(),
    premiere_at: z.string().min(1, "Waktu premiere wajib diisi"),
});

type AddProgramFormFields = z.infer<typeof AddProgramSchema>;

const AddProgramForm = () => {
    const { createProgram, loading, error } = useProgramService();
    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<AddProgramFormFields>({
        resolver: zodResolver(AddProgramSchema),
        defaultValues: {
            is_active: false,
        },
    });

    const onSubmit: SubmitHandler<AddProgramFormFields> = async (data) => {
        try {
            const response = await createProgram(data);
            if (response) {
                console.log("Program created successfully");
                reset();
                window.location.reload();
            }
        } catch (err) {
            console.error("Failed to create program:", err);
        }
    };

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
                        control={control}
                    />
                </div>
                <div className="gap-3 flex flex-col">
                    <InputField
                        id="name"
                        type="text"
                        label="Nama Program"
                        placeholder="Masukkan Nama Program"
                        control={control}
                    />
                </div>
                <div className="gap-3 flex flex-col">
                    <TextareaField
                        id="description"
                        label="Deskripsi"
                        placeholder="Masukkan deskripsi"
                        maxLength={200}
                        control={control}
                    />
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
                        control={control}
                    />
                </div>
                <div className="gap-3 flex flex-col">
                    <label
                        htmlFor="premiere_at"
                        className="body-2 font-semibold mb-[6px]"
                    >
                        Waktu Premiere
                    </label>
                    <InputField
                        id="premiere_at"
                        type="datetime-local"
                        control={control}
                        label=""
                        placeholder="Masukkan Waktu Premiere"
                    />
                </div>
            </div>
            <Button
                type="submit"
                label={loading ? "Menambahkan..." : "Tambah Program"}
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

export default AddProgramForm;
