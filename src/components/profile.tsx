import { BsPerson } from 'react-icons/bs';

export default function ProfileButton() {
    return (
        <button
            className="absolute top-4 right-4 px-2 py-2 rounded-2xl bg-blue-300 cursor-pointer">
            <BsPerson size={48} />
        </button>
    );
        
}