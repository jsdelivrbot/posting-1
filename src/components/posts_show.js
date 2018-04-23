import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component {
 //automatically render
 //fetching individual post with given id
  componentDidMount() {
    const { id } = this.props.match.params.id; //id라는 wild card에 접근?관련된 함수래
    this.props.fetchPost(id);
  }

  render() {
    this.props === ownProps;
    return (
      <div>
        Posts Show!
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) { //모르겟는데 146.
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost }) (PostsShow);
