import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        Posts Index
      </div>
    );
  }
}

//mapdetach어쩌구 함수안쓰고 바로 action에서 fetch할거(action creator) 이름 써도 됨. 이 과정에서 넘길 이름과 내용이 같아서 es6로 축약함
export default connect(null, { fetchPosts }) PostsIndex;
