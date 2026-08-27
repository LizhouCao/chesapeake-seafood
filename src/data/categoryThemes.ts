export type CategoryTheme = {
    primary: string;
    dark: string;
    light: string;
    border: string;
};

export const categoryThemes: Record<string, CategoryTheme> = {
    "chesapeake-bay": {
        primary: "#0369a1",
        dark: "#0c4a6e",
        light: "#e0f2fe",
        border: "#7dd3fc",
    },

    "blue-crabs": {
        primary: "#0284c7",
        dark: "#075985",
        light: "#e0f2fe",
        border: "#7dd3fc",
    },

    "blue-catfish": {
        primary: "#4f46e5",
        dark: "#3730a3",
        light: "#eef2ff",
        border: "#a5b4fc",
    },

    "eastern-oysters": {
        primary: "#0f766e",
        dark: "#134e4a",
        light: "#ccfbf1",
        border: "#5eead4",
    },

    "Salmon-RAS": {
        primary: "#ea580c",
        dark: "#9a3412",
        light: "#ffedd5",
        border: "#fdba74",
    },

    "fishing-crabbing": {
        primary: "#ca8a04",
        dark: "#854d0e",
        light: "#fef9c3",
        border: "#fde047",
    },

    "seafood-and-human-health": {
        primary: "#16a34a",
        dark: "#166534",
        light: "#dcfce7",
        border: "#86efac",
    },
};