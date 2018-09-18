import * as React from 'react';

import AhhChart from '../component/charts/Chart';
import AhhLine from '../component/charts/Line';
import AhhArea from '../component/charts/Area';

class Charts extends React.Component<any, any> {

    constructor(props: any) {
        super(props)
    }

    public render() {
        return (
            <div>
                <AhhChart />
                <AhhLine />
                <AhhArea />
            </div>
        )
    }
}

export default Charts