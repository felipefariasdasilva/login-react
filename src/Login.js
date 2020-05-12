import React, { useState } from 'react'
import { Form, Button, Input, Layout, Card, Checkbox } from 'antd'

import "antd/dist/antd.css"
import Authentication from './Authentication'

export default function Login( { history } ){

    const tailLayout = { wrapperCol: { offset: 8, span: 16 } }
    const [user, setUser] = useState( { username: "", password: "" } )

    const onFinish = values => {
        setUser( { username: values.username, password: values.password, approved: false } )

        Authentication.authenticate(() => {
            this.setState( () => ( { isAuthenticated: true } ) ) 
        })

        history.push('/home')
    }

    
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo)
    }

    return(

        <Layout style={ { height: "100vh"  } } >                   
            <Card hoverable title="Login" style={{ margin: "50px 300px 10px 300px", justifyContent: "center" }}>
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>
                
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                
                    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit" >
                        Submit
                        </Button>
                    </Form.Item>
                </Form>       
            </Card>
        </Layout>
    )
}