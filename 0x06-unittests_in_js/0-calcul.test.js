const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    it("rounding of a", () => {
        assert.strictEqual(calculateNumber(1.4, 3.5), 5);
        assert.strictEqual(calculateNumber(3, 6.1), 9);
        assert.strictEqual(calculateNumber(0, 1.3), 1);
    });
    
    it("rounding of b", () => {
        assert.strictEqual(calculateNumber(1.4, 3.4), 4);
        assert.strictEqual(calculateNumber(3, 6.6), 10);
        assert.strictEqual(calculateNumber(0, 1.2), 1);
    });

    it("should return 4", () => {
        assert.strictEqual(calculateNumber(1, 3), 4);
    });

    it("should return 5", () => {
        assert.strictEqual(calculateNumber(1, 3.7), 5);
    });

    it("should return 5", () => {
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });

    it("should return 6", () => {
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });
});
