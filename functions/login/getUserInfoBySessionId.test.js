"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fakeUsers_1 = require("../../data/fakeUsers");
const getUserInfoBySessionId_1 = require("./getUserInfoBySessionId");
describe('getUserInfoBySessionId', () => {
    it('should return undefined for an invalid session ID', () => {
        const invalidSessionId = 'this is an invalid sessionId';
        const userInfo = (0, getUserInfoBySessionId_1.getUserInfoBySessionId)(fakeUsers_1.fakeUsers, invalidSessionId);
        expect(userInfo).toBeUndefined();
    });
    it('should return user information for a valid session ID', () => {
        const validSessionId = '3'; // Assuming '3' corresponds to a valid user ID
        const userInfo = (0, getUserInfoBySessionId_1.getUserInfoBySessionId)(fakeUsers_1.fakeUsers, validSessionId);
        const expectedUser = fakeUsers_1.fakeUsers.find(user => user.sessionId === '3');
        expect(userInfo).toEqual(expectedUser);
    });
    it('should handle session IDs with leading zeros', () => {
        const sessionIdWithLeadingZeros = '05'; // Assuming '05' corresponds to a valid user ID
        const userInfo = (0, getUserInfoBySessionId_1.getUserInfoBySessionId)(fakeUsers_1.fakeUsers, sessionIdWithLeadingZeros);
        const expectedUser = fakeUsers_1.fakeUsers.find(user => user.sessionId === '5');
        expect(userInfo).toEqual(expectedUser);
    });
    it('should handle session IDs with trailing whitespaces', () => {
        const sessionIdWithWhitespace = '  7  '; // Assuming '7' corresponds to a valid user ID
        const userInfo = (0, getUserInfoBySessionId_1.getUserInfoBySessionId)(fakeUsers_1.fakeUsers, sessionIdWithWhitespace);
        const expectedUser = fakeUsers_1.fakeUsers.find(user => user.sessionId === '7');
        expect(userInfo).toEqual(expectedUser);
    });
});
