import { GET_POSTS, EDIT_POST, ON_SEARCH } from "../constants";

export const getApiData = () => {
  return {
    type: GET_POSTS,
    promise: fetch("http://localhost:7001/posts")
  };
};

export const editPost = post => {
  return {
    type: EDIT_POST,
    post
  };
};
export const onSearchPost = value => {
  return {
    type: ON_SEARCH,
    value
  };
};
