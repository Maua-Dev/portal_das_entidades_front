import { BsFillPersonFill } from 'react-icons/bs';

export default function ProfileButton() {
    return (
        <button
            className="absolute top-4 right-4 px-2 py-2 rounded-2xl bg-blue-950 cursor-pointer">
            <BsFillPersonFill size={48} className='text-blue-100'/>
        </button>
    );
        
}