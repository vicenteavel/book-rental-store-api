const express = require('express');

const ClientController = require('./controllers/ClientController');
const BookController = require('./controllers/BookController');
const RentController = require('./controllers/RentController');
const ReservationController = require('./controllers/ReservationController');

const routes = express.Router();

routes.get('/client/:id', ClientController.show);
routes.get('/clients', ClientController.index);
routes.post('/client/create', ClientController.create);
routes.put('/client/:id', ClientController.update);
routes.delete('/client/:id', ClientController.delete);

routes.get('/book/:id', BookController.show);
routes.get('/books', BookController.index);
routes.post('/book/create', BookController.create);
routes.put('/book/:id', BookController.update);
routes.delete('/book/:id', BookController.delete);


routes.get('/rents', RentController.index);
routes.post('/rent/create', RentController.create);
routes.delete('/rent/:id', RentController.delete);

routes.get('/reservations', ReservationController.index);
routes.post('/reservation/create', ReservationController.create);
routes.delete('/reservation/:id', ReservationController.delete);

module.exports = routes;