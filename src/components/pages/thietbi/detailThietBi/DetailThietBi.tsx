import React, { Fragment, useEffect, useState } from 'react'
import { AiOutlineRight } from 'react-icons/ai';
import { Form, Modal, message, Button, Select } from 'antd';
import { Link, useParams } from 'react-router-dom';
import Modal1 from '../../../template/Modal/Modal';
import './DetailThietBi.css'
import { BsFillPlusSquareFill,BsFillPencilFill } from "react-icons/bs";
import { DashboardProps, MyParams } from '../../../../types/thietBi.types';
import { useDispatch, useSelector } from 'react-redux';
import { layChiTiet } from '../../../../state/action-creators/thietBiCreators';
import { State } from '../../../../state';



const { Option } = Select;
function handleChange(value: any) {
  console.log(`selected ${value}`);
}

const DetailThietBi = (props:DashboardProps) => {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  //xem chi tiet
  const {id} = useParams<keyof MyParams>() as MyParams;
  const [chiTiet, setChiTiet] = useState<any>({
    maTB: '',
    address: '',
    dichVu: '',
    tenTB: '',
    trangThaiHD: '',
    trangThaiKN: '',
});
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layChiTiet(id)) 
  }, [])
  const {chiTietThietBi} = useSelector((state: State) => state.thietBi);
  // console.log('fdsafdsa', chiTietThietBi);
  //setChiTiet
  useEffect(()=> {
      setChiTiet({
        maTB: `${chiTietThietBi.maTB}`,
        address: `${chiTietThietBi.address}`,
        dichVu: `${chiTietThietBi.dichVu}`,
        tenTB: `${chiTietThietBi.tenTB}`,
        trangThaiHD: `${chiTietThietBi.trangThaiHD}`,
        trangThaiKN: `${chiTietThietBi.trangThaiKN}`,
      })
  }, [chiTietThietBi]);

  return (
    <div className='layout_AddThietBi'>
      <div className='layout_AddThietbi_Header row' >
        <div className='layout_AddThietbi_Header_Text col-8'>
          <div>
            <strong style={{ color: '#7E7D88' }}>Thiết bị</strong>
            <AiOutlineRight style={{ color: '#7E7D88', fontSize: '14px', width: '25px' }} />
            <Link to='/thietbi' style={{ textDecoration: 'none' }}> <strong style={{ color: '#7E7D88' }}>{props.name.thietBi}</strong></Link>
            <AiOutlineRight style={{ color: '#7E7D88', fontSize: '14px', width: '25px' }} />
            <strong>{props.name.chiTiet} </strong>
          </div>
        </div>
        <div className=' layout_AddThietbi_Header_HoTen col-4' style={{ background: '#F7F7F7' }}>
          <Modal1 />
        </div>
        <div className='clear_both'></div>
      </div>
      <div className="row layout_AddThietBi_row">
        <div className='layout_AddThietBi_row_text'> Quản lý thiết bị </div>
      </div>
      <Form
        form={form}
        layout="vertical"
        style={{ height: '585px' }}
        autoComplete="off"
        className="layout_DetailThietBi_Form">
        <div className='layout_DetailThietBi_Form_text'>Thông tin thiết bị</div>
        <div className='layout_DetailThietBi_Form_text1'>
          <div className='layout_DetailThietBi_Form_text1_left' >
            <div style={{ paddingBottom: '16px' }}>
              <div className='layout_DetailThietBi_Form_text1_left_text'>Mã thiết bị : </div>
              <div className='layout_DetailThietBi_Form_text1_left_TT'>{chiTiet.maTB}</div>
            </div>
            <div style={{ paddingBottom: '16px' }}>
              <div className='layout_DetailThietBi_Form_text1_left_text'>Tên thiết bị : </div>
              <div className='layout_DetailThietBi_Form_text1_left_TT'>{chiTiet.tenTB}</div>
            </div>
            <div style={{ paddingBottom: '16px' }}>
              <div className='layout_DetailThietBi_Form_text1_left_text'>Địa chỉ IP : </div>
              <div className='layout_DetailThietBi_Form_text1_left_TT'>{chiTiet.address}</div>
            </div>
          </div>
          <div style={{ float: 'left', width: '50%' }}>
            <div style={{ paddingBottom: '16px' }}>
              <div className='layout_DetailThietBi_Form_text1_left_text'>Loại thiết bị : </div>
              <div className='layout_DetailThietBi_Form_text1_left_TT'>{chiTiet.tenTB}</div>
            </div>
            <div style={{ paddingBottom: '16px' }}>
              <div className='layout_DetailThietBi_Form_text1_left_text'>Tên đăng nhập : </div>
              <div className='layout_DetailThietBi_Form_text1_left_TT'>Linhkyo</div>
            </div>
            <div style={{ paddingBottom: '16px' }}>
              <div className='layout_DetailThietBi_Form_text1_left_text'>Mật khẩu : </div>
              <div className='layout_DetailThietBi_Form_text1_left_TT'>CMS</div>
            </div>
          </div>

          <div className='clear_both'></div>
          <div style={{ float: 'none', paddingBottom: '8px' }} className='layout_DetailThietBi_Form_text1_left_text'>
            Dịch vụ sử dụng
          </div>
          <div className='layout_DetailThietBi_Form_text1_left_TT'>
            {chiTiet.dichVu}
          </div>
        </div>

      </Form>
      <div className='layout_DetailThietBi_Button'>
        <div className='layout_DetailThietBi_Button_text'>
          <Link to={'/thietbi/capnhatthietbi'} style={{ marginLeft:'0px' }} className='layout_ThietBi_ThemDichVu_link' >
            <BsFillPencilFill className='layout_ThietBi_DetailDichVu_icon' />

          </Link>
          <div>Cập nhật thiết bị</div>
        </div>
      </div>
      <div className='clear_both'></div>
    </div>

  )
}

export default DetailThietBi