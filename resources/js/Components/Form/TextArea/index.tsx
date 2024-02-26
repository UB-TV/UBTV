import { useState } from 'react';
import { useController } from 'react-hook-form';

type TextAreaProps = {
    id: string;
    label: string;
    value?: string
    placeholder: string
    maxLength: number;
    control: any;
};

const TextArea = ({
    id,
    label,
    value: propValue = '',
    placeholder,
    control,
    maxLength
}: TextAreaProps) => {

    const {
        field: { value, onChange },
    } = useController({
        name: id,
        control,
        defaultValue: propValue,
    });

    const [charCount, setCharCount] = useState(value ? value.length : 0);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = e.target.value;
        setCharCount(newValue.length);
        onChange(newValue);
    };

    return (
        <div className="flex flex-col gap-2">
            <label className="body-2 font-medium" htmlFor={id}>
                {label}
            </label>
            <div className="relative">
                <textarea
                    id={id}
                    className={`p-[10px] body-2 rounded-lg w-full`}
                    placeholder={placeholder}
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

export default TextArea;
