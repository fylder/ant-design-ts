import * as React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout

class AhhFooter extends React.Component {

    constructor(props: {}) {
        super(props)
    }

    public render(): JSX.Element {
        return (
            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2018 Created by Ant UED
    </Footer>
        )
    };
}

export default AhhFooter