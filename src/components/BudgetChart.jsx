import React, { useEffect, useState} from 'react';
import * as echarts from 'echarts';

function BudgetChart() {
    useEffect(() => {
        echarts.init(document.querySelector('#budgetChart')).setOption({
            legend: {
                data: ['Allocated Budget', 'Actual Spending'],
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
                    name: 'Budget vs Spending',
                    type: 'radar',
                    data: [
                        {
                            value: [4200, 3000, 20000, 30000, 50000, 18000],
                            name: 'Allocated Budget',
                        },
                        {
                            value: [5000, 14000, 28000, 26000, 42000, 21000],
                            name: 'Actual Spending',
                        },
                    ],
                },
            ],
        })
    })

    return (
        <div className="echart" id="budgetChart" style={{ minHeight: '400px' }}></div>
    );
}

export default BudgetChart;