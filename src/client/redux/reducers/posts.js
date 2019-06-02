import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
  EDIT_POST,
  ON_SEARCH
} from "../constants";
export default function posts(
  state = { isFetching: false, posts: [], searchValue: "", error: null },
  action
) {
  switch (action.type) {
    case GET_POSTS_REQUEST:
      return { ...state, isFetching: true };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.response,
        isFetching: false
      };
    case GET_POSTS_FAILURE:
      return { ...state, error: action.error, isFetching: false };
    case EDIT_POST:
      const posts = state.posts.map(item => {
        if (item.id === action.post.id) {
          return { ...item, ...action.post };
        }
        return item;
      });

      return { ...state, posts };
    case ON_SEARCH:
      return { ...state, searchValue: action.value };
    default:
      return state;
  }
}
