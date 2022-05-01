import { Route } from "react-router-dom";
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
} from '@ant-design/icons';
import { useState } from 'react';
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
];



export const AdminTemplateTest = (props) => {

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
                            User
                        </Menu.Item>
                        <Menu.Item key="2" icon={<FileOutlined />}>
                            Film
                        </Menu.Item>
                        <Menu.Item key="2" icon={<FileAddOutlined />}>
                            Add new
                        </Menu.Item>
                        <Menu.Item key="3" icon={<DesktopOutlined />}>
                            Showtime
                        </Menu.Item>
                    </Menu>
                </Sider>

                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        {state.collapsed ? <MenuUnfoldOutlined style={{ color: "white", fontSize: "20px" }} onClick={onCollapse} /> : <MenuFoldOutlined style={{ color: "white", fontSize: "20px" }} onClick={onCollapse} />}
                    </Header>
                    <Content
                        style={{
                            margin: '0 16px',
                        }}
                    >
                        <div
                            className="site-layout-background"
                            style={{
                                padding: 24,
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