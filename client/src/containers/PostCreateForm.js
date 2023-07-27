import axios from 'axios';
import React, { useState } from 'react';

const PostCreateForm = () => {
  const [title, setTitle] = useState('');
  const [globalError, setGlobalError] = useState(null);

  const handleChange = (event) => {
    !!event.target.value && setGlobalError(null);
    setTitle(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!!title) {
      await axios.post('http://localhost:4000/posts', {
        title,
      });
    } else {
      setGlobalError({
        message: 'The post title should not be empty!',
        priority: 1,
      });
    }
    setTitle('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Post title</label>
          <input
            value={title}
            className="form-control input-group has-validation"
            onChange={(e) => handleChange(e)}
          />
          {!!globalError && (
            <div className="danger">
              {globalError.message || 'Something went wrong!!'}
            </div>
          )}
        </div>
        <br />
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default PostCreateForm;
