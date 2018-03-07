import React, { Component } from 'react';
import Posts from './components/posts'
import AddPost from './components/addpost'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Posts />
        <AddPost />
      </div>
    );
  }
}

export default App;
