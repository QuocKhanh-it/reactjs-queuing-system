import React, { useEffect, useState } from 'react'
import { AiOutlineRight } from "react-icons/ai";
import { Input } from 'antd';
import { Table } from 'antd';
import { render } from '@testing-library/react';
import { Select } from 'antd';
import { BsFillPlusSquareFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Modal from '../../template/Modal/Modal';
import Vector from '../../../assets/images/Vector.png'




const { Option } = Select;
const { Search } = Input;
const onSearch = (value: any) => console.log(value);
const QuanLyTaiKhoan = () => {
    //table
    const data1: any = [

        {
            tenDangNhap: "tuyetnguyen@12",
            hoTen: "Nguyễn Văn A",
            sdt: "0834098534",
            email: "tuyetnguyen123@gmail.com",
            vaiTro: "Kế toán",
            trangThaiHD: "Ngưng hoạt động"
        },
        {
            tenDangNhap: "tuyet@12",
            hoTen: "Nguyễn Văn B",
            sdt: "0834098534",
            email: "tuyet23@gmail.com",
            vaiTro: "Kế toán",
            trangThaiHD: "Hoạt động"
        },{
            tenDangNhap: "tuyet@12",
            hoTen: "Nguyễn Văn B",
            sdt: "0834098534",
            email: "tuyet23@gmail.com",
            vaiTro: "Kế toán",
            trangThaiHD: "Hoạt động"
        },
        {
            tenDangNhap: "tuyet@12",
            hoTen: "Nguyễn Văn B",
            sdt: "0834098534",
            email: "tuyet23@gmail.com",
            vaiTro: "Kế toán",
            trangThaiHD: "Hoạt động"
        },
        {
            tenDangNhap: "tuyet@12",
            hoTen: "Nguyễn Văn B",
            sdt: "0834098534",
            email: "tuyet23@gmail.com",
            vaiTro: "Kế toán",
            trangThaiHD: "Hoạt động"
        },
        {
            tenDangNhap: "tuyet@12",
            hoTen: "Nguyễn Văn B",
            sdt: "0834098534",
            email: "tuyet23@gmail.com",
            vaiTro: "Kế toán",
            trangThaiHD: "Hoạt động"
        },
        {
            tenDangNhap: "tuyet@12",
            hoTen: "Nguyễn Văn B",
            sdt: "0834098534",
            email: "tuyet23@gmail.com",
            vaiTro: "Kế toán",
            trangThaiHD: "Hoạt động"
        },
        {
            tenDangNhap: "tuyet@12",
            hoTen: "Nguyễn Văn B",
            sdt: "0834098534",
            email: "tuyet23@gmail.com",
            vaiTro: "Kế toán",
            trangThaiHD: "Hoạt động"
        },
        {
            tenDangNhap: "tuyet@12",
            hoTen: "Nguyễn Văn B",
            sdt: "0834098534",
            email: "tuyet23@gmail.com",
            vaiTro: "Kế toán",
            trangThaiHD: "Hoạt động"
        },
        {
            tenDangNhap: "tuyet@12",
            hoTen: "Nguyễn Văn B",
            sdt: "0834098534",
            email: "tuyet23@gmail.com",
            vaiTro: "Kế toán",
            trangThaiHD: "Hoạt động"
        }
    ];
    const columns: any = [
        {
            title: 'Tên đăng nhập ',
            width: 103,
            dataIndex: 'tenDangNhap',
            key: 'tenDangNhap',

        },
        {
            title: 'Họ tên ',
            width: 120,
            dataIndex: 'hoTen',
            key: 'hoTen',

        },
        {
            title: 'Số điện thoại',
            dataIndex: 'sdt',
            key: 'sdt',
            width: 138,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            width: 138,
        },
        {
            title: 'Vai trò',
            dataIndex: 'vaiTro',
            key: 'vaiTro',
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
            dataIndex: 'capNhat',
            key: 'capNhat',

            width: 106,
            render: () => <u style={{ cursor: 'pointer', color: '#4277FF' }} >
                    <Link to="/quanlytaikhoan/updatetaikhoan" style={{ textDecoration:'none' }} >Cập nhật</Link>
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
    return (
        <div className='layout_ThietBi'>
            <div className='layout_Thietbi_Header row' >
                <div className='layout_Thietbi_Header_Text col-8'>
                    <div>
                        <strong style={{ color: '#7E7D88' }}>Cài đặt hệ thống </strong>
                        <AiOutlineRight style={{ color: '#7E7D88', fontSize: '14px', width: '25px' }} />
                        <strong>Quản lý tài khoản </strong>
                    </div>
                </div>
                <div className=' layout_Thietbi_Header_HoTen col-4' style={{ background: '#F7F7F7' }}>
                    <Modal />
                </div>
                <div className='clear_both'></div>
            </div>


            <div className="row layout_ThietBi_row">
                <div className='layout_ThietBi_row_text'> Danh sách tài khoản </div>
            </div>
            <div className="row layout_ThietBi_row1">
                <div className="col-3">
                    <div className='layout_ThietBi_row1_text'>Tên vai trò </div>
                    <div>
                        <Select defaultValue="Tất cả" style={{ width: '100%' }} onClick={() =>{setSelect(!select)}} suffixIcon={<i className={selectUp} style={{ fontSize:'25px' }}></i>} >
                            <Option className='hoverOption' value="Tất cả">Tất cả</Option>
                            <Option className='hoverOption' value="Hoạt động">Hoạt động</Option>
                            <Option className='hoverOption' value="Ngưng hoạt động">Ngưng hoạt động</Option>
                        </Select>

                    </div>
                </div>
                <div className="col-3">
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
                    <Table pagination={{ pageSize: 8 }} columns={columns} dataSource={data1} style={{ height: '400px' }} />
                </div>
                <div className="col-1 " style={{ padding: '23px 0px' }}>
                    <div className='layout_ThietBi_ThemDichVu'>
                        <Link to={'/quanlytaikhoan/themtaikhoan'} className='layout_ThietBi_ThemDichVu_link' >
                            <BsFillPlusSquareFill className='layout_ThietBi_ThemDichVu_icon' />
                        </Link>
                        <div>Thêm tài khoản</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default QuanLyTaiKhoan
