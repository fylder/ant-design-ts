import { Global, registerShape, Chart, Tooltip, Axis, Bar, Legend } from 'viser-react'
import * as React from 'react'

const data = [
    { type: '日用品', money: 300 },
    { type: '伙食费', money: 900 },
    { type: '交通费', money: 200 },
    { type: '水电费', money: 300 },
    { type: '房租', money: 1200 },
    { type: '商场消费', money: 1000 },
    { type: '应酬交际', money: 2000 },
    { type: '总费用', money: 5900 },
]

for (let i = 0; i < data.length; i++) {
    const item: any = data[i]

    if (i > 0 && i < data.length - 1) {
        if (Array.isArray(data[i - 1].money)) {
            item.money = [data[i - 1].money[1], item.money + data[i - 1].money[1]]
        } else {
            item.money = [data[i - 1].money, item.money + data[i - 1].money]
        }
    }
}

function getRectPath(points: any) {
    const path = []
    for (let i = 0; i < points.length; i++) {
        const point = points[i]
        if (point) {
            const action = i === 0 ? 'M' : 'L'
            path.push([action, point.x, point.y])
        }
    }
    const first = points[0]
    path.push(['L', first.x, first.y])
    path.push(['z'])
    return path
}

function getFillAttrs(cfg: any) {
    const defaultAttrs = Global.shape.interval
    const attrs = Object.assign(
        {},
        defaultAttrs,
        {
            fill: cfg.color,
            stroke: cfg.color,
            fillOpacity: cfg.opacity,
        },
        cfg.style
    )
    return attrs
}

registerShape('interval', 'waterfall', {
    draw(cfg: any, container: any) {
        const attrs = getFillAttrs(cfg)
        let rectPath = getRectPath(cfg.points)
        rectPath = this.parsePath(rectPath)
        const interval = container.addShape('path', {
            attrs: Object.assign(attrs, {
                path: rectPath,
            }),
        })

        if (cfg.nextPoints) {
            let linkPath = [['M', cfg.points[2].x, cfg.points[2].y], ['L', cfg.nextPoints[0].x, cfg.nextPoints[0].y]]

            if (cfg.nextPoints[0].y === 0) {
                linkPath[1] = ['L', cfg.nextPoints[1].x, cfg.nextPoints[1].y]
            }
            linkPath = this.parsePath(linkPath)
            container.addShape('path', {
                attrs: {
                    path: linkPath,
                    stroke: '#8c8c8c',
                    lineDash: [4, 2],
                },
            })
        }

        return interval
    },
})

class AhhChart extends React.Component {
    public render() {
        const items = [
            { value: '各项花销', fill: '#1890FF', marker: 'square' },
            { value: '总费用', fill: '#8c8c8c', marker: 'square' },
        ]

        const color = [
            'type',
            (type: any) => {
                if (type === '总费用') {
                    return '#8c8c8c'
                }
                return '#1890FF'
            },
        ]

        const tooltip = [
            'type*money',
            (type: any, money: any) => {
                if (Array.isArray(money)) {
                    return {
                        name: '生活费',
                        value: money[1] - money[0],
                    }
                }

                return {
                    name: '生活费',
                    value: money,
                }
            },
        ]

        return (
            <Chart forceFit={true} height={400} data={data}>
                <Legend custom={true} clickable={false} items={items} />
                <Axis />
                <Tooltip />
                <Bar position="type*money" shape="waterfall" color={color} tooltip={tooltip} />
            </Chart>
        )
    }
}

export default AhhChart
