type DisabledInputFieldProps = {
    id: string;
    type: "button" | 'checkbox' | "color" | "datetime-local" | "email" | "hidden" | "email" | "file" | "image" | "month" | "number" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "text" | "time" | "url" | "week";
    label: string;
    value: string;
};

const DisabledInputField = ({
    id,
    type,
    label,
    value,
}: DisabledInputFieldProps) => {
    return (
        <div className="flex flex-col gap-2">
            <label className="body-2 font-medium" htmlFor={id}>
                {label}
            </label>
            <div className="relative">
                <input
                    type={type}
                    id={id}
                    className={`p-[10px] body-2 rounded-lg w-full`}
                    disabled={true}
                    value={value}
                />
            </div>
        </div>
    );
};

export default DisabledInputField;
