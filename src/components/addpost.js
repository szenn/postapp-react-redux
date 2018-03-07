import React, { Component } from 'react';
import { connect } from 'react-redux';
import { savePost } from '../actions/index';

class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state= {
      title: '',
      body: ''
    }
    this.onChangeTitle = this.onChangeTitle.bind(this)
    this.onChangeBody = this.onChangeBody.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  
  onChangeTitle(e){
    this.setState({
      title: e.target.value,
    })
  }
  onChangeBody(e){
    this.setState({
      body: e.target.value,
    })
  }
  onSubmit(e) {
    e.preventDefault();    
    this.props.dispatch(savePost(this.state))
    this.setState({
      title:'',
      body: ''
    })
  }
 
  render() {
    const {title , body } = this.state;   
    return (
      <div className="container addpost-container" style={{width: "70%" }}>
       <form onSubmit={this.onSubmit.bind(this)}>
        <div className="form-group">
          <input
              className="form-control"
              placeholder="enter a title..." 
              value={title} 
              onChange={this.onChangeTitle}  
              type="text" 
              name="title" 
              required
            />
        </div>
        <div className="form-group">    
          <textarea
              className="form-control"
              aria-label="With textarea"
              placeholder="enter a post..." 
              value={body} 
              onChange={this.onChangeBody} 
              type="text" 
              name="body"
              required
            />
          <button className="btn btn-primary" type="submit">Post</button>
        </div>
       </form>
      </div>
    );
  }
}


const mapDispatchToProps = () => {
  return {
    savePost: savePost
  };
};

export default connect(mapDispatchToProps)(AddPost);
