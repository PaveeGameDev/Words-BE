import {fakeUsers} from "../../data/fakeUsers";
import {getUserInfoBySessionId} from "./getUserInfoBySessionId";

describe('getUserInfoBySessionId', () => {
    it('should return undefined for an invalid session ID', () => {
        const invalidSessionId = 'this is an invalid sessionId';
        const userInfo = getUserInfoBySessionId(fakeUsers,invalidSessionId);
        expect(userInfo).toBeUndefined();
    });

    it('should return user information for a valid session ID', () => {
        const validSessionId = '3'; // Assuming '3' corresponds to a valid user ID
        const userInfo = getUserInfoBySessionId(fakeUsers,validSessionId);
        const expectedUser = fakeUsers.find(user => user.sessionId === '3');

        expect(userInfo).toEqual(expectedUser);
    });

    it('should handle session IDs with leading zeros', () => {
        const sessionIdWithLeadingZeros = '05'; // Assuming '05' corresponds to a valid user ID
        const userInfo = getUserInfoBySessionId(fakeUsers,sessionIdWithLeadingZeros);
        const expectedUser = fakeUsers.find(user => user.sessionId === '5');

        expect(userInfo).toEqual(expectedUser);
    });

    it('should handle session IDs with trailing whitespaces', () => {
        const sessionIdWithWhitespace = '  7  '; // Assuming '7' corresponds to a valid user ID
        const userInfo = getUserInfoBySessionId(fakeUsers,sessionIdWithWhitespace);
        const expectedUser = fakeUsers.find(user => user.sessionId === '7');

        expect(userInfo).toEqual(expectedUser);
    });
});
