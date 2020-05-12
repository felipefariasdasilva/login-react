import React from 'react'
import { Layout, Menu } from 'antd'


const {Sider, Header, Content, Footer } = Layout

export default function Home(){

    return(
        <Layout style={ { height: "100vh" } }>
            <Sider>
                <Menu theme="dark">
                    <Menu.Item>menu item 1</Menu.Item>
                </Menu>
            </Sider>

            <Layout>
                <Header>header</Header>
                <Content>content</Content>
                <Footer>footer</Footer>
            </Layout>

        </Layout>
    )

}