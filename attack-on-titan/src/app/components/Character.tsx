import Image from "next/image";
import { CharacterProps } from "@/types";


const Character: React.FC<CharacterProps> =({name,image,quote,borderStyle}) => {
    return (
        <li>
            <Image
                src={image}
                alt={name}
                width={64}
                height={64}
                className={`rounded-full border-4 ${borderStyle} object-cover`}
            />
            <span className={`text-sm sm:text-lg ${name === "Eren Yeager" ? 'font-bold text-red-400' : 'text-gray-200'}`}>
                {name}
            </span>
        </li>
    )
}
export default Character;