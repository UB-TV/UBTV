import { useState, useEffect, useRef } from 'react';
import { useController } from 'react-hook-form';

type Member = {
  name: string;
  role: string;
};

type MultiSelectProps = {
  id: string;
  label: string;
  options: Member[];
  control: any;
};

const MultiSelect = ({ options, label, id, control }: MultiSelectProps) => {
  const { field, fieldState } = useController({
    name: id,
    control,
    rules: {
      validate: (selectedOptions: string[]) =>
        selectedOptions.length >= 3 || 'Minimal 3 anggota tim harus dipilih',
    },
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsDropdownOpen(prev => !prev);

  const handleSelect = (name: string) => {
    if (field.value.includes(name)) {
      field.onChange(field.value.filter((selectedName: string) => selectedName !== name));
    } else {
      field.onChange([...field.value, name]);
    }
  };

  const handleRemove = (name: string) => {
    field.onChange(field.value.filter((selectedName: string) => selectedName !== name));
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full flex flex-col gap-2" ref={ref}>
      <label className="body-2 font-medium" htmlFor={id}>
        {label}
      </label>
      <div
        className="flex body-2 items-center p-2 border rounded-lg cursor-pointer border-primary-text"
        onClick={toggleDropdown}
      >
        {field.value.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {field.value.map((name: string) => {
              const selectedOption = options.find(option => option.name === name);
              return (
                <span
                  key={name}
                  className="flex items-center bg-blue-500 text-white px-2 py-1 rounded"
                >
                  {selectedOption?.name} ({selectedOption?.role})
                  <button
                    type="button"
                    className="ml-2"
                    onClick={() => handleRemove(name)}
                  >
                    &times;
                  </button>
                </span>
              );
            })}
          </div>
        ) : (
          <span className="text-gray-500">Select options...</span>
        )}
        <span className="ml-auto">
          <svg
            className={`ml-auto transform transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </span>
      </div>

      {isDropdownOpen && (
        <div className="absolute left-0 right-0 mt-2 bg-white border rounded shadow-lg max-h-36 overflow-y-auto z-10">
          {options.map((option) => (
            <div
              key={option.name}
              className={`cursor-pointer p-2 hover:bg-gray-100 ${field.value.includes(option.name) ? 'font-bold' : ''}`}
              onClick={() => handleSelect(option.name)}
            >
              {option.name} ({option.role})
            </div>
          ))}
        </div>
      )}
      {fieldState.error && (
        <span className="text-error-500">{fieldState.error.message}</span>
      )}
    </div>
  );
};

export default MultiSelect;
