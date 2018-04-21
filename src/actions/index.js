//network에서 정보받아오려면 axios랑 redux-promise사용하기 때문에 둘 다 설치 해야해.
import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=dodom7';

export funtion fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
      type: FETCH_POSTS,
      payload: request
  };
}
