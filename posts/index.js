const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get('/posts', (req, res, next) => {
  console.info(JSON.stringify(posts, null, 2));
  res.send(posts);
});

app.post('/posts', async (req, res, next) => {
  const postId = randomBytes(4).toString('hex');
  const { title } = req.body;

  posts[postId] = {
    id: postId,
    title,
  };

  await axios.post('http://localhost:4005/events', {
    type: 'PostCreated',
    data: {
      postId,
      title,
    },
  });

  res.status(201).send(posts[postId]);
});

app.post('/events', (req, res, next) => {
  console.log('received event!!', req.body.type);
  res.send({});
});

app.listen(4000, () => {
  console.log('Listening on 4000 🚀');
});
