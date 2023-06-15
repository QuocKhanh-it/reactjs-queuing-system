import React, { Fragment, useEffect, useState } from 'react'
import { AiOutlineRight } from "react-icons/ai";
import { Input, Space, DatePicker, InputNumber } from 'antd';
import { Table } from 'antd';
import { render } from '@testing-library/react';
import { Select } from 'antd';
import { BsFillPencilFill, BsFillPlusSquareFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { AiFillCaretRight } from "react-icons/ai";
import './DetailDichVu.css'
import moment from 'moment';
import Modal from '../../../template/Modal/Modal';
import Vector from '../../../../assets/images/Vector.png'
import xanhla from '../../../../assets/images/xanhla.png'
import xanhduong from '../../../../assets/images/xanhduong.png'
import tim from '../../../../assets/images/tim.png'
import { RiArrowGoBackFill } from "react-icons/ri";
import { dichVuProps } from '../../../../types/dichVu.types';

const { RangePicker } = DatePicker;


const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
const { Option } = Select;
const { Search } = Input;
const onSearch = (value: any) => console.log(value);

//table
const data1: any = [
    {
        STT: "2000111",
        trangThai: "Đã hoàn thành",
    },
    {
        STT: "2000112",
        trangThai: "Đang thực hiện",
    },
    {
        STT: "2000113",
        trangThai: "Vắng",
    },
    {
        STT: "2000111",
        trangThai: "Đã hoàn thành",
    },
    {
        STT: "2000112",
        trangThai: "Đang thực hiện",
    },
    {
        STT: "2000113",
        trangThai: "Vắng",
    },
    {
        STT: "2000111",
        trangThai: "Đã hoàn thành",
    },
    {
        STT: "2000112",
        trangThai: "Đang thực hiện",
    },
    {
        STT: "2000113",
        trangThai: "Vắng",
    },
];
const columns: any = [

    {
        title: 'Số thứ tự ',
        dataIndex: 'STT',
        key: 'STT',
        width: 138,
    },
    {
        title: 'Trạng thái',
        dataIndex: 'trangThai',
        key: 'trangThai',
        width: 171,
        render: (trangThai: any) => {
            if (trangThai === 'Đã hoàn thành') {
                return (
                    <div >
                        <img style={{ paddingRight: '5px' }} src={xanhla} alt="" />
                        Đã hoàn thành
                    </div>
                )
            }
            else if (trangThai === 'Đang thực hiện') {
                return (
                    <div >
                        <img style={{ paddingRight: '5px' }} src={xanhduong} alt="" />
                        Đang thực hiện
                    </div>
                )
            }
            else if (trangThai === 'Vắng') {
                return (
                    <div >
                        <img style={{ paddingRight: '5px' }} src={tim} alt="" />
                        Vắng
                    </div>
                )
            }
        }
    },
];

const DetailDichVu = (props:dichVuProps) => {
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
    return (
        <div className='layout_ThietBi'>
            <div className='layout_Thietbi_Header row' >
                <div className='layout_Thietbi_Header_Text col-8'>
                    <div>
                        <strong style={{ color: '#7E7D88' }}>Dịch vụ </strong>
                        <AiOutlineRight style={{ color: '#7E7D88', fontSize: '14px', width: '25px' }} />
                        <Link to='/dichvu' style={{ textDecoration: 'none' }} ><strong style={{ color: '#7E7D88' }}>{props.name.danhSach} </strong></Link>
                        <AiOutlineRight style={{ color: '#7E7D88', fontSize: '14px', width: '25px' }} />
                        <strong>{props.name.chiTiet} </strong>
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
            <div style={{ display: 'block', marginTop: '32px' }}>
                <div className='layout_DetailDichVu_left'>
                    <div className='layout_DetailDichVu_left_TT'>Thông tin dịch vụ </div>
                    <div className='layout_DetailDichVu_left_text'>
                        Mã dịch vụ : <strong style={{ marginLeft: '27px' }}>201</strong>
                    </div>
                    <div className='layout_DetailDichVu_left_text'>
                        Tên dịch vụ :<strong style={{ marginLeft: '27px' }}>khám tim mạch</strong>
                    </div>
                    <div className='layout_DetailDichVu_left_text'>Mô tả : <strong style={{ marginLeft: '63px' }}>chuyên các bệnh lý về tim</strong></div>
                    <div className='layout_DetailDichVu_left_TT'>
                        Quy tắt cấp số
                    </div>
                    <div className='layout_DetailDichVu_left_div' >
                        <div className='layout_DetailDichVu_left_text1' >Tăng tự động :</div>
                        <div className='layout_DetailDichVu_left_text1_InputNumber'>
                            <InputNumber defaultValue={1} style={{ width: '61px' }} />
                            <strong style={{ marginLeft: '10px', marginRight: '10px' }}>đến</strong>
                            <InputNumber defaultValue={9999} style={{ width: '61px' }} />
                        </div>
                    </div>
                    <div className='layout_DetailDichVu_left_div'>
                        <div className='layout_DetailDichVu_left_text1'>Prefix</div>
                        <div className='layout_DetailDichVu_left_text1_InputNumber'> <InputNumber style={{ width: '61px' }} defaultValue={1} /></div>
                    </div>
                    <div className='layout_DetailDichVu_left_Reset' >Reset mỗi ngày</div>
                    <div className='layout_DetailDichVu_left_Reset'>Ví dụ 201-2001</div>
                </div>
                <div className='layout_DetailDichVu_Between'>
                    <div style={{ display: 'block' }}>
                        <div style={{ float: 'left', width: '160px' }}>
                            <div className='layout_DetailDichVu_Between_text'>Trạng thái</div>
                            <Select defaultValue="Tất cả" style={{ width: '100%' }} onClick={() =>{setSelect(!select)}} suffixIcon={<i className={selectUp} style={{ fontSize:'25px' }}></i>}>
                                <Option value="Tất cả">Tất cả</Option>
                                <Option value="Đã hoàn thành">Đã hoàn thành</Option>
                                <Option value="Đã thực hiện">Đã thực hiện</Option>
                                <Option value="Vắng">Vắng</Option>
                            </Select>
                        </div>
                        <div style={{ float: 'left', marginLeft: '12px' }}>
                            <div className='layout_DetailDichVu_Between_text'>Chọn thời gian</div>
                            <Space direction="vertical">
                                <DatePicker style={{ borderRadius: '8px', width: '130px' }} defaultValue={moment('10/10/2023', dateFormatList[0])} format={dateFormatList} />
                            </Space>
                            <AiFillCaretRight style={{ margin: '0px 7.5px' }} />
                            <Space direction="vertical">
                                <DatePicker style={{ borderRadius: '8px', width: '130px' }} defaultValue={moment('18/10/2023', dateFormatList[0])} format={dateFormatList} />
                            </Space>
                        </div>
                        <div style={{ width: '206px', float: 'left', marginLeft: '12px' }}>
                            <div className='layout_DetailDichVu_Between_text'>Từ khóa  </div>
                            <Search

                                placeholder="Nhập từ khóa "
                                allowClear
                                onSearch={onSearch}
                                style={{ width: '100%' }}
                            />
                        </div>
                    </div>
                    <div >
                        <Table columns={columns} dataSource={data1} pagination={{ pageSize: 8 }} style={{ paddingTop: '12px' }} />
                    </div>
                </div>
                <div style={{ float: 'left' }}>
                    <div className='layout_DetailDichVu_Between_Button'>
                        <Link to='/dichvu/updatedichvu' style={{ textDecoration: 'none', color: '#FF7506' }}>
                            <BsFillPencilFill className='layout_DetailDichVu_Between_Button_icon' />
                            <div>
                                Cập nhật danh sách
                            </div>
                        </Link>
                    </div>
                    <div className='layout_DetailDichVu_Between_Button1'>
                        <Link to='/dichvu' style={{ textDecoration: 'none', color: '#FF7506' }}>
                            <RiArrowGoBackFill className='layout_DetailDichVu_Between_Button_icon' />
                            <div style={{ textAlign:'center' }}>
                                Quay lại
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='clear_both'></div>
            </div>
        </div >
    )
}

export default DetailDichVu