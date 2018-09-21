import * as React from 'react'
import { Layout, BackTop } from 'antd'
import { Redirect } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import AhhHeader from './AhhHeader'
import AhhFooter from './AhhFooter'
import AhhSider from './AhhSider'
import Home from './../pager/Home'
import Ahh from './../pager/Ahh'
import About from './../pager/About'
import Charts from './../pager/Charts'
import Photos from './../pager/Photos'
import Banners from './../pager/Banners'

const { Content } = Layout
class Pager extends React.Component {
    constructor(props: {}) {
        super(props)
    }

    public render() {
        return (
            <Layout>
                <AhhSider />
                <Layout style={{ marginLeft: 200, minHeight: '100vh' }} className="components-back-top-demo-custom">
                    <BackTop>
                        <div className="ant-back-top-inner">UP</div>
                    </BackTop>
                    <AhhHeader />
                    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                        <Redirect to="/about" />
                        {renderRoutes([
                            {
                                component: () => <Home />,
                                exact: true,
                                path: '/home',
                            },
                            {
                                component: () => <Ahh />,
                                path: '/ahh',
                            },
                            {
                                component: () => <Charts />,
                                path: '/charts',
                            },
                            {
                                component: () => <Photos />,
                                path: '/photo',
                            },
                            {
                                component: () => <Banners />,
                                path: '/index',
                            },
                            {
                                component: () => <About />,
                                path: '/about',
                            },
                        ])}
                    </Content>
                    <AhhFooter />
                </Layout>
            </Layout>
        )
    }
}

export default Pager
