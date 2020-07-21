const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const port = 3333;

app.get('/', (req, res) => {
   return res.send('Hello World');
});

app.listen(port, () => {
   console.log(`Listening to port ${port}...`)
});