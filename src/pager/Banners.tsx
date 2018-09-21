import * as React from 'react'
import Banner from './../component/banner/Banner'
import Banner2 from '../component/banner/Banner2'

class Banners extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
    }

    public render() {
        return (
            <div>
                <Banner />
                <Banner2 />
            </div>
        )
    }
}

export default Banners
