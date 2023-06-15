import React, { useEffect, useState } from 'react'
// import { Modal } from 'antd';
import { Area } from '@ant-design/charts';
import ReactDOM from 'react-dom';


import 'react-calendar/dist/Calendar.css';
import 'antd/dist/antd.css';
import { Select } from 'antd';



const { Option } = Select;

const DashBoardChartNgay = () => {
    const DemoArea = () => {
        const data = [
            {
                "timePeriod": "1",
                "value": 1000
            },
            {
                "timePeriod": "2",
                "value": 1080
            },
            {
                "timePeriod": "3",
                "value": 1170
            },
            {
                "timePeriod": "4",
                "value": 1260
            },
            {
                "timePeriod": "5",
                "value": 1340
            },
            {
                "timePeriod": "6",
                "value": 1410
            },
            {
                "timePeriod": "7",
                "value": 1520
            },
            {
                "timePeriod": "8",
                "value": 1670
            },
            {
                "timePeriod": "9",
                "value": 1840
            },
            {
                "timePeriod": "10",
                "value": 2070
            },
            {
                "timePeriod": "11",
                "value": 2390
            },
            {
                "timePeriod": "12",
                "value": 2710
            },
            {
                "timePeriod": "13",
                "value": 3030
            },
            {
                "timePeriod": "14",
                "value": 3330
            },
            {
                "timePeriod": "15",
                "value": 3500
            },
            {
                "timePeriod": "16",
                "value": 3370
            },
            {
                "timePeriod": "17",
                "value": 3150
            },
            {
                "timePeriod": "18",
                "value": 3010
            },
            {
                "timePeriod": "19",
                "value": 2800
            },
            {
                "timePeriod": "20",
                "value": 2800
            },
            {
                "timePeriod": "21",
                "value": 2840
            },
            {
                "timePeriod": "22",
                "value": 2750
            },
            {
                "timePeriod": "23",
                "value": 2640
            },
            {
                "timePeriod": "24",
                "value": 5550
            },
            {
                "timePeriod": "25",
                "value": 2460
            },
            {
                "timePeriod": "26",
                "value": 2450
            },
            {
                "timePeriod": "27",
                "value": 2570
            },
            {
                "timePeriod": "28",
                "value": 2680
            },
            {
                "timePeriod": "29",
                "value": 2800
            },
            {
                "timePeriod": "30",
                "value": 2890
            }

        ];
        const config = {
            data,

            xField: 'timePeriod',
            yField: 'value',

            xAxis: {
                range: [0, 1],
                tickCount: 6,
            },
            smooth: true,
            line: {
                color: '#5185F7',
                size: 2,
                height: 400,
            },


            areaStyle: () => {
                return {
                    fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff',
                    height: 300,
                };
            },
        };

        return <Area {...config} />;
    };
    return (
        <div style={{ position:'relative' }} className='layout_Dashboard_charts row'>
            <div className='layout_Dashboard_charts_Thongke col-6'>
                <div className='layout_Dashboard_charts_Thongke_text'>Bảng thống kê theo ngày </div>
                <div>Tháng 05/2023</div>
            </div>
            <div style={{ padding: '20px', height: '42px', display: 'block' }} className='col-6'>
            </div>
            <div style={{ height: '280px' }}>
                <DemoArea />
            </div>
        </div>
    )
}

export default DashBoardChartNgay