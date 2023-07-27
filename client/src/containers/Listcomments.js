import axios from 'axios';
import { useEffect, useState } from 'react';

const ListComments = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchCommentsByPostId = async () => {
      const responses = await axios.get(
        `http://localhost:4001/posts/${postId}/comments`
      );
      setComments(responses.data);
    };
    fetchCommentsByPostId();
  }, [postId]);

  const renderedCommentsByPostId = comments.map((comment) => (
    <li key={comment.id}>{comment.content}</li>
  ));

  return <ul>{renderedCommentsByPostId}</ul>;
};

export default ListComments;
