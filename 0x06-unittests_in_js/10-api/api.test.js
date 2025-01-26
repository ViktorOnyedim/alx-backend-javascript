const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const API_URL = 'http://localhost:7865';

  it('GET / returns correct response', (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('GET /cart/:id returns correct response for valid :id', (done) => {
    request.get(`${API_URL}/cart/47`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 47');
      done();
    });
  });

  it('GET /cart/:id returns 404 response for negative number values in :id', (done) => {
    request.get(`${API_URL}/cart/-47`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('GET /cart/:id returns 404 response for non-numeric values in :id', (done) => {
    request.get(`${API_URL}/cart/d200-44a5-9de6`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('POST /login returns valid response', (done) => {
    request.post(`${API_URL}/login`, {json: {userName: 'Pinkbrook'}}, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome Pinkbrook');
      done();
    });
  });

  it('GET /available_payments returns valid response', (done) => {
    request.get(`${API_URL}/available_payments`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(JSON.parse(body))
        .to.be.deep.equal({payment_methods: {credit_cards: true, paypal: false}});
      done();
    });
  });
});





// const request = require('request');
// const { expect } = require('chai');

// describe('GET /', () => {
//     const API_URL = "http://localhost:7865";

//     it('GET / should return correct status code 200', (done) => {
//         request.get(`${API_URL}/`, (error, response, body) => {
//             expect(response.statusCode).to.equal(200);
//             expect(body).to.equal('Welcome to the payment system');
//             done();
//         });
//     });

//     it('should return correct result', (done) => {
//         request.get(API_URL, (error, response, body) => {
//             expect(body).to.equal('Welcome to the payment system');
//             done();
//         });
//     });

//     it('should return correct content-type header', (done) => {
//         request.get(API_URL, (error, response, body) => {
//             expect(response.headers['content-type']).to.include('text/html');
//             done();
//         });
//     });

//     it('should handle invalid routes', (done) => {
//         request.get(`${API_URL}/invalid_route`, (error, response, body) => {
//             expect(response.statusCode).to.equal(404);
//             done();
//         });
//     });
// });

// describe('Cart page', () => {
//     const API_URL = 'http://localhost:7865';

//     it('should return correct status code 200 when id is a number', (done) => {
//         request.get(`${API_URL}/cart/12`, (error, response, body) => {
//             expect(response.statusCode).to.equal(200);
//             done();
//         });
//     });

//     it('should return correct result when id is a number', (done) => {
//         request.get(`${API_URL}/cart/12`, (error, response, body) => {
//             expect(body).to.equal('Payment methods for cart 12');
//             done();
//         });
//     });

//     it('should return 404 when id is not a number', (done) => {
//         request.get(`${API_URL}/cart/hello`, (error, response, body) => {
//             expect(response.statusCode).to.equal(404);
//             done();
//         });
//     });

//     it('should return 404 when id is not provided', (done) => {
//         request.get(`${API_URL}/cart/`, (error, response, body) => {
//             expect(response.statusCode).to.equal(404);
//             done();
//         });
//     });
// });

// describe('Login', () => {
//     const API_URL = 'http://localhost:7865';

//     it('should return Welcome betty with correct username', (done) => {
//         request.post(`${API_URL}/login`, {
//             json: {
//                 userName: 'betty'
//             }
//         }, (error, response, body) => {
//             expect(body).to.equal('Welcome betty');
//             done();
//         });
//     });

//     it('should have correct status code', (done) => {
//         request.post(`${API_URL}/login`, {
//             json: {
//                 userName: 'betty'
//             }
//         }, (error, response, body) => {
//             expect(response.statusCode).to.equal(200);
//             done();
//         });
//     });
// });

// describe('Available payments', () => {
//     const API_URL = 'http://localhost:7865';

//     it('should return correct payment methods object', (done) => {
//         request.get(`${API_URL}/available_payments`, (error, response, body) => {
//             expect(JSON.parse(body)).to.deep.equal({
//                 payment_methods: {
//                     credit_cards: true,
//                     paypal: false
//                 }
//             });
//             done();
//         });
//     });

//     it('should have correct status code', (done) => {
//         request.get(`${API_URL}/available_payments`, (error, response, body) => {
//             expect(response.statusCode).to.equal(200);
//             done();
//         });
//     });
// });
