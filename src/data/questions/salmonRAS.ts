import { Question } from "./types";

export const salmonRASQuestions: Question[] = [
    {
        slug: "salmon-popular-seafood",
        category: "salmon-ras",
        title: "Is Salmon Popular?",
        question: "Is salmon one of the most popular seafood choices in the United States?",
        answer:
            "Yes. Salmon is one of the most popular seafood species consumed in the United States, along with shrimp and canned tuna.",
        questionImage: "/questions/salmon/salmon-popular-seafood-question.png",
        answerImage: "/questions/salmon/salmon-popular-seafood-answer.png",
        additionalText:
            "Americans enjoy salmon because it is nutritious, versatile, and rich in omega-3 fatty acids.",

        difficulty: "easy",
    },

    {
        slug: "salmon-species-us",
        category: "salmon-ras",
        title: "How Many Salmon Species?",
        question: "How many species of salmon are found in the U.S.?",
        answer:
            "There are 6 main species of salmon found in the United States.",
        questionImage: "/questions/salmon/salmon-species-us-question.png",
        answerImage: "/questions/salmon/salmon-species-us-answer.png",
        additionalText:
            "The six are Chinook, Coho, Sockeye, Chum, Pink, and Atlantic salmon. Five are Pacific salmon species, while Atlantic salmon is the only Atlantic species.",
        difficulty: "advanced",
    },

    {
        slug: "largest-salmon",
        category: "salmon-ras",
        title: "Which Salmon Is the Largest?",
        question: "Which salmon is the largest of all salmon species?",
        answer:
            "Chinook salmon, also called king salmon, is the largest salmon species.",
        questionImage: "/questions/salmon/largest-salmon-question.png",
        answerImage: "/questions/salmon/largest-salmon-answer.png",
        additionalText:
            "Chinook salmon can grow to more than 100 pounds! Their impressive size is why they are also known as king salmon.",
        difficulty: "easy",
    },

    {
        slug: "salmon-life-journey",
        category: "salmon-ras",
        title: "Salmon's Amazing Journey",
        question: "What is salmon's most famous life journey?",
        answer:
            "They are born in freshwater, migrate to the ocean, and return to freshwater to reproduce.",
        questionImage: "/questions/salmon/salmon-life-journey-question.png",
        answerImage: "/questions/salmon/salmon-life-journey-answer.png",
        additionalText:
            "Many salmon can return to the same river or stream where they were born to spawn, sometimes traveling hundreds or even thousands of miles!",
        difficulty: "normal",
    },

    {
        slug: "wild-salmon-maryland",
        category: "salmon-ras",
        title: "Wild Salmon in Maryland?",
        question: "Do salmon naturally live in the wild in Maryland?",
        answer:
            "No. Maryland is not part of the natural range of wild Atlantic salmon.",
        questionImage: "/questions/salmon/wild-salmon-maryland-question.png",
        answerImage: "/questions/salmon/wild-salmon-maryland-answer.png",
        additionalText:
            "In the United States, native wild Atlantic salmon are found much farther north. Maryland's waters are generally too far south for natural Atlantic salmon populations.",
        difficulty: "easy",
    },

    {
        slug: "salmon-ras-maryland",
        category: "salmon-ras",
        title: "Can We Raise Salmon Here?",
        question: "Can we raise salmon in Maryland even though they don't naturally live here?",
        answer:
            "Yes! Salmon can be raised on land using a Recirculating Aquaculture System (RAS).",
        questionImage: "/questions/salmon/salmon-ras-maryland-question.png",
        answerImage: "/questions/salmon/salmon-ras-maryland-answer.png",
        additionalText:
            "RAS continuously filters, treats, and reuses water while controlling conditions such as temperature and oxygen. This makes it possible to raise salmon in places like Maryland.",
        difficulty: "easy",
    },
];