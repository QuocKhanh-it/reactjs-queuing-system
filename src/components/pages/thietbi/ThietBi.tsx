import { Input, Popover, Select, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { AiOutlineRight } from "react-icons/ai";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { State } from '../../../state';
import { setAllThietBi } from '../../../state/action-creators/thietBiCreators';
import { ThietBi } from '../../../state/actions/thietBiActions';
import { DashboardProps } from '../../../types/thietBi.types';
import Modal from '../../template/Modal/Modal';
import './ThietBi.css';

const { Option } = Select;
const { Search } = Input;
const onSearch = (value: any) => console.log(value);
const ThietBiList = (props: DashboardProps) => {

  //lấy dữ liêu từ firebase lên 
  const dispatch = useDispatch();
  // const { setAllThietBi } = bindActionCreators(actioCreator, dispatch)
  useEffect(() => {
    dispatch(setAllThietBi()) 
  }, [])
  const { thietBiList } = useSelector((state: State) => state.thietBi);
  const data:ThietBi[] = thietBiList
  const columns: any = [
    {
      title: 'Mã thiết bị ',
      width: 103,
      dataIndex: 'maTB',
      key: 'maTB',

    },
    {
      title: 'Tên thiết bị',
      width: 120,
      dataIndex: 'tenTB',
      key: 'tenTB',

    },
    {
      title: 'Địa chỉ IP',
      dataIndex: 'address',
      key: 'address',
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
      title: 'Trạng thái kết nối',
      dataIndex: 'trangThaiKN',
      key: 'trangThaiKN',
      width: 145,
      render: (trangThaiKN: any) => {
        if (trangThaiKN === 'Mất kết nối') {
          return (
            <div >
              <img style={{ paddingRight: '5px' }} src="./image/chamdo.png" alt="" />
              Mất kết nối
            </div>
          )
        }
        else if (trangThaiKN === 'Kết nối') {
          return (
            <div >
              <img style={{ paddingRight: '5px' }} src="./image/chamluc.png" alt="" />
              Kết nối
            </div>
          )
        }
      }
    },
    {
      title: 'Dịch vụ sử dụng',
      dataIndex: 'dichVu',
      key: 'dichVu',
      width: 250,
      
      render: (dataIndex: any) => <div>
        <div className='layout_table_dataIndex'>{dataIndex}</div>

        <Popover content={dataIndex} trigger="click" placement="topLeft" >
          <u style={{ cursor: 'pointer', color: '#4277FF' }}  >xem thêm</u>
        </Popover>
      </div>
    },
    {
      title: '',
      dataIndex: 'maTB',
      key: '',
      width: 77,
      render: (dataIndex:any) => <u style={{ cursor: 'pointer', color: '#4277FF' }} >
        <Link to={`/thietbi/detailthietbi/${dataIndex}`} style={{ textDecoration: 'none' }}>chi tiết</Link>
      </u>,
    },
    {
      title: '',
      dataIndex: 'capNhat',
      key: 'capNhat',

      width: 106,
      render: () => <u style={{ cursor: 'pointer', color: '#4277FF' }} >
         <Link to='/thietbi/capnhatthietbi' style={{ textDecoration: 'none' }}>cập nhật</Link>  
      </u>,
    },
  ];

  //drop select 
  const [statusNotify,setStatusNotify] = useState<boolean>(false)
  const [select,setSelect] = useState<boolean>(false)
  const [up, setUp] = useState<string>('fa fa-caret-down')
  const [selectUp,setSelectUp] = useState<string>('fa fa-caret-down')

  useEffect(() =>{
    if(select){
      setSelectUp('fa fa-caret-up')
    }else{
      setSelectUp('fa fa-caret-down')
    }
  },[select])
  
  
  useEffect(() =>{
    if(statusNotify){
      setUp('fa fa-caret-up')
      // console.log(up);
      
    }
    else{
      setUp('fa fa-caret-down')
      // console.log(up);
    }
  },[statusNotify])
  return (
    <div className='layout_ThietBi'>
      <div className='layout_Thietbi_Header row' >
        <div className='layout_Thietbi_Header_Text col-8'>
          <div>
            <strong style={{ color: '#7E7D88' }}>Thiết bị </strong>
            <AiOutlineRight style={{ color: '#7E7D88', fontSize: '14px', width: '25px' }} />
            <strong>{props.name.thietBi} </strong>
          </div>
        </div>
        <div className=' layout_Thietbi_Header_HoTen col-4' style={{ background: '#F7F7F7' }}>
          <Modal />
        </div>
        <div className='clear_both'></div>
      </div>


      <div className="row layout_ThietBi_row">
        <div className='layout_ThietBi_row_text'> {props.name.thietBi} </div>
      </div>
      <div className="row layout_ThietBi_row1">
        <div className="col-3">
          <div className='layout_ThietBi_row1_text'>Trạn thái hoạt động </div>
          <div>
            <Select  defaultValue="Tất cả" style={{ width: '100%' }} suffixIcon={<i className={up} style={{ fontSize:'25px' }}></i>} onClick={() => {
                        setStatusNotify(!statusNotify)
                    }} >
              <Option className='hoverOption' value="Tất cả">Tất cả</Option>
              <Option className='hoverOption' value="Hoạt động">Hoạt động</Option>
              <Option className='hoverOption' value="Ngưng hoạt động">Ngưng hoạt động</Option>
            </Select>

          </div>
        </div>
        <div className="col-3">
          <div className='layout_ThietBi_row1_text'>Trạng thái kết nối </div>
          <div>
            <Select defaultValue="Tất cả" style={{ width: '100%' }} suffixIcon={<i className={selectUp} style={{ fontSize:'25px' }}></i>} onClick={() => {
                        setSelect(!select)
                    }} >
              <Option className='hoverOption' value="Tất cả">Tất cả</Option>
              <Option className='hoverOption' value="Kết nối">Kết nối</Option>
              <Option className='hoverOption' value="Mất kết nối">Mất kết nối</Option>
            </Select>
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
          <Table rowKey={`maTB`} pagination={{ pageSize: 8 }} columns={columns} dataSource={data} style={{ height: '400px' }} />
        </div>
        <div className="col-1 " style={{ padding: '23px 0px' }}>
          <div className='layout_ThietBi_ThemDichVu'>
            <Link to={'/thietbi/themthietbi'} className='layout_ThietBi_ThemDichVu_link' >
              <BsFillPlusSquareFill className='layout_ThietBi_ThemDichVu_icon' />

            </Link>
            <div>Thêm thiết bị</div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ThietBiList 