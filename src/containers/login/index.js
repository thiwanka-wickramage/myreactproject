import React, { Component } from "react";
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import "../../assets/css/components/login.css";
import { Input, Form, Checkbox, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { doLogin } from "./actions";
import { login_inProgress, login_error } from "./selectors";

class LoginComponent extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        const onFinish = formData => {
            console.log( formData );
            this.props.doLogin(formData);
            this.props.setLoggedStatus( true );
        };

        return (
            <div>
                <div className="main-box">
                    <div className="left-intro">
                        <h1>Lorem Ipsum</h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.
                        </p>
                    </div>
                    <div className="right-form">
                        <h2>Welcome Aboard</h2>
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                name="email"
                                rules={[
                                    { required: true, message: "Please input your email!" }
                                ]}
                            >
                                <Input
                                    prefix={<UserOutlined className="site-form-item-icon"/>}
                                    placeholder="Email Address"
                                />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    { required: true, message: "Please input your Password!" }
                                ]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon"/>}
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>

                                <a className="login-form-forgot" href="">
                                    Forgot password
                                </a>
                            </Form.Item>

                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="login-form-button"
                                >
                                    Log in
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector( {
    login_inProgress: login_inProgress(),
    login_error: login_error(),
} );


const mapDispatchToProps = dispatch => ({
    doLogin: payload => {
        dispatch( doLogin( payload ) );
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)( LoginComponent );
