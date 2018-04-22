import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts(){
  //render하려는 post들은 object이기 때문에 this.props.posts.'map'을 못써
  //그래서 lodash쓸거야!
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      );
    });
  }

  render() {
    return (
      //html에선 ancher tag를 사용하는데 react-router에선 link tag사용!
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a Posts
          </Link>
        </div>

        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

//mapdetach어쩌구 함수안쓰고 바로 action에서 fetch할거(action creator) 이름 써도 됨. 이 과정에서 넘길 이름과 내용이 같아서 es6로 축약함
export default connect(mapStateToProps, { fetchPosts }) (PostsIndex);
