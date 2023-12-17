export type User = {
    id: number,
    sessionId: string,
    name: string,
    level: Level
    language: Language
    interest: Interest[]
};

export type Level = 1 | 2 | 3 | 4 | 5;

export type Language = "CZ" | "SK" | "PL";

export type Interest = "Cooking" | "School"