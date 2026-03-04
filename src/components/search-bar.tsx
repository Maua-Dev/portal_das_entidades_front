import { IoSearch } from 'react-icons/io5';

interface SearchBarProps {
    placeholder?: string;
    className?: string;
    iconSize?: number;
    value: string
    onChange: (value: string) => void; 
}

export default function SearchBar({
    placeholder = "Pesquisar...",
    className = "",
    iconSize = 20,
    value,
    onChange 
}: SearchBarProps) {
    return (
        <div className={`bg-white rounded-full flex items-center px-4 py-2 ${className}`}>
            <input 
                type="text"
                placeholder={placeholder}
                className='bg-transparent outline-none text-gray-700 placeholder-gray-400 w-full'
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
            <IoSearch className='text-gray-700 ml-2' size={iconSize} />
        </div>
    );
}