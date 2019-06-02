import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import PostList from "./PostList";

describe("PostList test", () => {
  const initialState = {
    posts: {
      isFetching: true,
      posts: [],
      error: null
    }
  };
  const mockStore = configureMockStore();
  let store, container;

  beforeEach(() => {
    store = mockStore(initialState);
    container = shallow(
      <Provider store={store}>
        <PostList />
      </Provider>
    );
  });

  it("PostList renders without crashing", () => {
    expect(container.length).toEqual(1);
  });
});
