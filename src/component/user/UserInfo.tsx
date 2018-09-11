import * as React from 'react'
import { Card } from 'antd'
import './userCard.less'

class UserCard extends React.Component<any, any>{

    constructor(porps: any) {
        super(porps)

    }

    public render() {
        const operationTabList = [
            {
                key: 'articles',
                tab: (
                    <span>
                        文章 <span style={{ fontSize: 14 }}>(8)</span>
                    </span>
                ),
            },
            {
                key: 'applications',
                tab: (
                    <span>
                        应用 <span style={{ fontSize: 14 }}>(8)</span>
                    </span>
                ),
            },
            {
                key: 'projects',
                tab: (
                    <span>
                        项目 <span style={{ fontSize: 14 }}>(8)</span>
                    </span>
                ),
            },
        ];
        return (
            <Card
                className='tabsCard'
                tabList={operationTabList} >
                a
            </Card>

        )
    }
}

export default UserCard