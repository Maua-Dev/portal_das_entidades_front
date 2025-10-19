import { IoSearch } from 'react-icons/io5';

interface SearchBarProps {
    placeholder?: string;
    className?: string;
    iconSize?: number;
}

export default function SearchBar({
    placeholder = "Pesquisar...",
    className = "",
    iconSize = 20
}: SearchBarProps) {
    return (
        <div className={`bg-white rounded-full flex items-center px-4 py-2 ${className}`}>
            <IoSearch className='text-gray-700 mr-2' size={iconSize} />
            <input 
                type="text"
                placeholder={placeholder}
                className='bg-transparent outline-none text-gray-700 placeholder-gray-400 w-full'
            />
        </div>
    );
}