import React, { useEffect, useState } from 'react'
// import { Modal } from 'antd';
import { Area } from '@ant-design/charts';
import ReactDOM from 'react-dom';


import 'react-calendar/dist/Calendar.css';
import 'antd/dist/antd.css';
import { Select } from 'antd';



const { Option } = Select;

const DashBoardChartThang = () => {
  const DemoArea = () => {
    const data = [
      {
        "timePeriod": "1",
        "value": 2350
      },
      {
        "timePeriod": "2",
        "value": 5080
      },
      {
        "timePeriod": "3",
        "value": 3170
      },
      {
        "timePeriod": "5",
        "value": 4260
      },
      {
        "timePeriod": "6",
        "value": 2350
      },
      {
        "timePeriod": "7",
        "value": 5080
      },
      {
        "timePeriod": "8",
        "value": 3170
      },
      {
        "timePeriod": "9",
        "value": 4260
      },
      {
        "timePeriod": "10",
        "value": 2350
      },
      {
        "timePeriod": "11",
        "value": 5080
      },
      {
        "timePeriod": "12",
        "value": 3170
      },
     


    ];
    const config = {
      data,

      xField: 'timePeriod',
      yField: 'value',

      xAxis: {
        range: [0, 1],
        tickCount: 12,
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
    <div style={{ position: 'relative' }} className='layout_Dashboard_charts row'>
      <div className='layout_Dashboard_charts_Thongke col-6'>
        <div className='layout_Dashboard_charts_Thongke_text'>Bảng thống kê theo tháng </div>
        <div>Năm 2023</div>
      </div>
      <div style={{ padding: '20px', height: '42px', display: 'block' }} className='col-6'>
      </div>
      <div style={{ height: '280px' }}>
        <DemoArea />
      </div>
    </div>
  )
}

export default DashBoardChartThang