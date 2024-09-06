import { useState } from 'react';
import { useController } from 'react-hook-form';

type TextareaFieldProps = {
    id: string;
    label: string;
    placeholder: string;
    control: any;
    maxLength?: number;
};

const TextareaField = ({
    id,
    label,
    placeholder,
    control,
    maxLength = 200,
}: TextareaFieldProps) => {
    const {
        field: { value, onChange },
    } = useController({
        name: id,
        control,
        defaultValue: '',
    });

    const [charCount, setCharCount] = useState(value.length);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(e);
        setCharCount(e.target.value.length);
    };

    return (
        <div className="flex flex-col gap-2">
            <label className="body-2 font-medium" htmlFor={id}>
                {label}
            </label>
            <div className="relative">
                <textarea
                    id={id}
                    placeholder={placeholder}
                    className="p-[10px] body-2 rounded-lg w-full"
                    rows={5}
                    value={value}
                    onChange={handleChange}
                />
                <span className="overline-1 absolute bottom-2 right-2 text-xs text-gray-500">
                    <span className='font-bold'>{charCount}</span>/{maxLength} KATA
                </span>
            </div>
        </div>
    );
};

export default TextareaField;
