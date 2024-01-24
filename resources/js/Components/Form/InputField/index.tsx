// InputField.tsx
import { useState } from 'react';
import { useController } from 'react-hook-form';

type InputFieldProps = {
    id: string;
    type: "button" | 'checkbox' | "color" | "datetime-local" | "email" | "hidden" | "email" | "file" | "image" | "month" | "number" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "text" | "time" | "url" | "week";
    label: string;
    placeholder: string;
    control: any;
};

const InputField = ({
    id,
    type,
    label,
    placeholder,
    control,
}: InputFieldProps) => {
    const {
        field: { value, onChange },
    } = useController({
        name: id,
        control,
        defaultValue: '',
    });

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    return (
        <div className="flex flex-col gap-2">
            <label className="body-2 font-medium" htmlFor={id}>
                {label}
            </label>
            <div className="relative">
                <input
                    type={showPassword ? 'text' : type}
                    id={id}
                    placeholder={placeholder}
                    className={`p-[10px] body-2 rounded-lg w-full`}
                    value={value}
                    onChange={onChange}
                />
                {type === 'password' && (
                    <button
                        type="button"
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? (
                            <img src="/icon/eye-on-fill.svg" alt="Eye On" />
                        ) : (
                            <img src="/icon/eye-off-fill.svg" alt="Eye Off" />
                        )}
                    </button>
                )}
            </div>
        </div>
    );
};

export default InputField;
