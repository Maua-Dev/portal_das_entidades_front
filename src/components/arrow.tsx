import { FaArrowLeft } from 'react-icons/fa6';

interface ArrowButtonProps {
    className?: string;
}

export default function ArrowButton({ className = '' }: ArrowButtonProps) {
    return (
        <button
        className={`absolute top-4 left-4 px-6 py-6 cursor-pointer ${className}`}>
            <FaArrowLeft size={32} className='text-gray-300'></FaArrowLeft>
        </button>
    );
}