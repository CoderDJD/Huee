'use strict';
require('dotenv').config();
const express = require('express'),
  cors = require('cors'),
  monk = require('monk'),
  db = monk(process.env.USER_MONGO_URI),
  users = db.get('users'),
  app = express();
app.use(
  cors({
    origin: ['https://codespace.surge.sh', 'http://localhost:5500'],
  })
);
app.use(express.json());
db.collection('users').createIndex({ username: 1 }, { unique: true });

function isValidUser(obj) {
  if (
    obj.username.toString().trim() != '' &&
    obj.img_url.toString().trim() != '' &&
    obj.theme_conf.toString().trim() != ''
  )
    return {
      username: obj.username,
      img_url: obj.img_url,
      theme_conf: obj.theme_conf,
    };
  else return;
}

app.get('/', (req, res) => {
  users
    .findOne({
      username: `${decodeURI(req.query.username.toString())}`,
    })
    .then((user) => res.json(user))
    .catch((error) => res.json(error));
});

app.get('/u', (req, res) => {
  users
    .findOne({
      username: `${decodeURI(req.query.username.toString())}`,
    })
    .then((user) => res.json(user))
    .catch((error) => res.json(error));
});

app.post('/create', (req, res) => {
  if (typeof isValidUser(req.body) == 'object')
    users.insert(req.body).then((cu) => res.json(cu));
  else
    res.status(422).json({
      message: 'Server Side validation is tough, 🤣.',
    });
});

app.post('/up', async (req, res) => {
  users
    .findOneAndUpdate(
      {
        username: `${decodeURI(req.query.username.toString())}`,
      },
      {
        $set: {
          theme_conf: req.body.theme_conf,
        },
      }
    )
    .then((user) => res.json(user))
    .catch((error) => res.json(error));
});

app.listen(process.env.USER_PORT);
