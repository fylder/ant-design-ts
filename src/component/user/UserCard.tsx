import * as React from 'react'
import { Card, Avatar, Tag, Divider, Tooltip } from 'antd'
import './userCard.less'

class UserCard extends React.Component<any, any>{

    constructor(porps: any) {
        super(porps)

    }

    public render() {
        return (
            <div>
                <Card className='user-card-lay' >
                    <div className='avatarHolder'>
                        <Avatar className='avatar' size={84} src='https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png' />
                        <div className='name'>fylder</div>
                        <div>ahh</div>
                    </div>
                    <div className='detail'>
                        <p>
                            <i className='title' />
                            fylder
                        </p>
                        <p>
                            <i className='group' />
                            six six six
                        </p>
                        <p>
                            <i className='address' />
                            ahh
                            yihuohuo
                        </p>
                    </div>
                    <Divider dashed={true} />
                    <div className='user-card-labe'>
                        <Tooltip placement="top" title="漆黑">
                            <Tag color="volcano">ahh</Tag>
                        </Tooltip> <Tooltip placement="top" title="扑街">
                            <Tag color="orange">凉凉</Tag>
                        </Tooltip><Tooltip placement="top" title="好晒雷">
                            <Tag color="gold">你好</Tag>
                        </Tooltip><Tooltip placement="top" title="好啊">
                            <Tag color="lime">再见</Tag>
                        </Tooltip>
                    </div>
                </Card>

            </div>
        )
    }
}

export default UserCard