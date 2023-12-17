import { generateUniqueSessionId } from './generateUniqueSessionId'; // Replace with the actual path to your file

describe('generateUniqueSessionId', () => {
    it('should return a string', () => {
        const sessionId = generateUniqueSessionId();
        expect(typeof sessionId).toBe('string');
    });

    it('should return a valid UUID', () => {
        const sessionId = generateUniqueSessionId();
        const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
        expect(uuidRegex.test(sessionId)).toBe(true);
    });

    it('should generate unique session IDs', () => {
        const sessionId1 = generateUniqueSessionId();
        const sessionId2 = generateUniqueSessionId();
        expect(sessionId1).not.toBe(sessionId2);
    });
});