const express = require('express');
const exphbs = require('express-handlebars')
const app = express();
const PORT = 5000;

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Sets a basic route
app.get('/', (req, res) => res.send('Hello World !'));

//Listening on PORT
app.listen(PORT, () => console.log(`listeing on http://localhost:${PORT}`))

