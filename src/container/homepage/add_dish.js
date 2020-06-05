import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { postNewDish } from "../../actions/home"
import { connect } from "react-redux";
import { Form, Input, Button, Space, Layout } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

class AddDish extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataPost: []
    }
  }

  onFinish = values => {
    this.props.postNewDish(values)
    this.setState({
      dataPost: values
    })
    this.props.onCancel()
    console.log('Received values of form:', values);
  };


  validateMessages = {
    required: '${label} phải có!',
  };
  render() {
    console.log(this.cancel)
    return (
      <Form name="dynamic_form_nest_item" onFinish={this.onFinish} autoComplete="off" validateMessages={this.validateMessages}>
        <Form.Item
          name="title"
          label="Tiêu đề"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Mô tả"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="thumbnail"
          label="Link ảnh đính kèm ( nếu có )"
        >
          <Input />
        </Form.Item>
        <Form.List name="ingredients">
          {(fields, { add, remove }) => {
            return (
              <div>
                {fields.map(field => (
                  <Space key={field.key} style={{ display: 'flex', marginBottom: 8 }} align="start">
                    <Form.Item
                      {...field}
                      name={[field.name, 'ingredient_name']}
                      fieldKey={[field.fieldKey, 'ingredient_name']}
                      rules={[{ required: true, message: 'Thiếu tên' }]}
                    >
                      <Input placeholder="Tên nguyên liệu" />
                    </Form.Item>
                    <Form.Item
                      {...field}
                      name={[field.name, 'ingredient_weight']}
                      fieldKey={[field.fieldKey, 'ingredient_weight']}
                    >
                      <Input placeholder="Khối lượng" />
                    </Form.Item>
                    <MinusCircleOutlined
                      onClick={() => {
                        remove(field.name);
                      }}
                    />
                  </Space>
                ))}

                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => {
                      add();
                    }}
                    block
                  >
                    <PlusOutlined /> Thêm nguyên liệu
                  </Button>
                </Form.Item>
              </div>
            );
          }}
        </Form.List>
        <h5>Hướng dẫn thực hiện</h5>
        <Form.Item
          name="prepare"
          label="Sơ chế"
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          name="doing"
          label="Thực hiện"
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          name="eating"
          label="Cách dùng"
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Đăng bài
          </Button>
        </Form.Item>
      </Form>
    );
  }

};


const mapDispatchToProps = dispatch => ({
  postNewDish: data => dispatch(postNewDish(data))
})
const mapStateToProps = state => ({
  isLoading: state.homeReducer.isLoading,
  error: state.homeReducer.error,
  listPostDish: state.homeReducer.listPostDish
})

export default connect(mapStateToProps, mapDispatchToProps)(AddDish)