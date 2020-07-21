const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
   return res.send('Hello World');
});

// routes.get('/clients');
// routes.get('/books');
// routes.get('/rents');
// routes.get('/reservations');

module.exports = routes;