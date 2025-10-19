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
        <div className={`inline-flex items-center justify-center ${className} bg-gray-400 px-6 rounded-2xl`}>
              <button
                type="button"
                className="py-1 rounded-full text-white active:scale-95 transition">
                <BiSolidBellRing size={iconSize} />
              </button>
            </div>
    );
}