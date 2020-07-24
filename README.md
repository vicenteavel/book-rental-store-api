# Book Rental Store

API REST for managing a store that rents books on Node.js.

## Technologies used

- Express.js
- Knex.js
- SQLite 3

## Available routes

```
GET /client/:id
GET /clients
POST /client/create
PUT /client/:id
DELETE /client/:id

GET /book/:id
GET /books
POST /book/create
PUT /book/:id
DELETE /book/:id

GET /rents
POST /rent/create
DELETE /rent/:id

GET /reservations
POST /reservation/create
DELETE /reservation/:id
```

## To install and run

```
yarn install
knex migrate:latest
yarn start
```
