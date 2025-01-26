const express = require('express');

const app = express();
const PORT = 7865;

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;

  res.send(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (_req, res) => {
  res.json({ payment_methods: { credit_cards: true, paypal: false } });
});

app.post('/login', (req, res) => {
  let username = '';

  if (req.body) {
    username = req.body.userName;
  }

  res.send(`Welcome ${username}`);
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;





// const express = require('express');

// const app = express();

// app.get('/', (req, res) => {
//     res.send('Welcome to the payment system');
// });

// app.get('/cart/:id(\\d+)', (req, res) => {
//     res.send(`Payment methods for cart ${req.params.id}`);
// });

// app.get('/available_payments', (req, res) => {
//     res.json({
//         payment_methods: {
//             credit_cards: true,
//             paypal: false
//         }
//     });
// });

// app.post('/login', (req, res) => {
//     let username = '';
  
//     if (req.body) {
//         username = req.body.userName;
//     }
  
//     res.send(`Welcome ${username}`);
//   });

// app.listen(7865, () => {
//     console.log('API available on localhost port 7865');
// });

// module.exports = app;
