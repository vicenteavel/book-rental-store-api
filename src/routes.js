const express = require('express');

const ClientController = require('./controllers/ClientController');

const routes = express.Router();

routes.get('/', (req, res) => {
   return res.send('Hello World');
});

routes.get('/client/:id', ClientController.show);
routes.get('/clients', ClientController.index);
routes.post('/client/create', ClientController.create);
routes.put('/client/:id', ClientController.update);
routes.delete('/client/:id', ClientController.delete);

// routes.get('/books');
// routes.get('/rents');
// routes.get('/reservations');

module.exports = routes;