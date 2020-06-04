import React, { Component } from "react";
import "./style.scss";
import 'antd/dist/antd.css';
import { Row, Col, Layout, Carousel, Menu, Space, Card, Modal, Rate } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

export default class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listDishes: [],
            visible: false
        }
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    handleCancel = () => {
        this.setState({ visible: false });
    };
    componentDidMount() {

    }
    render() {
        const { listDishes } = this.state;

        // if (listDishes && listDishes.length > 0) {
        //     var rows = [];
        //     var rowbody = [];
        //     var rowdata = listDishes.map((val, ind) => {
        //         return (
        //             <Col span={8} >
        //                 <Card title={val.title} style={{ width: 300 }}>
        //                     <p>{val.content}</p>
        //                 </Card>
        //             </Col>
        //         )
        //     })
        // }

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
                        <Modal
                            visible={this.state.visible}
                            title="Title"
                            footer={null}
                            onCancel={this.handleCancel}
                        >
                            <Rate disabled defaultValue={2} />
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p><Rate /></p>
                        </Modal>
                        <Sider>
                            <Menu theme="dark" defaultSelectedKeys={['1']} mode="vertical-left">
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
                            <Space direction="vertical">
                                <Row gutter={[16, 16]}>
                                    <Space direction="horizontal">
                                        <Col span={8} >
                                            <Card title="Default size card" style={{ width: 300 }} onClick={this.showModal}>
                                                <p>Card content</p>
                                                <p>Card content</p>
                                                <p>Card content</p>
                                            </Card>
                                        </Col>
                                        <Col span={8} >
                                            <Card title="Default size card" style={{ width: 300 }}>
                                                <p>Card content</p>
                                                <p>Card content</p>
                                                <p>Card content</p>
                                            </Card>
                                        </Col>
                                        <Col span={8} >
                                            <Card title="Default size card" style={{ width: 300 }}>
                                                <p>Card content</p>
                                                <p>Card content</p>
                                                <p>Card content</p>
                                            </Card>
                                        </Col>
                                    </Space>
                                </Row>
                                <Row gutter={[16, 16]}>
                                    <Space direction="horizontal">
                                        <Col span={8} >
                                            <Card title="Default size card" style={{ width: 300 }}>
                                                <p>Card content</p>
                                                <p>Card content</p>
                                                <p>Card content</p>
                                            </Card>
                                        </Col>
                                        <Col span={8} >
                                            <Card title="Default size card" style={{ width: 300 }}>
                                                <p>Card content</p>
                                                <p>Card content</p>
                                                <p>Card content</p>
                                            </Card>
                                        </Col>
                                        <Col span={8} >
                                            <Card title="Default size card" style={{ width: 300 }}>
                                                <p>Card content</p>
                                                <p>Card content</p>
                                                <p>Card content</p>
                                            </Card>
                                        </Col>
                                    </Space>
                                </Row>
                                <Row gutter={[16, 16]}>
                                    <Space direction="horizontal">
                                        <Col span={8} >
                                            <Card title="Default size card" style={{ width: 300 }}>
                                                <p>Card content</p>
                                                <p>Card content</p>
                                                <p>Card content</p>
                                            </Card>
                                        </Col>
                                        <Col span={8} >
                                            <Card title="Default size card" style={{ width: 300 }}>
                                                <p>Card content</p>
                                                <p>Card content</p>
                                                <p>Card content</p>
                                            </Card>
                                        </Col>
                                        <Col span={8} >
                                            <Card title="Default size card" style={{ width: 300 }}>
                                                <p>Card content</p>
                                                <p>Card content</p>
                                                <p>Card content</p>
                                            </Card>
                                        </Col>
                                    </Space>
                                </Row>
                                <Row gutter={[16, 16]}>
                                    <Space direction="horizontal">
                                        <Col span={8} >
                                            <Card title="Default size card" style={{ width: 300 }}>
                                                <p>Card content</p>
                                                <p>Card content</p>
                                                <p>Card content</p>
                                            </Card>
                                        </Col>
                                        <Col span={8} >
                                            <Card title="Default size card" style={{ width: 300 }}>
                                                <p>Card content</p>
                                                <p>Card content</p>
                                                <p>Card content</p>
                                            </Card>
                                        </Col>
                                        <Col span={8} >
                                            <Card title="Default size card" style={{ width: 300 }}>
                                                <p>Card content</p>
                                                <p>Card content</p>
                                                <p>Card content</p>
                                            </Card>
                                        </Col>
                                    </Space>
                                </Row>
                            </Space>
                        </Content>
                    </Layout>


                </Content>
                <Footer>Footer</Footer>
            </Layout >
        )
    }
}