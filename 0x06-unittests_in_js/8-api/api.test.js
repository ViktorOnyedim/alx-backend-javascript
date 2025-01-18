const request = require('request');
const { expect } = require('chai');
const { response } = require('express');

describe('GET /', () => {
    const API_URL = "http://localhost:7865";

    it('should return correct status code 200', (done) => {
        request.get(API_URL, (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it('should return correct result', (done) => {
        request.get(API_URL, (error, response, body) => {
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    });

    it('should return correct content-type header', (done) => {
        request.get(API_URL, (error, response, body) => {
            expect(response.headers['content-type']).to.include('text/html');
            done();
        });
    });

    it('should handle invalid routes', (done) => {
        request.get(`${API_URL}/invalid_route`, (error, response, body) => {
            expect(response.statusCode).to.equal(404);
            done();
        });
    });
});
