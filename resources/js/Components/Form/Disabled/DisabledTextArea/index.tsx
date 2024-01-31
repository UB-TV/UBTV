import { useState } from 'react';

type DisabledTextareaProps = {
    id: string;
    label: string;
    value: string;
    maxLength: number;
};

const DisabledTextarea = ({
    id,
    label,
    value,
    maxLength
 }: DisabledTextareaProps) => {

    const [charCount, setCharCount] = useState(value ? value.length : 0);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = e.target.value;
        setCharCount(newValue.length);
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
                    rows={5}
                    disabled={true}
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

export default DisabledTextarea;
