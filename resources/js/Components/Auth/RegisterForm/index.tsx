import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
// Component
import Button from "@/Components/Shared/Button";
import Select from "@/Components/Form/Select";
import { RegisterOptions } from "@/Constants/FormOptions";

const phoneNumberValidator = (phoneNumber: string) => {
    return phoneNumber.startsWith('+62');
};

const schema = z.object({
    id: z.string().min(8),
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
    role: z.string(),
    phoneNumber: z.string().refine(phoneNumberValidator, {
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
                        <label className="body-2 font-medium" htmlFor="id">No. ID</label>
                        <input
                            type="text"
                            id="id"
                            className="p-[10px] body-2 rounded-lg"
                            {...register("id")}
                            placeholder="Masukkan No. ID"
                        />
                        {errors.id && (
                            <span className="text-error-500">{errors.id.message}</span>
                        )}
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="body-2 font-medium" htmlFor="name">Nama</label>
                        <input
                            type="text"
                            id="name"
                            className="p-[10px] body-2 rounded-lg"
                            {...register("name")}
                            placeholder="Masukkan Nama"
                        />
                        {errors.name && (
                            <span className="text-error-500">{errors.name.message}</span>
                        )}
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="body-2 font-medium" htmlFor="email">Email</label>
                        <input
                            type="text"
                            id="email"
                            className="p-[10px] body-2 rounded-lg"
                            {...register("email")}
                            placeholder="Masukkan email"
                        />
                        {errors.email && (
                            <span className="text-error-500">{errors.email.message}</span>
                        )}
                    </div>
                </div>
                <div className="flex flex-col gap-6 w-[45%]">
                    <div className="flex flex-col gap-2">
                        <label className="body-2 font-medium" htmlFor="password">Password</label>
                        <input
                            type="text"
                            id="password"
                            className="p-[10px] body-2 rounded-lg"
                            {...register("password")}
                            placeholder="Masukkan Password"
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
                        <label className="body-2 font-medium" htmlFor="phoneNumber">Nomor Telepon</label>
                        <input
                            type="text"
                            id="phoneNumber"
                            className="p-[10px] body-2 rounded-lg"
                            {...register("phoneNumber")}
                            placeholder="Masukkan Nomor Telepon"
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
