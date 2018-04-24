import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component {
 //automatically render
 //fetching individual post with given id
  componentDidMount() {
    const { id } = this.props.match.params; //id라는 wild card에 접근?관련된 함수래
    this.props.fetchPost(id);
  }

  render() {
    const { post } = this.props;

    if(!post) {
      return <div>Loading...</div>;
    }
    return (
      <div>
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

export default connect(mapStateToProps, { fetchPost }) (PostsShow);
