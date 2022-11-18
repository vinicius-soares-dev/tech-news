const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;;
const path = require('path');
const bodyParser = require('body-parser');
const route = require('./routes');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname)));

app.set('view engine', 'ejs');

app.use(route);

app.listen(PORT, () => {
    console.log('Escutando: http://localhost:8000');
});