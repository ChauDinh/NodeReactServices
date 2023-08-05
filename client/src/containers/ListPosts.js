import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CommentCreateForm from './CommentCreateForm';
import ListComments from './Listcomments';

const ListPosts = () => {
  const [posts, setPosts] = useState({});

  useEffect(() => {
    const fetchPosts = async () => {
      const responses = await axios.get('http://localhost:4002/posts');
      setPosts(responses.data);
    };

    fetchPosts();
  }, []);

  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <div
        className="card"
        style={{ width: '30%', marginBottom: '20px' }}
        key={post.id}
      >
        <div className="card-body">
          <h3>{post.title}</h3>
        </div>
        <CommentCreateForm postId={post.id} />
        <ListComments comments={post.comments} />
      </div>
    );
  });

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPosts}
    </div>
  );
};

export default ListPosts;
