import Image from "next/image";
import { CharacterProps } from "@/types";


const Character: React.FC<CharacterProps> =({name,image,quote,borderStyle}) => {
    return (
        <div className="bg-gray-900/80 p-6 rounded-xl shadow-2xl transition-all duration-400 
                      transform hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(255,0,0,0.4)]  
                      text-center h-full flex flex-col justify-between cursor-pointer">
            <div>
                <div className="flex flex-col items-center space-y-3 mb-4">
                    <div className={`p-1 rounded-full bg-slate-900 ${borderStyle} ring-4 ring-offset-4 ring-offset-gray-900`}>
                        <Image
                            src={image}
                            alt={name}
                            width={80}
                            height={80}
                            className={`rounded-full  object-cover border-4 border-transparent`}
                            sizes="80px"
                        />
                    </div>
                </div>
            </div>
                
                <h4 className={`text-xl font-bold ${name === "Eren Yeager" ? 'text-red-500' : 'text-gray-200'} tracking-wide`}>
                    {name}
                </h4>
                <blockquote className="mt-4 pt-3 border-t border-red-500/50 italic text-gray-300">
                    <p className="text-sm leading-relaxed">{quote}</p>
                </blockquote>
        </div>
    )
}
export default Character;