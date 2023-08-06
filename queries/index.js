const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get('/posts', (req, res, next) => {
  res.send(posts);
});

app.post('/events', (req, res, next) => {
  const { type, data } = req.body;
  if (type === 'PostCreated') {
    const { postId, title } = data;
    posts[postId] = { id: postId, title, comments: [] };
  }

  if (type === 'CommentCreated') {
    const { id, content, postId, status } = data;
    const post = posts[postId];

    post.comments.push({ id, content, status });
  }

  res.send({});
});

app.listen(4002, () => console.log('Listening on 4002 🧘‍♀️'));
