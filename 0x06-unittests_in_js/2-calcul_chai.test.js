const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
    describe('SUM', () => {
        it("It should return 6", () => {
            expect(calculateNumber('SUM', 1.4, 4.5), 6);
        });

        it("It should return 4", () => {
            expect(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
        });

        it("should return 0.2", () => {
            expect(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
        });

        it("should return Error", () => {
            expect(calculateNumber('DIVIDE', 1.4, 0), 'Error');
        });
    });
});