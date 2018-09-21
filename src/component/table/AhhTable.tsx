import * as React from 'react'
import { Card, Table } from 'antd'
import './ahhTable.less'

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        render: (text: any) => <a href="javascript:;">{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
]
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '4',
        name: 'Disabled User',
        age: 99,
        address: 'Sidney No. 1 Lake Park',
    },
]

const rowSelection = {
    onChange: (selectedRowKeys: any, selectedRows: any) => {
        console.log(
            `selectedRowKeys: ${selectedRowKeys}`,
            'selectedRows: ',
            selectedRows
        )
    },
    // getCheckboxProps: record => ({
    //     disabled: record.name === 'Disabled User', // Column configuration not to be checked
    //     name: record.name,
    // }),
}

class AhhTable extends React.Component<any, any> {
    constructor(porps: any) {
        super(porps)
    }

    public render() {
        return (
            <Card>
                <Table
                    rowSelection={rowSelection}
                    columns={columns}
                    dataSource={data}
                />
            </Card>
        )
    }
}

export default AhhTable
