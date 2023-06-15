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
import './BaoCao.css';
import xanhduong from '../../../assets/images/xanhduong.png';
import maudo from '../../../assets/images/do.png';
import tim from '../../../assets/images/tim.png';
import { BsFillFileEarmarkArrowDownFill } from "react-icons/bs";


const { RangePicker } = DatePicker;


const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];



const { Option } = Select;
const { Search } = Input;
const onSearch = (value: any) => console.log(value);


const BaoCao = () => {

  //table
  const data1: any = [

    {
      id: '1212',
      tenDichVu: 'khám tim mạch',
      thoiGianCap: '14:35 - 07/11/2023',
      hanSuDung: '14:35 - 07/12/2023',
      tinhTrang: 'Đang chờ',
      nguonCap: 'Kiosk'

    },
    {
      id: '1213',
      tenDichVu: 'khám răng hàm mặt',
      thoiGianCap: '14:35 - 07/11/2023',
      hanSuDung: '14:35 - 07/12/2023',
      tinhTrang: 'Đã sử dụng',
      nguonCap: 'Kiosk'

    },
    {
      id: '1214',
      tenDichVu: 'khám sản - phụ khoa',
      thoiGianCap: '14:35 - 07/11/2023',
      hanSuDung: '14:35 - 07/12/2023',
      tinhTrang: 'Bỏ qua',
      nguonCap: 'Kiosk'

    },


  ];
  const columns: any = [
    {
      title: 'Số thứ tự ',
      width: 226,
      dataIndex: 'id',
      key: 'id',
      sorter: {
        compare: (a:any, b:any) => a.id - b.id,
        
      },
    },
    {
      title: 'Tên dịch vụ',
      dataIndex: 'tenDichVu',
      key: 'tenDichVu',
      width: 232,
      sorter: {
        compare: (a:any, b:any) => a.tenDichVu - b.tenDichVu,
        
      },
    },
    {
      title: 'Thời gian cấp',
      dataIndex: 'thoiGianCap',
      key: 'thoiGianCap',
      width: 238,
      sorter: {
        compare: (a:any, b:any) => a.thoiGianCap - b.thoiGianCap,
        
      },
    },
    
    {
      title: 'Tình trạng ',
      dataIndex: 'tinhTrang',
      key: 'tinhTrang',
      width: 216,
      sorter: {
        compare: (a:any, b:any) => a.tinhTrang - b.tinhTrang,
        
      },
      render: (tinhTrang: any) => {
        if (tinhTrang === 'Đang chờ') {
          return (
            <div >
              <img style={{ paddingRight: '5px' }} src={xanhduong} alt="" />
              Đang chờ
            </div>
          )
        }
        else if (tinhTrang === 'Đã sử dụng') {
          return (
            <div >
              <img style={{ paddingRight: '5px' }} src={tim} alt="" />
              Đã sử dụng
            </div>
          )
        }
        else if (tinhTrang === 'Bỏ qua') {
          return (
            <div >
              <img style={{ paddingRight: '5px' }} src={maudo} alt="" />
              Đã sử dụng
            </div>
          )
        }
      }
    },

    {
      title: 'Nguồn cấp ',
      dataIndex: 'nguonCap',
      key: 'nguonCap',
      width: 196,
      sorter: {
        compare: (a:any, b:any) => a.nguonCap - b.nguonCap,
        
      },
    },
  ];


  return (
    <div className='layout_ThietBi'>
      <div className='layout_Thietbi_Header row' >
        <div className='layout_Thietbi_Header_Text col-8'>
          <div>
            <strong style={{ color: '#7E7D88' }}>Báo cáo  </strong>
            <AiOutlineRight style={{ color: '#7E7D88', fontSize: '14px', width: '25px' }} />
            <strong>Lập báo cáo </strong>
          </div>
        </div>
        <div className=' layout_Thietbi_Header_HoTen col-4' style={{ background: '#F7F7F7' }}>
          <Modal />
        </div>
        <div className='clear_both'></div>
      </div>
      <div className="row layout_ThietBi_row1">
        <div style={{ width: '340px' }} className="">
          <div className='layout_ThietBi_row1_text'>Chọn thời gian </div>
          <div className='row'>
            <div className="col-5" style={{ paddingRight: '0px' }}>
              <Space direction="vertical">
                <DatePicker style={{ borderRadius:'8px' }} defaultValue={moment('10/10/2023', dateFormatList[0])} format={dateFormatList} />
              </Space>
            </div>
            <div className="col-2 text-center" style={{ margin:'auto' }}><AiFillCaretRight /></div>
            <div className="col-5" style={{ paddingLeft: '0px' }}>
              <Space direction="vertical">
                <DatePicker style={{ borderRadius:'8px' }} defaultValue={moment('18/10/2023', dateFormatList[0])} format={dateFormatList} />
              </Space></div>
          </div>
        </div>
      </div>
      <div style={{ clear: 'both' }}></div>
      <div className="row">
        <div style={{ padding: '20px 12px 10px 25px' }} className="col-11">
          <Table pagination={{ pageSize:8 }} columns={columns} dataSource={data1} style={{ height: '400px' }} />
        </div>
        <div className="col-1 " style={{ padding: '23px 0px' }}>
          <div className='layout_ThietBi_ThemDichVu'>
            <div style={{ marginLeft:'0px' }} className='layout_ThietBi_ThemDichVu_link' >
              <BsFillFileEarmarkArrowDownFill className='layout_ThietBi_ThemDichVu_icon' />

            </div>
            <div>Tải về</div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default BaoCao