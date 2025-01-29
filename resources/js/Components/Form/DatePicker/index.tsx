import "react-datepicker/dist/react-datepicker.css";
import "./style.css";

import { Calendar } from "lucide-react";
import DatePicker from "react-datepicker";
import { formatDateForApi } from "@/util/formatDateforDB";
import { useController } from "react-hook-form";
import { useState } from "react";

type DatePickerFieldProps = {
    id: string;
    label: string;
    placeholder: string;
    control: any;
    disabled?: boolean;
    defaultValue?: string | Date | null;
};

const DatePickerField = ({
    id,
    label,
    placeholder,
    control,
    disabled = false,
    defaultValue = null,
}: DatePickerFieldProps) => {
    const {
        field: { value, onChange },
    } = useController({
        name: id,
        control,
        defaultValue: defaultValue,
    });

    const [selectedDate, setSelectedDate] = useState<Date | null>(
        value ? new Date(value) : defaultValue ? new Date(defaultValue) : null
    );

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
        onChange(date ? formatDateForApi(date.toISOString()) : null);
    };

    return (
        <div className="flex flex-col gap-2">
            <label className="body-2 font-medium" htmlFor={id}>
                {label}
            </label>
            <div className="relative w-full">
                <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    placeholderText={placeholder}
                    className={`p-[10px] body-2 rounded-lg w-full`}
                    disabled={disabled}
                    dateFormat="dd/MM/yyyy"
                />{" "}
                <div className="absolute top-1/2 right-4 transform -translate-y-1/2 pointer-events-none">
                    <Calendar />
                </div>
            </div>
        </div>
    );
};

export default DatePickerField;
