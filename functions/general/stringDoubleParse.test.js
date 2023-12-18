"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stringDoubleParse_1 = require("./stringDoubleParse");
describe('stringDoubleParse', () => {
    it('should return same string if everything is okay', () => {
        expect((0, stringDoubleParse_1.stringDoubleParse)('3')).toBe('3');
    });
    it('should return the same string', () => {
        expect((0, stringDoubleParse_1.stringDoubleParse)('a string with letters')).toBe('a string with letters');
    });
    it('should return a string without spaces', () => {
        expect((0, stringDoubleParse_1.stringDoubleParse)('   3   ')).toBe('3');
    });
    it('should return a blank string without spaces', () => {
        expect((0, stringDoubleParse_1.stringDoubleParse)('    ')).toBe('');
    });
    it('should return a string without zeros at start and spaces', () => {
        expect((0, stringDoubleParse_1.stringDoubleParse)('    0005')).toBe('5');
    });
});
