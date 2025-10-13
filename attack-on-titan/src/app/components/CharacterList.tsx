import { CharacterProps } from "@/types";
import Character from "./Character";


interface CharacterListProps {
    characters: CharacterProps[];
    title: string;
}

const CharacterList : React.FC<CharacterListProps> = ({characters,title}) => {
    return (
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl  font-extrabold text-white w-fit mx-auto border-b-4 border-red-700/80 mb-8  px-4 pb-2">
                {title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 lg: grid-cols-4 gap-8">
                {characters.map(character=> (
                   <Character
                        key={character.id} 
                        id={character.id}
                        name={character.name}
                        image={character.image}
                        quote={character.quote}
                        borderStyle={character.borderStyle}

                    />
                ))}

            </div>
        </div>
    )
}

export default CharacterList;