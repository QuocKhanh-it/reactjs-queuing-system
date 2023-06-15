import React, { useEffect, useState } from 'react'
import { AiOutlineRight } from "react-icons/ai";
import { Input, Space, DatePicker } from 'antd';
import { Table } from 'antd';
import { render } from '@testing-library/react';
import { Select } from 'antd';
import { BsFillPlusSquareFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { AiFillCaretRight } from "react-icons/ai";
import './Dichvu.css'
import moment from 'moment';
import Modal from '../../template/Modal/Modal';
import Vector from '../../../assets/images/Vector.png'
import { dichVuProps } from '../../../types/dichVu.types';
import { useDispatch, useSelector } from 'react-redux';
import { setAllDichVu } from './../../../state/action-creators/dichVuCreators';
import { State } from '../../../state';
import { DichVu } from '../../../state/actions/dichVuActions';

const { RangePicker } = DatePicker;


const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];



const { Option } = Select;
const { Search } = Input;
const onSearch = (value: any) => console.log(value);
const Dichvu = (props: dichVuProps) => {

  //table
  const data1: any = [

    {
      moTa: "Hoạt động 1",
      id: "KIO_01",
      tenDichVu: "kiosk",
      trangThaiHD: "Hoạt động",

    },
    {
      moTa: "Hoạt động 2",
      id: "KIO-02",
      tenDichVu: "kiosk2",
      trangThaiHD: "Ngưng hoạt động",
    }
    ,
    {
      moTa: "Hoạt động 2",
      id: "KIO-02",
      tenDichVu: "kiosk2",
      trangThaiHD: "Ngưng hoạt động",
    }
    ,
    {
      moTa: "Hoạt động 2",
      id: "KIO-02",
      tenDichVu: "kiosk2",
      trangThaiHD: "Ngưng hoạt động",
    }
    ,
    {
      moTa: "Hoạt động 2",
      id: "KIO-02",
      tenDichVu: "kiosk2",
      trangThaiHD: "Ngưng hoạt động",
    }

  ];
  const columns: any = [
    {
      title: 'Mã dịch vụ ',
      width: 103,
      dataIndex: 'id',
      key: 'id',

    },
    {
      title: 'Tên dịch vụ',
      width: 120,
      dataIndex: 'tenDichVu',
      key: 'tenDichVu',

    },
    {
      title: 'Mô tả',
      dataIndex: 'moTa',
      key: 'moTa',
      width: 138,
    },
    {
      title: 'Trạng thái hoạt động',
      dataIndex: 'trangThaiHD',
      key: 'trangThaiHD',
      width: 171,
      render: (trangThaiHD: any) => {
        if (trangThaiHD === 'Ngưng hoạt động') {
          return (
            <div >
              <img style={{ paddingRight: '5px' }} src="./image/chamdo.png" alt="" />
              Ngưng hoạt động
            </div>
          )
        }
        else if (trangThaiHD === 'Hoạt động') {
          return (
            <div >
              <img style={{ paddingRight: '5px' }} src="./image/chamluc.png" alt="" />
              Hoạt động
            </div>
          )
        }
      }
    },

    {
      title: '',
      dataIndex: 'chiTiet',
      key: 'chiTiet',
      width: 77,
      render: () => <u style={{ cursor: 'pointer', color: '#4277FF' }} >
      <Link  to='/dichvu/detaildichvu' style={{ textDecoration: 'none' }}>chi tiết</Link>
    </u>,
    },


    {
      title: '',
      dataIndex: 'capNhat',
      key: 'capNhat',
      width: 106,
      render: () =><u style={{ cursor: 'pointer', color: '#4277FF' }} >
      <Link  to='/dichvu/updatedichvu' style={{ textDecoration: 'none' }}>cập nhật</Link>
    </u>,
    },
  ];


  const [visible, setVisible] = useState(false);
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

  //lấy dữ liệu từ reducer 
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(setAllDichVu())
  },[])
  const {dichVuList} =useSelector((state: State) => state.dichVu);
  
  const data:DichVu[] = dichVuList
  // console.log('datadichvu',data);
  
  

  return (
    <div className='layout_ThietBi'>
      <div className='layout_Thietbi_Header row' >
        <div className='layout_Thietbi_Header_Text col-8'>
          <div>
            <strong style={{ color: '#7E7D88' }}>Dịch vụ  </strong>
            <AiOutlineRight style={{ color: '#7E7D88', fontSize: '14px', width: '25px' }} />
            <strong>{props.name.danhSach}  </strong>
          </div>
        </div>
        <div className=' layout_Thietbi_Header_HoTen col-4' style={{ background: '#F7F7F7' }}>
          <Modal />
        </div>
        <div className='clear_both'></div>
      </div>


      <div className="row layout_ThietBi_row">
        <div className='layout_ThietBi_row_text'> Quản lý dịch vụ</div>
      </div>
      <div className="row layout_ThietBi_row1">
        <div className="col-3">
          <div className='layout_ThietBi_row1_text'>Trạn thái hoạt động </div>
          <div>
            <Select defaultValue="Tất cả" style={{ width: '100%' }} onClick={() =>{setSelect(!select)}} suffixIcon={<i className={selectUp} style={{ fontSize:'25px' }}></i>}>
              <Option className='hoverOption' value="Tất cả">Tất cả</Option>
              <Option className='hoverOption' value="Hoạt động">Hoạt động</Option>
              <Option className='hoverOption' value="Ngưng hoạt động">Ngưng hoạt động</Option>
            </Select>

          </div>
        </div>
        <div className="col-3">
          <div className='layout_ThietBi_row1_text'>Chọn thời gian </div>
          <div className='' style={{ display:'block' , width:'338px' }}>

            <Space direction="vertical" >
              <DatePicker style={{ borderRadius: '8px' }} defaultValue={moment('10/10/2023', dateFormatList[0])} format={dateFormatList} />
            </Space>
            <AiFillCaretRight style={{ margin:'0px 7.5px' }} />

            <Space direction="vertical">
              <DatePicker style={{ borderRadius: '8px' }} defaultValue={moment('18/10/2023', dateFormatList[0])} format={dateFormatList} />
            </Space>
          </div>
        </div>
        <div className="col-2">
        </div>
        <div className="col-3">
          <div className='layout_ThietBi_row1_text'>Từ khóa  </div>
          <Search

            placeholder="Nhập từ khóa "
            allowClear
            onSearch={onSearch}
            style={{ width: '100%' }}
          />
        </div>
        <div className="col-1">
        </div>
      </div>
      <div className="row">
        <div style={{ padding: '20px 12px 10px 25px' }} className="col-11">
          <Table rowKey={`id`} columns={columns} dataSource={data} style={{ height: '400px' }} />
        </div>
        <div className="col-1 " style={{ padding: '23px 0px' }}>
          <div className='layout_ThietBi_ThemDichVu'>
            <Link to={'/dichvu/themdichvu'} className='layout_ThietBi_ThemDichVu_link' >
              <BsFillPlusSquareFill className='layout_ThietBi_ThemDichVu_icon' />

            </Link>
            <div>Thêm dịch vụ</div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Dichvu