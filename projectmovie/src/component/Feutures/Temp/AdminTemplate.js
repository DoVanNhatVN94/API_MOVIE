import { NavLink, Route, useHistory } from "react-router-dom";
import { Fragment, React } from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
    FileAddOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    LoginOutlined,
    HomeOutlined
} from '@ant-design/icons';
import { useState } from 'react';
import SubMenu from "antd/lib/menu/SubMenu";
const { Header, Content, Footer, Sider } = Layout;

export const AdminTemplate = (props) => {

    const history = useHistory()

    const [state, setState] = useState({
        collapsed: false,
    })

    const onCollapse = (collapsed) => {
        setState({
            collapsed: !state.collapsed,
        });
    };


    return <Route exact path={props.path} render={(propsRoute) => {
        return <Fragment>
            <Layout
                style={{
                    minHeight: '100vh',
                }}
            >
                <Sider trigger={null} collapsible collapsed={state.collapsed}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<UserOutlined />}>
                            <NavLink to='/admin'>Admin</NavLink>
                        </Menu.Item>
                        <SubMenu key="2" icon={<FileOutlined />} title='Film'>
                            <Menu.Item key="sub1" icon={<FileOutlined />}>
                                <NavLink to='/admin/films'>Film</NavLink>
                            </Menu.Item>
                            <Menu.Item key="sub2" icon={<FileAddOutlined />}>
                                <NavLink to='/admin/films/addnew'>Add new</NavLink>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="3" icon={<FileOutlined />} title='User'>
                            <Menu.Item key="sub3" icon={<FileOutlined />}>
                                <NavLink to='/admin/user'>User</NavLink>
                            </Menu.Item>
                            <Menu.Item key="sub4" icon={<FileAddOutlined />}>
                                <NavLink to='/admin/user/addnew'>Add new User</NavLink>
                            </Menu.Item>
                        </SubMenu>
                        <Menu.Item key="4" icon={<HomeOutlined />}>
                            <NavLink to='/home'>Home</NavLink>
                        </Menu.Item>
                    </Menu>
                </Sider>    

                <Layout className="site-layout">
                    <Header className="site-layout-background d-flex align-items-center justify-content-between" style={{ padding: 0 }}>
                        {state.collapsed ? <MenuUnfoldOutlined style={{ color: "white", fontSize: "20px" }} onClick={onCollapse} /> : <MenuFoldOutlined style={{ color: "white", fontSize: "20px" }} onClick={onCollapse} />}
                        {<LoginOutlined style={{ color: "white", fontSize: "20px", padding: "0 10px" }}onClick={() => {
              localStorage.clear();
              history.push("/home");
            }} />}
                    </Header>
                    <Content
                        style={{
                            margin: '0 16px',
                        }}
                    >
                        <div
                            className="site-layout-background"
                            style={{
                                minHeight: 360,
                            }}
                        >
                            <props.component {...propsRoute} />
                        </div>
                    </Content>
                    <Footer
                        style={{
                            textAlign: 'center',
                        }}
                    >
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        </Fragment>
    }} />
}