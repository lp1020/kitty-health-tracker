const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const methodOverride = require('method-override');
const request = require('request');

const statsRouter = require('./routes/stats-routes');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(methodOverride('_method'));

app.use('/stats', statsRouter);

app.get('/', (req, res) => {
  res.render('index', {
    message: 'Welcome!',
    logoName: 'Kitty Health Tracker',
    statsLink: 'Go to tracker',
  })
});

app.listen(PORT, () => {
  console.log(`Server up and listening on port ${PORT}, in ${app.get('env')} mode.`);
});

app.get('*', (req, res) => {
  res.status(404).send('Not Found!');
})


