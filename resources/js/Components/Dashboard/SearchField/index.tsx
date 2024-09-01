import { useState } from 'react';

type SearchFieldProps = {
    onSearch: (input: string) => void;
};

const SearchField = ({ onSearch }: SearchFieldProps) => {
    const [search, setSearch] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        setSearch(inputValue);
        onSearch(inputValue);
    };

    return (
        <div className="relative text-gray-600">
            <input
                type="search"
                name="search"
                placeholder="Cari"
                className="w-[320px] body-2 bg-white h-10 pl-10 pr-4 py-[10px] rounded-lg text-sm focus:outline-none"
                value={search}
                onChange={handleInputChange}
            />
            <button type="submit" className="absolute left-0 top-0 mt-3 ml-4" title='Search'>
                <svg className="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                </svg>
            </button>
        </div>
    );
};

export default SearchField;
