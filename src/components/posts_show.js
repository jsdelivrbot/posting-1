import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions';

class PostsShow extends Component {
 //automatically render
 //fetching individual post with given id

   componentDidMount() {
    if(!this.props.post) { //포스트보러 들어갈때 중복으로 받아오는 일 없게. optional
      const { id } = this.props.match.params; //id라는 wild card에 접근?관련된 함수래
      this.props.fetchPost(id);
    }
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { post } = this.props;

    if(!post) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <Link to = "/">Back to Index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete Post
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) { //모르겟는데 146.
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost }) (PostsShow);
