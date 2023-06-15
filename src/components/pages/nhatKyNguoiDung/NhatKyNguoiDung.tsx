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
import './NhatKyNguoiDung.css'


const { RangePicker } = DatePicker;


const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];



const { Option } = Select;
const { Search } = Input;
const onSearch = (value: any) => console.log(value);




//table
const data1: any = [

  {
    tenDangNhap: 'tuyetnguyen@12',
    thoiGianHD: '01/02/2023 15:12:17',
    IP: '192.168.3.1',
    thaoTac: 'Cập nhật thông tin dịch vụ DV_01',
  },
  {
    tenDangNhap: 'tuyet@12',
    thoiGianHD: '01/02/2023 15:12:17',
    IP: '192.168.3.1',
    thaoTac: 'Cập nhật thông tin dịch vụ DV_01',
  },
  {
    tenDangNhap: 'ngan@12',
    thoiGianHD: '01/02/2023 15:12:17',
    IP: '192.168.3.1',
    thaoTac: 'Cập nhật thông tin dịch vụ DV_01',
  },
  {
    tenDangNhap: 'hong@12',
    thoiGianHD: '01/02/2023 15:12:17',
    IP: '192.168.3.1',
    thaoTac: 'Cập nhật thông tin dịch vụ DV_01',
  },

];
const columns: any = [
  {
    title: 'Tên đăng nhập',
    width: 240,
    dataIndex: 'tenDangNhap',
    key: 'tenDangNhap',

  },
  {
    title: 'Thời gian tác động',
    dataIndex: 'thoiGianHD',
    key: 'thoiGianHD',
    width: 216,

  },
  {
    title: 'IP thực hiện',
    dataIndex: 'IP',
    key: 'IP',
    width: 216,

  },

  {
    title: 'Thao tác thực hiện ',
    dataIndex: 'thaoTac',
    key: 'thaoTac',
    width: 386,

  },
];

const NhatKyNguoiDung = () => {
  return (
    <div className='layout_ThietBi'>
      <div className='layout_Thietbi_Header row' >
        <div className='layout_Thietbi_Header_Text col-8'>
          <div>
            <strong style={{ color: '#7E7D88' }}>Cài đặt hệ thống  </strong>
            <AiOutlineRight style={{ color: '#7E7D88', fontSize: '14px', width: '25px' }} />
            <strong>Nhật ký hoạt động </strong>
          </div>
        </div>
        <div className=' layout_Thietbi_Header_HoTen col-4' style={{ background: '#F7F7F7' }}>
          <Modal />
        </div>
        <div className='clear_both'></div>
      </div>
      <div className="" style={{ display:'block', width:'100%' }}>
        <div style={{ float:'left',width:'71%', marginLeft:'14px' }}>
          <div className='layout_NhatKyNguoiDung_text'>Chọn thời gian</div>
          <div >
            <Space  direction="vertical">
              <DatePicker style={{ borderRadius:'8px' }} defaultValue={moment('10/10/2023', dateFormatList[0])} format={dateFormatList} />
            </Space>
            <AiFillCaretRight style={{ margin:'0px 7.5px' }} />
            <Space direction="vertical">
              <DatePicker style={{ borderRadius:'8px' }} defaultValue={moment('18/10/2023', dateFormatList[0])} format={dateFormatList} />
            </Space>
          </div>
        </div>
        <div style={{ float:'left' }}>
          <div className='layout_NhatKyNguoiDung_text'>Chọn thời gian</div>
          <div>
            <Search

              placeholder="Nhập từ khóa "
              allowClear
              onSearch={onSearch}
              style={{ width: '240px' }}
            />

          </div>
        </div>
        <div className='clear_both'></div>
        
      </div>
      <div style={{ clear: 'both' }}></div>
      <div className="row">
        <div style={{ padding: '20px 12px 10px 25px' }} className="col-11">
          <Table pagination={{ pageSize: 8 }} columns={columns} dataSource={data1} style={{ height: '400px' }} />
        </div>
        <div className="col-1 " style={{ padding: '23px 0px' }}>


        </div>
      </div>
    </div>
  )
}

export default NhatKyNguoiDung
