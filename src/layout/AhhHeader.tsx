import * as React from 'react'
import { Layout, Row, Col, Avatar, Tooltip, Icon, Dropdown, Spin, Menu } from 'antd';
// import { FormattedMessage } from 'umi/locale';
import './ahhHeader.scss';

const { Header } = Layout;
const menu = (
    <Menu className='menu' selectedKeys={[]}>
        <Menu.Item key="userCenter">
            <Icon type="user" />
            个人中心
            {/* <FormattedMessage id="menu.account.center" defaultMessage="account center" /> */}
        </Menu.Item>
        <Menu.Item key="userinfo">
            <Icon type="setting" />
            个人设置
            {/* <FormattedMessage id="menu.account.settings" defaultMessage="account settings" /> */}
        </Menu.Item>
        <Menu.Item key="triggerError">
            <Icon type="close-circle" />
            问题反馈
            {/* <FormattedMessage id="menu.account.trigger" defaultMessage="Trigger Error" /> */}
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout">
            <Icon type="logout" />
            退出登录
      </Menu.Item>
    </Menu>
);

class AhhHeader extends React.Component {
    public state = {
        currentUser: {
            name: "fylder",
            avatar: "https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png",
        }
    }
    constructor(props: any) {
        super(props)
    }

    public render() {
        return (
            <Header style={{ background: '#fff', padding: 0 }} >
                <Row type="flex" justify="end">
                    <Col span={4}>
                        <div className='right'>
                            <Tooltip title="使用文档">
                                <a
                                    target="_blank"
                                    href="https://pro.ant.design/docs/getting-started"
                                    rel="noopener noreferrer"
                                    className='action'
                                    title="使用文档"
                                >
                                    <Icon type="question-circle-o" />
                                </a>
                            </Tooltip>
                            {this.state.currentUser.name ? (
                                <Dropdown overlay={menu}>
                                    <span className='action account'>
                                        <Avatar
                                            className='avatar'
                                            size="small"
                                            src={this.state.currentUser.avatar}
                                            alt="avatar"
                                        />
                                        <span className='name'>{this.state.currentUser.name}</span>
                                    </span>
                                </Dropdown>
                            ) : (
                                    <Spin size="small" style={{ marginLeft: 8, marginRight: 8 }} />
                                )}
                        </div>
                    </Col>
                </Row>

            </Header>
        )
    }
}

export default AhhHeader;
