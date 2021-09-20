const express = require('express');
const session = require('express-session');
const morgan = require('morgan');
const FileStore = require('session-file-store')(session);
const cors = require('cors');
const parse = require('./parsers/parser');
const apiRouter = require('./routes/apiRouter');

const PORT = 5000;

const app = express();

const corsOptions = {
  origin: ['http://localhost:3000'],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

const sessionConfig = {
  store: new FileStore(),
  name: 'user_sid',
  // !!!!!!!!!!!! Поменять
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24,
    httpOnly: true,
  },
};

app.use(session(sessionConfig));

app.use(morgan('dev'));

app.use(express.json());

app.get('/', async (req, res) => {
  const news = await parse();
  // console.log(news);
  res.status(200).json(news);
});

app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`Сервер взлетел на ${PORT} порту`);
});
