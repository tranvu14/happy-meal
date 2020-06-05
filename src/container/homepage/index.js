import React, { Component } from "react";
import "./style.scss";
import 'antd/dist/antd.css';
import { connect } from "react-redux";
import { getAllDishes, getDetailDish } from "../../actions/home"
import { Row, Col, Layout, Carousel, Menu, Space, Card, Modal, Rate, Button, Avatar, Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import AddDish from "./add_dish";
const { Header, Footer, Sider, Content } = Layout;

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listDishes: [],
            detailDish: [],
            visible: false,
            add_dish: false
        }
    }
    showModal = (e, id) => {
        e.stopPropagation()
        if (id) {
            this.props.getDetailDish(id)
        }


    };
    addDish = () => {
        this.setState({
            add_dish: true
        })
    }
    handleCancel = () => {
        this.setState({ visible: false, add_dish: false });
    };
    componentDidMount() {
        this.props.getAllDishes()
    }
    componentWillReceiveProps(nextProps) {
        const { listDishes, detailDish } = this.props;
        if (nextProps.listDishes !== listDishes) {
            this.setState({
                listDishes: nextProps.listDishes
            });
        }
        if (JSON.stringify(nextProps.detailDish) !== JSON.stringify(detailDish)) {
            console.log(nextProps.detailDish);

            this.setState({
                detailDish: nextProps.detailDish,
                visible: true,
            });
        }
    }
    render() {
        const { listDishes, detailDish } = this.state;
        if (listDishes && listDishes.length > 0) {
            var rows = [];
            var rowbody = [];
            var img = listDishes.filter((val, ind) => val.thumbnail)
            var listSlider = img.map((val) => {
                return (
                    <Card
                        cover={<img alt="example" src={val.thumbnail} />}
                    >
                        <h1>{val.title}</h1>
                        <h3>{val.description}</h3>
                    </Card>
                )
            })

            var rowdata = listDishes.map((val, ind) => {


                return (
                    <Col span={8} >
                        <Card hoverable title={val.title} style={{ width: 300 }} onClick={e => this.showModal(e, val.dish_id)} >
                            <p>{val.description}</p>
                        </Card>
                    </Col>
                )
            })
            var i = 0;
            while (i < rowdata.length) {
                rowbody.push(
                    <Row gutter={[16, 16]}>
                        <Space direction="horizontal">
                            {rowdata[i]}
                            {rowdata[i + 1]}
                            {rowdata[i + 2]}
                        </Space>
                    </Row>
                )
                i = i + 3
            }
        }
        console.log(detailDish);

        return (
            <Layout className="homepage">
                <Header>
                    <h2>MÓN NGON MỖI NGÀY</h2>
                    <Dropdown overlay={
                        <Menu>
                            <Menu.Item>
                                <Button onClick={this.addDish}>Thêm món ăn</Button>
                            </Menu.Item>
                        </Menu>
                    }>

                        <Avatar size={32} icon={<UserOutlined />} className="ant-dropdown-link" onClick={e => e.preventDefault()} />

                    </Dropdown>
                </Header>
                <Content>
                    <Carousel autoplay className="slider-image">
                        {listSlider}
                    </Carousel>
                    <Layout>
                        {
                            detailDish.length > 0 ? (
                                <Modal
                                    visible={this.state.visible}
                                    title={detailDish[0].title}
                                    footer={null}
                                    onCancel={this.handleCancel}
                                >
                                    <Rate disabled defaultValue={2} />
                                    <p>Những nguyên liệu cần chuẩn bị</p>
                                    {
                                        detailDish[0].ingredients.length > 0 ? (
                                            <>
                                                {detailDish[0].ingredients.map((val, ind) =>
                                                    (<p>{val.ingredient_name} : {val.ingredient_weight} </p>)
                                                )}
                                            </>
                                        ) : null
                                    }
                                    <p><Rate /></p>
                                    <h2>Bước 1: Sơ chế</h2>
                                    <p>{detailDish[0].prepare}</p>
                                    <h2>Bước 2: Thực hiện</h2>
                                    <p>{detailDish[0].doing}</p>
                                    <h2>Bước 3: Thưởng thức</h2>
                                    <p>{detailDish[0].eating}</p>
                                </Modal>
                            ) : null
                        }

                        <Modal
                            visible={this.state.add_dish}
                            title="Thêm món ăn mới"
                            footer={null}
                            onCancel={this.handleCancel}
                            cancel={this.handleCancel}
                        >
                            <AddDish />
                        </Modal>
                        {/* <Sider>
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
                        </Sider> */}
                        <Content>
                            <Space direction="vertical">
                                {rowbody}
                            </Space>
                        </Content>
                    </Layout>


                </Content>
                {/* <Footer>Footer</Footer> */}
            </Layout >
        )
    }
}

const mapDispatchToProps = dispatch => ({
    getAllDishes: () => dispatch(getAllDishes()),
    getDetailDish: (data) => dispatch(getDetailDish(data))
})
const mapStateToProps = state => ({
    isLoading: state.homeReducer.isLoading,
    error: state.homeReducer.error,
    listDishes: state.homeReducer.listDishes,
    detailDish: state.homeReducer.detailDish
})

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)