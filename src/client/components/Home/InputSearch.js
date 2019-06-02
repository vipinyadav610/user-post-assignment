import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { AutoComplete } from "antd";
import * as Actions from "../../redux/actions/posts";
import { searchStringInArray } from "../../redux/selectors/posts";

class InputSearch extends React.Component {
  state = {
    dataSource: []
  };
  onSelect = value => {
    // console.log("onSelect", value);
    this.props.onSearchPost(value);
  };
  handleSearch = value => {
    this.setState({
      dataSource: !value
        ? []
        : searchStringInArray(value, this.props.posts, 4).map(
            item => item.title
          )
    });
  };
  inputChange = value => {
    if (value === undefined) {
      this.props.onSearchPost("");
    }
  };
  render() {
    return (
      <div className="input-search-container">
        <AutoComplete
          allowClear
          dataSource={this.state.dataSource}
          onSelect={this.onSelect}
          onSearch={this.handleSearch}
          onChange={this.inputChange}
          placeholder="Search by Title"
          className="input-search-container__input-box"
        />
      </div>
    );
  }
}
InputSearch.propTypes = {
  getApiData: PropTypes.func
};
InputSearch.defaultProps = {
  getApiData: () => {}
};
export default connect(
  state => ({
    posts: state.posts.posts
  }),
  Actions
)(InputSearch);
