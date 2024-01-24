import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
// Component
import Button from "@/Components/Shared/Button";

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
});

type FormFields = z.infer<typeof schema>;

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState,
    } = useForm<FormFields>({
        resolver: zodResolver(schema),
    });

    const { errors } = formState;

    const onSubmit: SubmitHandler<FormFields> = (data) => {
        console.log(data);
    };

    return (
        <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
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
            <div className="flex flex-col gap-2 mb-12">
                <label className="body-2 font-medium" htmlFor="password">Password</label>
                <input
                    type="text"
                    id="password"
                    className="p-[10px] body-2 rounded-lg"
                    {...register("password")}
                    placeholder="Masukkan email"
                />
                {errors.password && (
                    <span className="text-error-500">{errors.password.message}</span>
                )}
            </div>
            <Button
                type="submit"
                label="Masuk"
                style="Filled"
                color="Primary"
                width="Full"
                size="Large"
            />
        </form>
    );
};

export default LoginForm;
