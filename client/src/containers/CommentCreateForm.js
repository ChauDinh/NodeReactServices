import axios from 'axios';
import React, { useState } from 'react';

const CommentCreateForm = ({ postId }) => {
  const [comment, setComment] = useState('');

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content: comment,
    });
    setComment('');
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <label>New comment</label>
          <input
            placeholder="Create new comment"
            value={comment}
            onChange={(e) => handleChange(e)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Add comment</button>
      </form>
    </div>
  );
};

export default CommentCreateForm;
