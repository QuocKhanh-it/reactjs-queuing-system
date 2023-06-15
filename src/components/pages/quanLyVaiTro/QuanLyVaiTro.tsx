import React, { useEffect, useState } from 'react'
import { AiOutlineRight } from "react-icons/ai";
import { Input, Space, DatePicker } from 'antd';
import { Table } from 'antd';
import { render } from '@testing-library/react';
import { Select } from 'antd';
import { BsFillPlusSquareFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { AiFillCaretRight } from "react-icons/ai";
import moment from 'moment';
import Modal from '../../template/Modal/Modal';
import './QuanLyVaiTro.css';


const { RangePicker } = DatePicker;


const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];



const { Option } = Select;
const { Search } = Input;
const onSearch = (value: any) => console.log(value);

const QuanLyVaiTro = () => {
    //table
    const data1: any = [

        {

            tenVaiTro: 'Kế toán',
            soNguoiDung: '6',
            moTa: 'Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu'

        },
        {
            tenVaiTro: 'Bác sĩ',
            soNguoiDung: '5',
            moTa: 'Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu'

        },
        {
            tenVaiTro: 'Lễ tân',
            soNguoiDung: '10',
            moTa: 'Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu'

        },
        {
            tenVaiTro: 'Lễ tân',
            soNguoiDung: '10',
            moTa: 'Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu'

        },
        {
            tenVaiTro: 'Lễ tân',
            soNguoiDung: '10',
            moTa: 'Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu'

        },


    ];
    const columns: any = [
        {
            title: 'Tên vai trò ',
            width: 224,
            dataIndex: 'tenVaiTro',
            key: 'tenVaiTro',

        },
        {
            title: 'Số người dùng',
            width: 224,
            dataIndex: 'soNguoiDung',
            key: 'soNguoiDung',

        },
        {
            title: 'Mô tả',
            dataIndex: 'moTa',
            key: 'moTa',
            width: 537,
        },

        {
            title: '',
            dataIndex: 'chiTiet',
            key: 'chiTiet',
            width: 125,
            render: () => <u style={{ cursor: 'pointer', color: '#4277FF' }} >
            <Link  to='/quanlyvaitro/updatevaitro' style={{ textDecoration: 'none' }}>cập nhật</Link>
          </u>,
        },
    ];
    return (
        <div className='layout_ThietBi'>
            <div className='layout_Thietbi_Header row' >
                <div className='layout_Thietbi_Header_Text col-8'>
                    <div>
                        <strong style={{ color: '#7E7D88' }}>Cài đặt hệ thống  </strong>
                        <AiOutlineRight style={{ color: '#7E7D88', fontSize: '14px', width: '25px' }} />
                        <strong>Quản lý vai trò </strong>
                    </div>
                </div>
                <div className=' layout_Thietbi_Header_HoTen col-4' style={{ background: '#F7F7F7' }}>
                    <Modal />
                </div>
                <div className='clear_both'></div>
            </div>

            <div className="layout_QuanLyVaiTro_text" >
                <div  style={{float:'left',width:'861px'}}>Danh sách vai trò</div>
                <div style={{ width:'240px', float:'left' }} >
                    <div className='layout_QuanLyVaiTro_text_tuKhoa'>Từ khóa  </div>
                    <Search
                        
                        placeholder="Nhập từ khóa "
                        allowClear
                        onSearch={onSearch}
                        style={{ width: '240px', borderRight:'0px' }}
                    />
                </div>
            </div>
            <div style={{ clear: 'both' }}></div>
            <div className="row">
                <div style={{ padding: '20px 12px 10px 25px' }} className="col-11">
                    <Table columns={columns} dataSource={data1} style={{ height: '400px' }} />
                </div>
                <div className="col-1 " style={{ padding: '23px 0px' }}>
                    <div className='layout_ThietBi_ThemDichVu'>
                        <Link to={'/quanlyvaitro/themvaitro'} className='layout_ThietBi_ThemDichVu_link' >
                            <BsFillPlusSquareFill className='layout_ThietBi_ThemDichVu_icon' />

                        </Link>
                        <div>Thêm vai trò</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default QuanLyVaiTro