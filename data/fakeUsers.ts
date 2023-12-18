import {User} from "../functions/types/types";

export const fakeUsers: User[] = [
    { id: 1, name: 'User 1', sessionId: '3', level: 3, language: 'CZ', interest: ['Cooking', 'School'] },
    { id: 2, name: 'User 2', sessionId: '5', level: 4, language: 'SK', interest: ['Cooking'] },
    { id: 3, name: 'User 3', sessionId: '7', level: 2, language: 'PL', interest: ['School'] },
    { id: 4, name: 'User 4', sessionId: '', level: 1, language: 'CZ', interest: [] },
    { id: 5, name: 'User 5', sessionId: '', level: 5, language: 'SK', interest: ['Cooking', 'School'] },
    { id: 6, name: 'User 6', sessionId: '', level: 3, language: 'PL', interest: ['Cooking'] },
    { id: 7, name: 'User 7', sessionId: '', level: 4, language: 'CZ', interest: ['School'] },
    { id: 8, name: 'User 8', sessionId: '', level: 2, language: 'SK', interest: [] },
    { id: 9, name: 'User 9', sessionId: '', level: 1, language: 'PL', interest: ['Cooking'] },
    { id: 10, name: 'User 10', sessionId: '', level: 5, language: 'CZ', interest: ['School'] },
];