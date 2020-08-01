import { Layout, Menu, Breadcrumb } from 'antd';
import {
    DesktopOutlined,
    EditOutlined,
} from '@ant-design/icons';
import React from "react";
import ResultUpdateComponent from "../component/ResultUpdateComponent";
import ResultViewComponent from "../component/ResultViewComponent";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const DEFAULT_MENU = 1;

export default class Slider extends React.Component {
    defaultMenu = 1;
    state = {
        collapsed: false,
        key : DEFAULT_MENU //default menu is 1
    };

    onCollapse = collapsed => {
        this.setState({ collapsed });
    };

    handleMenuClick = (event) => {
        this.setState({key : event.key})
    }

    contentLoader = () => {
        switch(parseInt(this.state.key)) {
            case 1:
                return <ResultUpdateComponent></ResultUpdateComponent>
            case 2:
                return <ResultViewComponent></ResultViewComponent>

        }
    }

    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={[DEFAULT_MENU.toString()]} mode="inline">
                        <Menu.Item>
                        </Menu.Item>
                        <Menu.Item key="1" icon={<EditOutlined />} onClick={this.handleMenuClick}>
                            Update Results
                        </Menu.Item>
                        <Menu.Item key="2" icon={<DesktopOutlined />} onClick={this.handleMenuClick}>
                            View Results
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0, color: '#ffffff', fontWeight: 'bold' }}>
                        TDUSA Results Updater
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        {this.contentLoader()}
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>TDUSA</Footer>
                </Layout>
            </Layout>
        );
    }
}
