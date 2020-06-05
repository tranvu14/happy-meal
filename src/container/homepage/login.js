import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd'
import { connect } from 'react-redux'
import { login } from "../../actions/home"
class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            layout: {
                labelCol: {
                    span: 8,
                },
                wrapperCol: {
                    span: 16,
                },
            },
            tailLayout: {
                wrapperCol: {
                    offset: 8,
                    span: 16,
                },
            }

        }
    }
    onFinish = values => {
        this.props.login({
            email: values.email,
            password: values.password
        })
        this.props.onCancel()
    };

    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    render() {
        return (
            <Form
                {...this.state.layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập Email!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Mật khẩu"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập mật khẩu!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...this.state.tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item {...this.state.tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Đăng nhập
                    </Button>
                </Form.Item>
            </Form>
        );


    }
}


const mapDispatchToProps = dispatch => ({
    login: (data) => dispatch(login(data)),
})
const mapStateToProps = state => ({
    isLoading: state.homeReducer.isLoading,
    error: state.homeReducer.error,
    dataLogin: state.homeReducer.dataLogin
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)