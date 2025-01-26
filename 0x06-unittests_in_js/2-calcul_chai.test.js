const { expect } = require('chai');
const calculateNumber = require('./1-calcul_chai');

describe("calculateNumber", () => {
    describe('SUM', () => {
        it("It should return 6", () => {
            expect(calculateNumber('SUM', 1.4, 4.5), 6);
        });

        it("It should return 9", () => {
            expect(calculateNumber('SUM', 4.3, 6.4), 9);
        });

        it("should return 7", () => {
            expect(calculateNumber('SUM', 5, 1.5), 7);
        });

        it("should return -5", () => {
            expect(calculateNumber('SUM', -3.2, -2.4), -5);
        });
    });

    describe('SUBTRACT', () => {
        it("It should return -4", () => {
            expect(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
        });

        it("It should return -2", () => {
            expect(calculateNumber('SUBTRACT', 2, 4), -2);
        });

        it("should return -3", () => {
            expect(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
        });

        it("should return 2", () => {
            expect(calculateNumber('SUBTRACT', -2.5, -5), 2);
        })
    });

    describe('DIVIDE', () => {
        it("should return 0.2", () => {
            expect(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
        });

        it("should return Error", () => {
            expect(calculateNumber('DIVIDE', 1.4, 0), 'Error');
        });

        it("should return 2", () => {
            expect(calculateNumber('DIVIDE', 8, 4), 2);
        });
    });
});