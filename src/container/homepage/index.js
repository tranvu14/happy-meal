import React, { Component } from "react";
import "./style.scss";
import 'antd/dist/antd.css';
import { connect } from "react-redux";
import { getAllDishes, getDetailDish, rating } from "../../actions/home"
import { Row, Col, Layout, Carousel, Menu, Space, Card, Modal, Rate, Button, Avatar, Dropdown, Alert } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import AddDish from "./add_dish";
import LoginForm from "./login";
const { Header, Footer, Sider, Content } = Layout;

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listDishes: [],
            detailDish: [],
            visible: false,
            add_dish: false,
            login: false,
            username: ""
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
    showLogin = () => {
        this.setState({
            login: true
        })
    }
    sendRating = (e, dish_id) => {
        this.props.rating({
            rating_value: Number(e),
            dish_id
        })
    }
    handleCancel = () => {
        this.setState({ visible: false, add_dish: false, login: false });
    };
    componentDidMount() {
        this.props.getAllDishes()
    }
    componentWillReceiveProps(nextProps) {
        const { listDishes, detailDish } = this.props;
        this.setState({
            username: nextProps.username
        })
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
                            <h4><span>Đánh giá :</span>
                                {
                                    val.rating > 0 ? (
                                        <Rate defaultValue={val.rating} disabled />
                                    ) : (<p>Chưa có đánh giá</p>)
                                }

                            </h4>
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
                            {rowdata[i + 3]}
                        </Space>
                    </Row>
                )
                i = i + 4
            }
        }

        return (
            <Layout className="homepage">
                <Header>
                    <h2>MÓN NGON MỖI NGÀY</h2>
                    <div className="info">
                        {
                            this.state.username.length > 0 ? (<span>Xin chào {this.state.username}      </span>) : null
                        }

                        <Dropdown overlay={
                            <Menu>
                                {
                                    this.props.token && this.props.token.length > 0 ?
                                        (<Menu.Item>
                                            <Button onClick={this.addDish}>Thêm món ăn</Button>
                                        </Menu.Item>)
                                        : (
                                            <Menu.Item>
                                                <Button onClick={this.showLogin}>Đăng nhập</Button>
                                            </Menu.Item>
                                        )

                                }
                            </Menu>
                        }>

                            <Avatar size={32} icon={<UserOutlined />} className="ant-dropdown-link" onClick={e => e.preventDefault()} />

                        </Dropdown>
                    </div>

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
                                    <p> Đánh giá: <Rate disabled defaultValue={detailDish[0].rating} />  </p>
                                    <Space direction="horizontal" className="description">
                                        <div>
                                            <h2>Những nguyên liệu cần chuẩn bị</h2>
                                            {
                                                detailDish[0].ingredients.length > 0 ? (
                                                    <>
                                                        {detailDish[0].ingredients.map((val, ind) =>
                                                            (<p>{val.ingredient_name} : {val.ingredient_weight} </p>)
                                                        )}
                                                    </>
                                                ) : null
                                            }
                                        </div>
                                        <img alt="img" src={detailDish[0].thumbnail} />
                                    </Space>

                                    <h2>Bước 1: Sơ chế</h2>
                                    <p>{detailDish[0].prepare}</p>
                                    <h2>Bước 2: Thực hiện</h2>
                                    <p>{detailDish[0].doing}</p>
                                    <h2>Bước 3: Thưởng thức</h2>
                                    <p>{detailDish[0].eating}</p>
                                    <p>Đánh giá</p>
                                    {this.props.token ? (<p><Rate onChange={e => this.sendRating(e, detailDish[0].dish_id)} /></p>) : <h4>Bạn cần phải đăng nhập để có thể đánh giá</h4>}

                                </Modal>
                            ) : null
                        }

                        <Modal
                            visible={this.state.add_dish}
                            title="Thêm món ăn mới"
                            footer={null}
                            onCancel={this.handleCancel}

                        >
                            <AddDish onCancel={this.handleCancel} />
                        </Modal>
                        <Modal
                            visible={this.state.login}
                            title="Đăng nhập"
                            footer={null}
                            onCancel={this.handleCancel}
                        >
                            <LoginForm onCancel={this.handleCancel} />
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
    getDetailDish: (data) => dispatch(getDetailDish(data)),
    rating: (data) => dispatch(rating(data))
})
const mapStateToProps = state => ({
    isLoading: state.homeReducer.isLoading,
    error: state.homeReducer.error,
    listDishes: state.homeReducer.listDishes,
    detailDish: state.homeReducer.detailDish,
    token: state.homeReducer.token,
    username: state.homeReducer.username
})

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)