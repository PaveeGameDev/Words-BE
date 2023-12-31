import { User } from "../functions/types/types";

export const fakeUsers: User[] = [
  {
    id: "1",
    name: "User 1",
    sessionId: "3",
    level: 3,
    language: { name: "Czech", short: "CZ" },
    interest: ["cooking", "school"],
  },
  {
    id: "2",
    name: "User 2",
    sessionId: "5",
    level: 4,
    language: { name: "Slovak", short: "SK" },
    interest: ["cooking"],
  },
  {
    id: "3",
    name: "User 3",
    sessionId: "7",
    level: 2,
    language: { name: "Polish", short: "PL" },
    interest: ["school"],
  },
  {
    id: "4",
    name: "User 4",
    sessionId: "",
    level: 1,
    language: { name: "Czech", short: "CZ" },
    interest: [],
  },
  {
    id: "5",
    name: "User 5",
    sessionId: "",
    level: 5,
    language: { name: "Slovak", short: "SK" },
    interest: ["cooking", "school"],
  },
  {
    id: "6",
    name: "User 6",
    sessionId: "",
    level: 3,
    language: { name: "Polish", short: "PL" },
    interest: ["cooking"],
  },
  {
    id: "7",
    name: "User 7",
    sessionId: "",
    level: 4,
    language: { name: "Czech", short: "CZ" },
    interest: ["school"],
  },
  {
    id: "8",
    name: "User 8",
    sessionId: "",
    level: 2,
    language: { name: "Slovak", short: "SK" },
    interest: [],
  },
  {
    id: "9",
    name: "User 9",
    sessionId: "",
    level: 1,
    language: { name: "Polish", short: "PL" },
    interest: ["cooking"],
  },
  {
    id: "10",
    name: "User 10",
    sessionId: "",
    level: 5,
    language: { name: "Czech", short: "CZ" },
    interest: ["school"],
  },
];
