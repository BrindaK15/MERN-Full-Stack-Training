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

export const LIC_QUIZ_QUESTIONS: QuizQuestion[] = [
    {
        id: 1,
        question: "What is the capital city of Japan?",
        options: ["Beijing", "Seoul", "Tokyo","Bangkok"],
        answer: "Tokyo"
    },
    {
        id:2,
        question: "If a train travels 120 km in 3 hours, what it its average speed (in km/hr)?",
        options: ["30","40","50","70"],
        answer: "40" // Speed =Distance/ Time = 120/3 =40 km/hr

    },
    {
        id:3,
        question: "Complete the series: 4,9,16,25,?",
        options: ["49","36","81","35"],
        answer: "36" // Pattern: Perfect squares (2^2,3^2,4^2,5^2,6^2)
    },
    {
        id:4,
        question:"Choose the correct synonyms for the word 'ADEQUATE'.",
        options:["Scarce","Deficient","Sufficient","Lacking"],
        answer:"Sufficient"

    },
    {
        id: 5,
        question: "Identify the part of speech for the underlined word: She ran **quickly** to catch the bus.",
        options: ["Noun", "Verb", "Adverb", "Adjective"],
        answer: "Adverb"
    }
]






