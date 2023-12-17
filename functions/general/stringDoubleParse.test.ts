import {stringDoubleParse} from "./stringDoubleParse";

describe('stringDoubleParse', ()=> {
    it('should return same string if everything is okay', ()=> {
        expect(stringDoubleParse('3')).toBe('3')
    });

    it('should return the same string', ()=> {
        expect(stringDoubleParse('a string with letters')).toBe('a string with letters')
    });

    it('should return a string without spaces', ()=> {
        expect(stringDoubleParse('   3   ')).toBe('3')
    });

    it('should return a blank string without spaces', ()=> {
        expect(stringDoubleParse('    ')).toBe('')
    });

    it('should return a string without zeros at start and spaces', ()=> {
        expect(stringDoubleParse('    0005')).toBe('5')
    });
});