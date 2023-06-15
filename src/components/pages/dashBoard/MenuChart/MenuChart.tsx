import React from 'react'
import { Select } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import Vector from '../../../../assets/images/Vector.png';

const invoices = [
    {
        id: '/',
        name: 'ngày'
    },
    {
        id: '/1',
        name: 'tuần'
    },
    {
        id: '/2',
        name: 'tháng'
    }

]

const { Option } = Select;
export const MenuChart = () => {
    return (
        <div style={{ position:'absolute', zIndex:'99' ,right:'502px' , top:'300px'}}>
            <div className='layout_Dashboard_charts_Thongke_text1'>
                Xem theo
            </div>
            <Select  defaultValue="Ngày" style={{ width: 100, marginLeft: '10px' }} >
                {
                    invoices.map((item, index) => (
                        <Option  className='hoverOption' value={item.name} key={index}>
                            <Link style={{ textDecoration:'none', color:'#7E7D88' }} to={`${item.id}`} >{item.name}</Link>
                        </Option>
                    ))
                }
                
            </Select>
            
        </div>
    )
}
