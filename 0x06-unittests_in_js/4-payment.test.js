const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
    let calculateNumberStub;
    let consoleSpy;

    beforeEach(() => {
        // stub Utils.calculateNumber method to always return 10
        calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
        // spy on console.log method
        consoleSpy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        // Restore stub and spy
        calculateNumberStub.restore();
        consoleSpy.restore();
    });

    it("Should call Utils.calculateNumber with 'SUM', 100, and 20", () => {
        sendPaymentRequestToApi(100, 20);

        expect(calculateNumberStub.calledOnce).to.be.true;
        expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
    });

    it("Should log 'The total is: 10' to the console", () => {
        sendPaymentRequestToApi(100, 20);

        expect(consoleSpy.calledOnce).to.be.true;
        expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
    });
});