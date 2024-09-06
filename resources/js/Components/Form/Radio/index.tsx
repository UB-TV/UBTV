import { useController } from 'react-hook-form';

type RadioButtonGroupProps = {
    id: string;
    label: string;
    options: {
        label: string;
        value: string;
    }[];
    control: any;
};

const RadioButtonGroup = ({ id, label, options, control }: RadioButtonGroupProps) => {
    const {
        field: { value, onChange },
    } = useController({
        name: id,
        control,
        defaultValue: '',
    });

    return (
        <div className="flex flex-col gap-2 ">
            <label className="body-2 font-medium" htmlFor={id}>
                {label}
            </label>
            <div className="flex gap-4 p-[12px]">
                {options.map((option) => (
                    <label key={option.value} className="flex items-center w-1/2 gap-2 body-2">
                        <input
                            id={id}
                            type="radio"
                            value={option.value}
                            checked={value === option.value}
                            onChange={() => onChange(option.value)}
                            className="body-2"
                        />
                        {option.label}
                    </label>
                ))}
            </div>
        </div>
    );
};

export default RadioButtonGroup;
