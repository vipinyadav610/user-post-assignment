import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as Actions from "../../redux/actions/posts";
import PostList from "./PostList";
import InputSearch from "./InputSearch";
import "./index.css";

class Home extends React.Component {
  componentDidMount() {
    this.props.getApiData();
  }
  render() {
    return (
      <div>
        <InputSearch />
        <PostList />
      </div>
    );
  }
}
Home.propTypes = {
  getApiData: PropTypes.func
};
Home.defaultProps = {
  getApiData: () => {}
};
export default connect(
  state => ({}),
  Actions
)(Home);
