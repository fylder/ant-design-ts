import * as React from 'react';

import Photo from '../component/photo/Photo';

class Photos extends React.Component<any, any> {

    constructor(props: any) {
        super(props)
    }

    public render() {
        return (
            <div>
                <Photo />
            </div>
        )
    }
}

export default Photos