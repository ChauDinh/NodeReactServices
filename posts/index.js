const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(
  cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
  })
);

const posts = {};

app.get('/posts', (req, res, next) => {
  console.info(JSON.stringify(posts, null, 2));
  res.send(posts);
});

app.post('/posts', (req, res, next) => {
  const postId = randomBytes(4).toString('hex');
  const { title } = req.body;

  posts[postId] = {
    id: postId,
    title,
  };

  console.info(posts[postId]);

  res.status(201).send(posts[postId]);
});

app.listen(4000, () => {
  console.log('Listening on 4000 🚀');
});
