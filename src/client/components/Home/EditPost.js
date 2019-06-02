import React from "react";
import { Modal, Form, Input, Button } from "antd";
import { connect } from "react-redux";
import * as Actions from "../../redux/actions/posts";

const { TextArea } = Input;

class EditPost extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.editPost({
          ...this.props.editItem,
          ...values
        });
        this.props.form.resetFields();
        this.props.handleCancel();
      }
    });
  };
  render() {
    const {
      editItem,
      handleCancel,
      form: { getFieldDecorator = () => {} }
    } = this.props;
    return (
      <Modal
        title="Edit post"
        footer={null}
        width={"60%"}
        visible={!!editItem}
        onCancel={handleCancel}
      >
        <Form
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
          onSubmit={this.handleSubmit}
        >
          <Form.Item label="Title">
            {getFieldDecorator("title", {
              initialValue: editItem ? editItem.title : "",
              rules: [{ required: true, message: "Please input post title!" }]
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Body">
            {getFieldDecorator("body", {
              initialValue: editItem ? editItem.body : "",
              rules: [{ required: true, message: "Please input post body!" }]
            })(<TextArea rows={6} />)}
          </Form.Item>
          <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

export default connect(
  state => ({}),
  Actions
)(Form.create()(EditPost));
