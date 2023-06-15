import React, { useEffect, useState } from 'react'
// import { Modal } from 'antd';
import { Area } from '@ant-design/charts';
import ReactDOM from 'react-dom';


import 'react-calendar/dist/Calendar.css';
import 'antd/dist/antd.css';
import { Select } from 'antd';



const { Option } = Select;


const DashBoardChartTuan = () => {
  const DemoArea = () => {
    const data = [
      {
        "timePeriod": "Tuần 1",
        "value": 2350
      },
      {
        "timePeriod": "Tuần 2",
        "value": 5080
      },
      {
        "timePeriod": "Tuần 3",
        "value": 3170
      },
      {
        "timePeriod": "Tuần 4",
        "value": 4260
      },


    ];
    const config = {
      data,

      xField: 'timePeriod',
      yField: 'value',

      xAxis: {
        range: [0, 1],
        tickCount: 4,
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
        <div className='layout_Dashboard_charts_Thongke_text'>Bảng thống kê theo tuần </div>
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

export default DashBoardChartTuan