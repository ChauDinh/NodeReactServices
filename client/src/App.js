import './App.css';
import ListPosts from './containers/ListPosts';
import PostCreateForm from './containers/PostCreateForm';

function App() {
  return (
    <div className="container">
      <h1>Create Post</h1>
      <PostCreateForm />
      <hr />
      <h1>Posts</h1>
      <ListPosts />
    </div>
  );
}

export default App;
