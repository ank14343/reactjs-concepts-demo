import React from 'react';
import './App.css';
import PostList from './components/HTTP/PostList';
import PostForm from './components/HTTP/PostForm';

function App() {
  return (
    <div className="App">
      <PostForm />
      {/* <PostList /> */}
    </div>
  );
}

// function changeMsg() {
//   stateRef.changeMsg();
//   // var tmp = new State();
//   // console.log(tmp);
//   // tmp.changeMsg();
//   // tmp.state.msg = "from outside";
// }

export default App;
