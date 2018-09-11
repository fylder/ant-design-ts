import * as React from 'react';
import { Button, Alert, Row, Col, Card, Tooltip } from 'antd';
import UserCard from './../component/user/UserCard';
import UserInfo from './../component/user/UserInfo';

class About extends React.Component<any, any> {

    constructor(props: {}) {
        super(props)
        this.state = {
            show: false,
        }
    }

    public render() {
        const onClose = (e: {}) => {
            console.log(e, 'I was closed.');
        }
        const showTip = (e: {}) => {
            this.setState({
                show: !this.state.show
            })
            console.log(e, 'I was closed.');
        }
        return (
            <div>
                <Row gutter={24}>
                    <Col lg={7} md={24}>
                        <div className='center'>
                            <UserCard />
                        </div>
                        <Tooltip placement="topLeft" title="要显示箭头不">
                            <Button onClick={showTip}>
                                test
                            </Button>
                        </Tooltip>
                    </Col>
                    <Col lg={17} md={24}>
                        <Card
                            bordered={false}>
                            <Alert
                                message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
                                type="success"
                                closable={this.state.show}
                                onClose={onClose}
                            />
                        </Card >
                        <UserInfo />
                    </Col>

                </Row>
            </div >
        )
    }

}

export default About
