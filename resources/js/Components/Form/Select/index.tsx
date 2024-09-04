import { useController } from 'react-hook-form';

type SelectProps = {
    id: string;
    label: string;
    placeholder: string;
    options: {
        optionLabel: string;
        value: string;
    }[];
    control: any;
};

const Select = ({ id, label, placeholder, options, control }: SelectProps) => {
    const {
        field: { value, onChange },
    } = useController({
        name: id,
        control,
        defaultValue: '',
    });

    return (
        <div className="flex flex-col gap-2">
            <label className="body-2 font-medium" htmlFor={id}>
                {label}
            </label>
            <select
                id={id}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="p-[10px] body-2 rounded-lg"
            >
                <option value="" disabled>
                    {placeholder}
                </option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.optionLabel}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
