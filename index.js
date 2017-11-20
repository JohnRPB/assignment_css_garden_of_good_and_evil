// INDEX.JS
const express = require('express');
const expressHandlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

const hbs = expressHandlebars.create({
  defaultLayout: 'main'
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  const preferences = {
    const morals = req.body.morals;
    const food = req.body.food;
    const color = req.
  };
  preferences.
  res.render('index');
});

app.listen(4200, () => {
  console.log('Hey.');
});
