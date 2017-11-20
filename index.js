// INDEX.JS

const express = require('express');
const expressHandlebars = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

const hbs = expressHandlebars.create({
  defaultLayout: 'main',
  helpers: helpers.registered,
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.listen(4200, () => {
  console.log('Hey.');
});
