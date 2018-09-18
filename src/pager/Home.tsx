import * as React from 'react';

import AhhTable from '../component/table/AhhTable';

class Home extends React.Component<any, any> {

    constructor(props: any) {
        super(props)
    }

    public render() {
        return (
            <div>
                <AhhTable />
            </div>
        )
    }
}

export default Home