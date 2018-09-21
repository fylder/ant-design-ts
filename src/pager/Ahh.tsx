import * as React from 'react'
import { Form, Layout } from 'antd'
import LoginLay from '../component/login/LoginLay'

const WrappedNormalLoginForm = Form.create()(LoginLay)

class Ahh extends React.Component {
    constructor(props: {}) {
        super(props)
    }

    public render() {
        return (
            <Layout className="App ahh-login">
                <WrappedNormalLoginForm />
            </Layout>
        )
    }
}

export default Ahh
