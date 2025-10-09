/* Defines the structure for character data */
export interface CharacterProps {
    name: string;
    quote: string;
    image: string;
}

/* Defines the structure for a single question in the LIC Quiz */
export interface QuizQuestion {
    question: string;
    options: string[];
    answer: string;
}