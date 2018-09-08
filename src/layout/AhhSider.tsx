import * as React from 'react'
import { Layout, Menu, } from 'antd';
import { Link } from "react-router-dom";
const { Sider } = Layout;
import './ahhSider.scss';

class AhhSider extends React.Component {

    constructor(props: any) {
        super(props)
    }

    public render() {
        return (
            <div>
                <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}
                    collapsed={false}
                    breakpoint="lg"
                    {...this.props}
                >
                    <div className='logo' id="logo">
                        <Link to="/">
                            <h1>Ant Design Pro</h1>
                        </Link>
                    </div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                        <Menu.Item key="1" >
                            <Link to="/home">
                                <span className="nav-text">Home</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/ahh">
                                <span className="nav-text">Ahh</span>
                            </Link></Menu.Item>
                        <Menu.Item key="3">
                            <Link to="/about">
                                <span className="nav-text">About</span>
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Sider>

            </div >
        )
    }
}

export default AhhSider;
