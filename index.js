const express = require('express');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(session({
  secret: 'alsdjfaosdfa98sd7f9a8ds76g89',
  store: new RedisStore(),
  resave: false,
  saveUninitialized: false,
}));

app.post('/create-session', (req, res) => {
  req.session.user = {
    name: 'T$'
  };
  console.log('-------------- req.session.user', req.session.user);
  res.send('Put data in session successfully');
});

app.get('/session', (req, res) => {
  res.json({ user: req.session.user });
});

app.listen(4000, () => {
  console.log('Server listening on port 4000');
});