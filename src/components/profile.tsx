import { BsFillPersonFill } from 'react-icons/bs';

interface ProfileButtonProps {
    className?: string;
}

export default function ProfileButton({ className = '' }: ProfileButtonProps) {
    return (
        <button
            className={`absolute top-4 right-4 px-2 py-2 rounded-2xl cursor-pointer ${className}`}>
            <BsFillPersonFill size={48} className='text-gray-300'/>
        </button>
    );
        
}