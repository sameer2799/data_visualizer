import React from 'react';


function WebTrafficChart() {

    useEffect(() => {
        echarts.init(document.querySelector('#trafficChart')).setOption({
            tooltip: {
                trigger: 'item',
            },
            legend: {
                top: '5%',
                left: 'center',
            },
            radar: {
                shape: 'circle',
                indicator: [
                    {
                        name: 'Sales',
                        max: 6500,
                    },
                    {
                        name: 'Administration',
                        max: 16000,
                    },
                    {
                        name: 'IT',
                        max: 30000,
                    },
                    {
                        name: 'Customer Support',
                        max: 38000,
                    },
                    {
                        name: 'Developement',
                        max: 52000,
                    },
                    {
                        name: 'Marketing',
                        max: 38000,
                    },
                ],
            },
            series: [
                {
                    name: 'Access From',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'canter',
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontsize: '18',
                            fontWeight: 'bold',
                        },
                    },
                    labelLine: {
                        show: false,
                    },
                    data: [
                        {
                            value: 1048,
                            name: 'Search Engine',
                        },
                        {
                            value: 735,
                            name: 'Direct',
                        },
                        {
                            value: 580,
                            name: 'Email',
                        },
                        {
                            value: 484,
                            name: 'Union Ads',
                        },
                        {
                            value: 300,
                            name: 'Video Ads',
                        },
                    ],
                },
            ],
        })
    })

    return (
        <div className="echart" id="trafficChart" style={{minHeight: '400px'}}></div>
    )
}

export default WebTrafficChart