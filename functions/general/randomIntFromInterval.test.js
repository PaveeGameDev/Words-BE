"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const randomIntFromInterval_1 = require("./randomIntFromInterval");
describe('randomIntFromInterval', () => {
    it('should generate a random integer within the specified interval (1-10)', () => {
        const result = (0, randomIntFromInterval_1.randomIntFromInterval)(1, 10);
        expect(result).toBeGreaterThanOrEqual(1);
        expect(result).toBeLessThanOrEqual(10);
    });
    it('should generate a random integer within the specified interval (0-0)', () => {
        const result = (0, randomIntFromInterval_1.randomIntFromInterval)(0, 0);
        expect(result).toBeGreaterThanOrEqual(0);
        expect(result).toBeLessThanOrEqual(0);
    });
    it('should generate a random integer within the specified interval (-5 to 5)', () => {
        const result = (0, randomIntFromInterval_1.randomIntFromInterval)(-5, 5);
        expect(result).toBeGreaterThanOrEqual(-5);
        expect(result).toBeLessThanOrEqual(5);
    });
    it('should return the same value when min and max are equal (7)', () => {
        const result = (0, randomIntFromInterval_1.randomIntFromInterval)(7, 7);
        expect(result).toBe(7);
    });
    it('should generate a random integer within the specified negative interval (-10 to -5)', () => {
        const result = (0, randomIntFromInterval_1.randomIntFromInterval)(-10, -5);
        expect(result).toBeGreaterThanOrEqual(-10);
        expect(result).toBeLessThanOrEqual(-5);
    });
    it('should generate a random integer within a large interval (1000 to 2000)', () => {
        const result = (0, randomIntFromInterval_1.randomIntFromInterval)(1000, 2000);
        expect(result).toBeGreaterThanOrEqual(1000);
        expect(result).toBeLessThanOrEqual(2000);
    });
});
