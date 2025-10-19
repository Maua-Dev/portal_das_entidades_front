import { BiSolidBellRing } from 'react-icons/bi';

interface BellButtonProps {
  className?: string;
  iconSize?: number;
}


export default function BellButton({
  className = "",
  iconSize = 20,
}: BellButtonProps) {
    return (
        <div className={`inline-flex items-center justify-center ${className} bg-gray-400 hover:bg-gray-500 transition-colors duration-200 px-6 rounded-2xl cursor-pointer`}>
              <button
                type="button"
                className="py-1 rounded-full text-white active:scale-95 transition">
                <BiSolidBellRing size={iconSize} className='cursor-pointer'/>
              </button>
            </div>
    );
}