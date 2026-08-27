import { Question } from "./types";

export const seafoodHealthQuestions: Question[] = [
    {
        slug: "maryland-signature-dish",
        category: "seafood-and-human-health",
        title: "Maryland's Signature Seafood Dish",
        question: "What is Maryland's most famous seafood dish?",
        answer: "Maryland crab cake!",
        questionImage: "/questions/seafoodHealth/maryland-signature-dish-question.png",
        answerImage: "/questions/seafoodHealth/maryland-signature-dish-answer.png",
        additionalText:
            "Maryland crab cakes are traditionally made with blue crab meat, seasonings, and very little filler to highlight the sweet flavor of the crab.",

        difficulty: "easy",
    },

    {
        slug: "popular-seafood-us",
        category: "seafood-and-human-health",
        title: "America's Favorite Seafood",
        question:
            "What are the most popular seafood species consumed in the United States?",
        answer:
            "Shrimp, salmon, and canned tuna are the three most popular seafood choices in the United States.",
        questionImage: "/questions/seafoodHealth/popular-seafood-us-question.png",
        answerImage: "/questions/seafoodHealth/popular-seafood-us-answer.png",
        additionalText: "",
        difficulty: "normal",
    },

    {
        slug: "maryland-top-seafood",
        category: "seafood-and-human-health",
        title: "Top Seafood Harvested in Maryland",
        question:
            "What are the top three seafood species harvested in Maryland?",
        answer:
            "Blue crabs, oysters, and rockfish (striped bass).",
        questionImage: "/questions/seafoodHealth/maryland-top-seafood-question.png",
        answerImage: "/questions/seafoodHealth/maryland-top-seafood-answer.png",
        additionalText: "",
        difficulty: "normal",
    },

    {
        slug: "recommended-seafood-intake",
        category: "seafood-and-human-health",
        title: "How Much Seafood Should You Eat?",
        question:
            "How much seafood should people eat each week?",
        answer:
            "The Dietary Guidelines for Americans recommend eating 2 to 3 servings (about 8–12 ounces) of seafood each week.",
        questionImage: "/questions/seafoodHealth/recommended-seafood-intake-question.png",
        answerImage: "/questions/seafoodHealth/recommended-seafood-intake-answer.png",
        additionalText:
            "Eating seafood regularly provides high-quality protein and important nutrients such as omega-3 fatty acids, vitamins, and minerals.",
        difficulty: "advanced",
    },
];