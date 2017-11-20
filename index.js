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
  let preferences = req.cookies.preferences || {
    morals: 'good',
    food: 'spaghetti',
    color: 'blue',
    sanity: '1'
  };
  res.render('index', { preferences });
});

app.post('/', (req, res) => {
  const preferences = {
    morals: req.body.morals,
    food: req.body.food,
    color: req.body.color,
    sanity: req.body['insanity-level']
  };
  res.cookie('preferences', preferences);
  console.log(preferences);
  res.redirect('/');
});

app.listen(4200, () => {
  console.log('Hey.');
});
