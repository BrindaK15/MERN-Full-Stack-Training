/* Defines the structure for character data */
export interface CharacterProps {
    id:number,
    name: string;
    image: string;
    quote: string;
    borderStyle: string;
}

export const AOT_CHARACTERS : CharacterProps[]=[
    {
        id: 1,
        name: "Eren Yeager",
        image: "/images/eren_icon.jpg",
        quote: "I'll kill them all! Every last one!",
        borderStyle: "ring-red-500 border-red-500"
    },

    {
        id: 2,
        name: "Mikasa Ackerman",
        image: "/images/mikasa_icon.jpg",
        quote: "This world is cruel. It is also very beautiful",
        borderStyle: "ring-red-500 border-red-500"
    },

    {
        id: 3,
        name: "Armin Arlert",
        image: "/images/armin_icon.jpg",
        quote: "Someone who cannot sacrifice anything, can change nothing",
        borderStyle: "ring-red-500 border-red-500"
    },

    {
        id: 4,
        name: "Levi Ackerman",
        image: "/images/levi_icon.jpg",
        quote: "The only thing we are allowed to do is believe that we won't regret the choice we made",
        borderStyle: "ring-red-500 border-red-500"
    },

    {
       id: 5,
        name: "Erwin Smith",
        image: "/images/erwin_icon.jpg",
        quote: "One must never prioritize their own gain over humanities survival",
        borderStyle: "ring-red-500 border-red-500" 
    }

    
];

/* Defines the structure for a single question in the LIC Quiz */
export interface QuizQuestion {
    id: number;
    question: string;
    options: string[];
    answer: string;
}






