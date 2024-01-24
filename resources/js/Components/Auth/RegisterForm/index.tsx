import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
// Constants
import { RegisterOptions } from "@/Constants/FormOptions";
// Component
import Button from "@/Components/Shared/Button";
import Select from "@/Components/Form/Select";
import InputField from "@/Components/Form/InputField";

const phoneNumberValidator = (phoneNumber: string) => {
    return phoneNumber.startsWith('+62');
};

const schema = z.object({
    id: z.string().min(8),
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
    role: z.string(),
    phoneNumber: z.string().min(14).refine(phoneNumberValidator, {
        message: 'Phone number must start with +62',
    }),
});

type FormFields = z.infer<typeof schema>;

const RegisterForm = () => {
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
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex items-start justify-between mb-12">
                <div className="flex flex-col gap-6 w-[45%]">
                    <div className="flex flex-col gap-2">
                        <InputField
                            id="id"
                            type="text"
                            label="No. ID"
                            placeholder="Masukkan No. ID"
                            control={control}
                        />
                        {errors.id && (
                            <span className="text-error-500">{errors.id.message}</span>
                        )}
                    </div>
                    <div className="flex flex-col gap-2">
                        <InputField
                            id="name"
                            type="text"
                            label="Email"
                            placeholder="Masukkan Nama"
                            control={control}
                        />
                        {errors.name && (
                            <span className="text-error-500">{errors.name.message}</span>
                        )}
                    </div>
                    <div className="flex flex-col gap-2">
                        <InputField
                            id="email"
                            type="email"
                            label="Email"
                            placeholder="Masukkan email"
                            control={control}
                        />
                        {errors.email && (
                            <span className="text-error-500">{errors.email.message}</span>
                        )}
                    </div>
                </div>
                <div className="flex flex-col gap-6 w-[45%]">
                    <div className="flex flex-col gap-2">
                        <InputField
                            id="password"
                            type="password"
                            label="Password"
                            placeholder="Masukkan password"
                            control={control}
                        />
                        {errors.password && (
                            <span className="text-error-500">{errors.password.message}</span>
                        )}
                    </div>
                    <Select
                        id="role"
                        placeholder="Pilih Role"
                        label="Role"
                        options={RegisterOptions}
                        control={control}
                    />
                    <div className="flex flex-col gap-2">
                        <InputField
                            id="phoneNumber"
                            type="text"
                            label="Nomor Telepon"
                            placeholder="Masukkan phoneNumber"
                            control={control}
                        />
                        {errors.phoneNumber && (
                            <span className="text-error-500">{errors.phoneNumber.message}</span>
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

export default RegisterForm;
