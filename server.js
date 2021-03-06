require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const methodOverride = require('method-override');
const request = require('request-promise-native');

const statsRouter = require('./routes/stats-routes');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(methodOverride('_method'));

app.use('/stats', statsRouter);


app.get('/', (req, res) => {
  request("http://api.giphy.com/v1/gifs/search?q=cat-fitness&api_key=5c90517748c940f7898e6f3b2c7ca995&limit=3")
    .then((response) => {
      response = JSON.parse(response);
      res.render('index', {
        message: 'Welcome!',
        logoName: 'Kitty Health Tracker',
        statsLink: 'Go to tracker',
        gifUrl1: response.data[0].embed_url,
        gifUrl2: response.data[1].embed_url,
        gifUrl3: response.data[2].embed_url,
      })
    })
    .catch(err => res.json(err));
});


app.listen(PORT, () => {
  console.log(`Server up and listening on port ${PORT}, in ${app.get('env')} mode.`);
});

app.get('*', (req, res) => {
  res.status(404).send('Not Found!');
})


