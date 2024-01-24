import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
// Component
import Button from "@/Components/Shared/Button";
import InputField from "@/Components/Form/InputField";

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
        control
    } = useForm<FormFields>({
        resolver: zodResolver(schema),
    });

    const { errors } = formState;

    const onSubmit: SubmitHandler<FormFields> = (data) => {
        console.log(data);
    };

    return (
        <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
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

            <div>
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
