const express = require('express');
const exphbs = require('express-handlebars')
const app = express();
const PORT = 5000;

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//set handlebars as view engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//Sets a basic route
app.get('/', (req, res) => res.send('Hello World !'));

//Listening on PORT 5000
app.listen(PORT, () => console.log(`listeing on http://localhost:${PORT}`))

