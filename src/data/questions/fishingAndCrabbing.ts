import { Question } from "./types";

export const fishingAndCrabbingQuestions: Question[] = [
    {
        slug: "fishing-license",
        category: "fishing-and-crabbing",
        title: "Do You Need a Fishing License?",
        question: "Do you need a license for fishing and crabbing in Maryland?",
        answer:
            "Usually yes. You generally need a tidal or non-tidal fishing license, depending on where you fish, unless you qualify for an exemption or are fishing on a free fishing day.",
        questionImage: "/questions/fishingAndCrabbing/fishing-license-question.png",
        answerImage: "/questions/fishingAndCrabbing/fishing-license-answer.png",
        additionalText: "",
        difficulty: "normal",
    },

    {
        slug: "fishing-license-age",
        category: "fishing-and-crabbing",
        title: "Who Does Not Need a License?",
        question: "What age of angler is exempt from a Maryland fishing license?",
        answer:
            "In Maryland, anglers under 16 years old are generally exempt from recreational fishing license requirements.",
        questionImage: "/questions/fishingAndCrabbing/fishing-license-age-question.png",
        answerImage: "/questions/fishingAndCrabbing/fishing-license-age-answer.png",
        additionalText: "",
        difficulty: "normal",
    },

    {
        slug: "turtle-excluder-device",
        category: "fishing-and-crabbing",
        title: "What Is a Turtle Excluder Device?",
        question:
            "Are turtle excluder devices (TEDs) required by law on crab pots in Maryland?",
        answer:
            "Yes. Turtle excluder devices help prevent turtles from entering crab pots and drowning.",
        questionImage: "/questions/fishingAndCrabbing/turtle-excluder-device-question.png",
        answerImage: "/questions/fishingAndCrabbing/turtle-excluder-device-answer.png",
        additionalText:
            "TEDs are simple devices that reduce accidental turtle deaths while allowing crabs to enter the trap.",
        difficulty: "normal",
    },

    {
        slug: "female-crab-regulation",
        category: "fishing-and-crabbing",
        title: "Can You Keep Female Crabs?",
        question: "Can recreational crabbers keep female blue crabs?",
        answer:
            "No. Recreational crabbers may not possess egg-bearing sponge crabs or any female hard or peeler crabs in Chesapeake Bay and its tidal tributaries.",
        questionImage: "/questions/fishingAndCrabbing/female-crab-regulation-question.png",
        answerImage: "/questions/fishingAndCrabbing/female-crab-regulation-answer.png",
        additionalText: "",
        difficulty: "normal",
    },

    {
        slug: "measure-blue-crab",
        category: "fishing-and-crabbing",
        title: "How Do You Measure a Blue Crab?",
        question: "How do you measure the size of a blue crab?",
        answer:
            "Measure the crab from the tip of one lateral spine to the tip of the opposite lateral spine across the shell.",
        questionImage: "/questions/fishingAndCrabbing/crab-measure-question.png",
        answerImage: "/questions/fishingAndCrabbing/crab-measure-answer.png",
        additionalText: "",
        difficulty: "normal",
    },

    {
        slug: "crab-gender",
        category: "fishing-and-crabbing",
        title: "Male or Female Blue Crab?",
        question: "How can you tell whether a blue crab is male or female?",
        answer:
            "Males have bright blue claws and a long, pointed apron. Females have red-tipped claws and a wider, rounded apron.",
        questionImage: "/questions/fishingAndCrabbing/crab-gender-question.png",
        answerImage: "/questions/fishingAndCrabbing/crab-gender-answer.png",
        additionalText:
            "Male blue crabs have a narrow, T-shaped apron. Mature females have a broad, rounded apron. Immature females have a triangular apron (\"V-bottom\").",

        difficulty: "normal",
    },
];