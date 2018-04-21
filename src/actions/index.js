//network에서 정보받아오려면 axios랑 redux-promise사용하기 때문에 둘 다 설치 해야해.

export const FETCH_POSTS = 'fetch_posts';

export funtion fetchPosts() {
  return {
      type: FETCH_POSTS
  };
}
