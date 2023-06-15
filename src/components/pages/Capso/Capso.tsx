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
import './Capso.css';
import xanhduong from '../../../assets/images/xanhduong.png';
import maudo from '../../../assets/images/do.png';
import tim from '../../../assets/images/tim.png';
import Vector from '../../../assets/images/Vector.png'
import { capSoProps } from '../../../types/capSo.types';
import { useDispatch, useSelector } from 'react-redux';
import { setALLCapSo } from '../../../state/action-creators/capSoCreators';
import { State } from '../../../state';
import { CapSo } from '../../../state/actions/capSoActions';

const { RangePicker } = DatePicker;


const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];



const { Option } = Select;
const { Search } = Input;
const onSearch = (value: any) => console.log(value);

const Capso = (props: capSoProps) => {
  const columns: any = [
    {
      title: 'STT ',
      width: 93,
      dataIndex: 'id',
      key: 'id',

    },
    {
      title: 'Tên khách hàng',
      width: 162,
      dataIndex: 'tenKhachHang',
      key: 'tenKhachHang',

    },
    {
      title: 'Tên dịch vụ',
      dataIndex: 'tenDichVu',
      key: 'tenDichVu',
      width: 171,
    },
    {
      title: 'Thời gian cấp',
      dataIndex: 'thoiGianCap',
      key: 'thoiGianCap',
      width: 161,
    },
    {
      title: 'Hạn sử dụng ',
      dataIndex: 'hanSuDung',
      key: 'hanSuDung',
      width: 174,
    },
    {
      title: 'Trạng thái ',
      dataIndex: 'trangThai',
      key: 'trangThai',
      width: 147,
      render: (trangThai: any) => {
        if (trangThai === 'Đang chờ') {
          return (
            <div >
              <img style={{ paddingRight: '5px' }} src={xanhduong} alt="" />
              Đang chờ
            </div>
          )
        }
        else if (trangThai === 'Đã sử dụng') {
          return (
            <div >
              <img style={{ paddingRight: '5px' }} src={tim} alt="" />
              Đã sử dụng
            </div>
          )
        }
        else if (trangThai === 'Bỏ qua') {
          return (
            <div >
              <img style={{ paddingRight: '5px' }} src={maudo} alt="" />
              Bỏ qua
            </div>
          )
        }
      }
    },

    {
      title: 'Nguồn cấp ',
      dataIndex: 'nguonCap',
      key: 'nguonCap',
      width: 120,

    },


    {
      title: '',
      dataIndex: 'chiTiet',
      key: 'chiTiet',
      width: 106,
      render: () => <u style={{ cursor: 'pointer', color: '#4277FF' }} >
      <Link to='/capso/detailcapso' style={{ textDecoration: 'none' }}>chi tiết</Link>
    </u>,
    },
  ];

  //select dropdown 
  const [select,setSelect] = useState<boolean>(false)
  const [selectUp,setSelectUp] = useState<string>('fa fa-caret-down')

  useEffect(() =>{
    if(select){
      setSelectUp('fa fa-caret-up')
    }
    else{
      setSelectUp('fa fa-caret-down')
    }
  },[select])

  //select dropdown 1
  const [select1,setSelect1] = useState<boolean>(false)
  const [selectUp1,setSelectUp1] = useState<string>('fa fa-caret-down')

  useEffect(() =>{
    if(select1){
      setSelectUp1('fa fa-caret-up')
    }
    else{
      setSelectUp1('fa fa-caret-down')
    }
  },[select1])

  //select dropdown 2
  const [select2,setSelect2] = useState<boolean>(false)
  const [selectUp2,setSelectUp2] = useState<string>('fa fa-caret-down')

  useEffect(() =>{
    if(select2){
      setSelectUp2('fa fa-caret-up')
    }
    else{
      setSelectUp2('fa fa-caret-down')
    }
  },[select2])

  //lấy dữ liệu từ firebase 
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(setALLCapSo())
  },[])
  const {capSoList} = useSelector((state: State) => state.capSo)
  const data:CapSo[] = capSoList
  // console.log('date ' , data);
  

  return (
    <div className='layout_ThietBi'>
      <div className='layout_Thietbi_Header row' >
        <div className='layout_Thietbi_Header_Text col-8'>
          <div>
            <strong style={{ color: '#7E7D88' }}>Cấp số  </strong>
            <AiOutlineRight style={{ color: '#7E7D88', fontSize: '14px', width: '25px' }} />
            <strong>{props.name.danhSach} </strong>
          </div>
        </div>
        <div className=' layout_Thietbi_Header_HoTen col-4' style={{ background: '#F7F7F7' }}>
          <Modal />
        </div>
        <div className='clear_both'></div>
      </div>


      <div className="row layout_ThietBi_row">
        <div className='layout_ThietBi_row_text'> Quản lý cấp số</div>
      </div>
      <div className="row layout_ThietBi_row1">
        <div className="layout_Capso_text">
          <div className='layout_ThietBi_row1_text'>Tên dịch vụ </div>
          <div>
            <Select defaultValue="Tất cả" style={{ width: '100%' }} onClick={() =>{setSelect(!select)}} suffixIcon={<i className={selectUp} style={{ fontSize:'25px' }}></i>} >
              <Option className='hoverOption' value="Tất cả">Tất cả</Option>
              <Option className='hoverOption' value="Khám sản - Phụ khoa">Khám sản - Phụ khoa</Option>
              <Option className='hoverOption' value="Khám răng hàm mặt">Khám răng hàm mặt</Option>
              <Option className='hoverOption' value="khám tai mũi họng">khám tai mũi họng </Option>
            </Select>

          </div>
        </div>
        <div className="layout_Capso_text">
          <div className='layout_ThietBi_row1_text'>Tình trạng</div>
          <div>
            <Select defaultValue="Tất cả" style={{ width: '100%' }} onClick={() =>{setSelect1(!select1)}} suffixIcon={<i className={selectUp1} style={{ fontSize:'25px' }}></i>} >
              <Option className='hoverOption' value="Tất cả">Tất cả</Option>
              <Option className='hoverOption' value="Đang chờ">Đang chờ</Option>
              <Option className='hoverOption' value="Đã sử dụng">Đã sử dụng</Option>
              <Option className='hoverOption' value="Bỏ qua">Bỏ qua </Option>
            </Select>

          </div>
        </div>
        <div className="layout_Capso_text">
          <div className='layout_ThietBi_row1_text'>Nguồn cấp</div>
          <div>
            <Select defaultValue="Tất cả" style={{ width: '100%' }} onClick={() =>{setSelect2(!select2)}} suffixIcon={<i className={selectUp2} style={{ fontSize:'25px' }}></i>} >
              <Option className='hoverOption' value="Tất cả">Tất cả</Option>
              <Option className='hoverOption' value="Đang chờ">Kiosk</Option>
              <Option className='hoverOption' value="Đã sử dụng">Hệ thống</Option>

            </Select>

          </div>
        </div>
        <div style={{ width: '340px' }} className="">
          <div className='layout_ThietBi_row1_text'>Chọn thời gian </div>
          <div style={{ display: 'block', width: '338px' }}>

            <Space direction="vertical">
              <DatePicker style={{ borderRadius: '8px' }} defaultValue={moment('10/10/2023', dateFormatList[0])} format={dateFormatList} />
            </Space>

            <AiFillCaretRight style={{ margin: '0px 7.5px' }} />

            <Space direction="vertical">
              <DatePicker style={{ borderRadius: '8px' }} defaultValue={moment('18/10/2023', dateFormatList[0])} format={dateFormatList} />
            </Space></div>

        </div>

        <div style={{ width: '281px', float: 'left',  }} >
          <div className='layout_ThietBi_row1_text'>Từ khóa  </div>
          <Search

            placeholder="Nhập từ khóa "
            allowClear
            onSearch={onSearch}
            style={{ width: '93%' }}
          />
        </div>

      </div>
      <div style={{ clear: 'both' }}></div>
      <div className="row">
        <div style={{ padding: '20px 12px 10px 25px' }} className="col-11">
          <Table rowKey={`id`} pagination={{ pageSize: 8 }} columns={columns} dataSource={data} style={{ height: '400px' }} />
        </div>
        <div className="col-1 " style={{ padding: '23px 0px' }}>
          <div className='layout_ThietBi_ThemDichVu'>
            <Link to={'/capso/capsomoi'} className='layout_ThietBi_ThemDichVu_link' >
              <BsFillPlusSquareFill className='layout_ThietBi_ThemDichVu_icon' />

            </Link>
            <div>Cấp số mới</div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Capso