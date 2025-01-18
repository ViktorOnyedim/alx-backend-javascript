const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
    let consoleSpy;
  
    beforeEach(() => {
      // Spy on console.log
      consoleSpy = sinon.spy(console, 'log');
    });
  
    afterEach(() => {
      // Restore the spy
      consoleSpy.restore();
    });
  
    it('Should log "The total is: 120" and only call console once for inputs 100 and 20', () => {
      sendPaymentRequestToApi(100, 20);
  
      // Verify console.log was called once with the correct message
      expect(consoleSpy.calledOnce).to.be.true;
      expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
    });
  
    it('Should log "The total is: 20" and only call console once for inputs 10 and 10', () => {
      sendPaymentRequestToApi(10, 10);
  
      // Verify console.log was called once with the correct message
      expect(consoleSpy.calledOnce).to.be.true;
      expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
    });
  });
  