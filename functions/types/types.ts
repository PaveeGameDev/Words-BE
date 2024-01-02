export type User = {
  id: string;
  sessionId: string;
  name: string;
  level: Level;
  language: Language;
  interest: Interest[];
};

export type Level = 1 | 2 | 3 | 4 | 5;

export type LanguageShortHand = "CZ" | "SK" | "PL";

export type Interest = "cooking" | "school";

export type Language = { name: string; short: LanguageShortHand };

export type Word = {
  word: string;
  description: string[];
  synonyms: string[];
  translation: string[];
  example: string[];
};

export type CheckWord = {
  score: number;
  reason: string;
};

export type ButtonData = {
  id: number;
  name: string;
};
