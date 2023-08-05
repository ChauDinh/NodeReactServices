const ListComments = ({ comments }) => {
  const renderedCommentsByPostId = comments.map((comment) => (
    <li key={comment.id}>{comment.content}</li>
  ));

  return <ul>{renderedCommentsByPostId}</ul>;
};

export default ListComments;
