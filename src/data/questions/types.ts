export type Difficulty = "easy" | "normal" | "advanced";

export type Question = {
    slug: string;

    category: string;

    title: string;

    question: string;

    answer: string;

    questionImage: string;

    answerImage: string;

    additionalText: string;

    difficulty: Difficulty;
};