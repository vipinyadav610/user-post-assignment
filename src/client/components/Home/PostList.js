import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { List, Spin } from "antd";
import EditPost from "./EditPost";
import { searchStringInArray } from "../../redux/selectors/posts";

class PostList extends React.Component {
  state = {
    editItem: null
  };

  handleCancel = () => {
    this.setState({ editItem: null });
  };

  onEdit(item) {
    this.setState({ editItem: item });
  }
  render() {
    return (
      <div className="post-list-container">
        <EditPost
          editItem={this.state.editItem}
          handleCancel={this.handleCancel}
        />
        <List
          bordered
          dataSource={this.props.posts}
          renderItem={item => (
            <List.Item
              key={item.id}
              actions={[
                <div
                  className="list-action__edit"
                  onClick={this.onEdit.bind(this, item)}
                >
                  edit
                </div>
              ]}
            >
              <List.Item.Meta
                title={<div>{item.title}</div>}
                description={item.body}
              />
            </List.Item>
          )}
          pagination={{
            pageSize: 5
          }}
        >
          {this.props.loading && (
            <div className="post-loading-container">
              <Spin />
            </div>
          )}
        </List>
      </div>
    );
  }
}
PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      userId: PropTypes.number,
      id: PropTypes.number,
      body: PropTypes.string
    })
  ),
  loading: PropTypes.bool
};

PostList.defaultProps = {
  posts: [],
  loading: false
};
export default connect(state => ({
  // posts: state.posts.posts,
  posts: searchStringInArray(state.posts.searchValue, state.posts.posts),
  loading: state.posts.isFetching
}))(PostList);
