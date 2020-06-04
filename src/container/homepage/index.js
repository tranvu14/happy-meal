import React, { Component } from "react";
import "./style.scss";
import 'antd/dist/antd.css';
import { Row, Col, Layout, Carousel, Menu } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

export default class Homepage extends Component {
    render() {
        return (

            <Layout className="homepage">
                <Header>Header</Header>
                <Content>
                    <Carousel autoplay className="slider-image">
                        <div>
                            <h3>1</h3>
                        </div>
                        <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                    </Carousel>
                    <Layout>
                        <Sider>
                            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                                <Menu.Item key="1">
                                    <span>Option 1</span>
                                </Menu.Item>
                                <Menu.Item key="2" >
                                    <span>Option 2</span>
                                </Menu.Item>
                                <Menu.Item key="3" >
                                    <span>Option 3</span>
                                </Menu.Item>
                                <Menu.Item key="4" >
                                    <span>Option 4</span>
                                </Menu.Item>
                                <Menu.Item key="5" >
                                    <span>Option 5</span>
                                </Menu.Item>
                            </Menu>
                        </Sider>
                        <Content>
                            <Row gutter={[16, 16]}>
                                <Col span={8} >
                                    <div>Column</div>
                                </Col>
                                <Col span={8} >
                                    <div>Column</div>
                                </Col>
                                <Col span={8} >
                                    <div>Column</div>
                                </Col>
                            </Row>
                            <Row gutter={[16, 16]}>
                                <Col span={8} >
                                    <div>Column</div>
                                </Col>
                                <Col span={8} >
                                    <div>Column</div>
                                </Col>
                                <Col span={8} >
                                    <div>Column</div>
                                </Col>
                            </Row>
                        </Content>
                    </Layout>


                </Content>
                <Footer>Footer</Footer>
            </Layout >
        )
    }
}