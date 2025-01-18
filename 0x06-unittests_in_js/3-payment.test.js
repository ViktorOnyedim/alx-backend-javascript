const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
    let spy;

    beforeEach(() => {
        spy = sinon.spy(Utils, "calculateNumber");
    });

    afterEach(() => {
        spy.restore();
    });

    it("Should call Utils.calculateNumber with 'SUM', 100, and 20", () => {
        sendPaymentRequestToApi(100, 20);

        expect(spy.calledOnce).to.be.true;
        expect(spy.calledWith('SUM', 100, 20)).to.be.true;
    });

    it("Should log the correct total to the console", () => {
        const consoleSpy = sinon.spy(console, 'log');

        sendPaymentRequestToApi(100, 20);

        expect(consoleSpy.calledOnce).to.be.true;
        expect(consoleSpy.calledWith('The total is: 120')).to.be.true;

        consoleSpy.restore();
    });
});