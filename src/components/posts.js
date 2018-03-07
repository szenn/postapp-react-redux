import React, { Component } from 'react';
import { getPosts,  deletePost  } from '../actions/index'
import _ from 'lodash';
import { connect } from 'react-redux'


class Posts extends Component {

  componentWillMount() {    
    this.props.getPosts();
  }

  renderPosts(){
    // maps through the posts
    return _.map(this.props.posts , (post, key) => {
      return (
      <div className="container" key={key}>
        <div className="card mx-auto" style={{width: "80%" }}>
          <div className="card-body">        
            <h3 className="card-title">{post.title}</h3>  
            <p className="card-text">{post.body}</p>
            
            <button onClick={() => this.props.deletePost(key)} type="button" className="btn btn-primary float-right">Delete</button>
            
          </div>        
        </div>      
      </div>)
    })
  } 
  render() {
    return (
      <div>
        {this.renderPosts()}
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}
export default connect(mapStateToProps, { getPosts,  deletePost })(Posts)