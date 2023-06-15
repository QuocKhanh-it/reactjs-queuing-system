import React, { useEffect, useState } from 'react'
import { AiOutlineRight } from 'react-icons/ai';
import './AddThietBi.css';
import { Form, Input, message, Button, Select } from 'antd';
import { Link } from 'react-router-dom';
import Modal from '../../../template/Modal/Modal';
import { DashboardProps } from '../../../../types/thietBi.types';

const { Option } = Select;


const AddThietBi = (props:DashboardProps) => {
  const [form] = Form.useForm();
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
    <div className='layout_AddThietBi'>
      <div className='layout_AddThietbi_Header row' >
        <div className='layout_AddThietbi_Header_Text col-8'>
          <div>
            <strong style={{ color: '#7E7D88' }}>Thiết bị </strong>
            <AiOutlineRight style={{ color: '#7E7D88', fontSize: '14px', width: '25px' }} />
            <Link to='/thietbi' style={{ textDecoration:'none' }}><strong style={{ color: '#7E7D88' }}>{props.name.thietBi} </strong></Link>
            <AiOutlineRight style={{ color: '#7E7D88', fontSize: '14px', width: '25px' }} />
            <strong>{props.name.them} </strong>
          </div>
        </div>
        <div className=' layout_AddThietbi_Header_HoTen col-4' style={{ background: '#F7F7F7' }}>
          <Modal/>
        </div>
        <div className='clear_both'></div>
      </div>

      
      <div className="row layout_AddThietBi_row">
        <div className='layout_AddThietBi_row_text'> Quản lý thiết bị </div>
      </div>
      <Form
        form={form}
        layout="vertical"

        autoComplete="off"
        className="layout_AddThietBi_row1">
        <div className="row layout_AddThietBi_row1_text">
          Thông tin thiết bị
        </div>
        <div className="row">
          <Form.Item
            className='col-6'
          >
            <div className='layout_addThietBi_row1_FormItem'>Mã thiết bị : <img src="../image/sao.png" alt="" /> </div>
            <Input style={{ height:'44px' }} placeholder="Nhập mã thiết bị" />
          </Form.Item>
          <Form.Item  className="col-6 layout_addThietBi_row1_FormItem_hover ">
            <div className='layout_addThietBi_row1_FormItem'>Loại thiết bị : <img src="../image/sao.png" alt="" /> </div>
            <Select placeholder="Chọn loại thiết bị" onClick={() =>{setSelect(!select)}} suffixIcon={<i className={selectUp} style={{ fontSize:'25px' }}></i>}>
              <Option  className='layout_addThietBi_row1_Option_hover' value="Kiosk">Kiosk</Option>
              <Option  className='layout_addThietBi_row1_Option_hover'value="Display Counter">Display Counter</Option>
            </Select>
          </Form.Item>
        </div>
        <div className="row">
          <Form.Item
            className='col-6'
          >
            <div className='layout_addThietBi_row1_FormItem'>Tên thiết bị : <img src="../image/sao.png" alt="" /> </div>
            <Input style={{ height:'44px' }} placeholder="Nhập tên thiết bị" />
          </Form.Item>
          <Form.Item className="col-6">
            <div className='layout_addThietBi_row1_FormItem'>Tên đăng nhập : <img src="../image/sao.png" alt="" /> </div>
            <Input style={{ height:'44px' }} placeholder="Nhập tài khoản" />
          </Form.Item>
        </div>
        <div className="row">
          <Form.Item
            className='col-6'
          >
            <div className='layout_addThietBi_row1_FormItem'>Địa chỉ IP : <img src="../image/sao.png" alt="" /> </div>
            <Input style={{ height:'44px' }} placeholder="Nhập địa chỉ IP" />
          </Form.Item>
          <Form.Item className="col-6">
            <div className='layout_addThietBi_row1_FormItem'>Mật khẩu : <img src="../image/sao.png" alt="" /> </div>
            <Input style={{ height:'44px' }} placeholder="Nhập mật khẩu" />
          </Form.Item>
        </div>
        <div className="row">
          <Form.Item
            className='col-12'
          >
            <div className='layout_addThietBi_row1_FormItem'>Dịch vụ sử dụng  : <img src="../image/sao.png" alt="" /> </div>
            <Input style={{ height:'44px' }} placeholder="Nhập nhập dịch vụ sử dụng" />
            <div style={{ marginTop:'8px' }}> <img src="../image/sao.png" alt="" /> Là trường thông tin bắt buộc</div>
          </Form.Item>

        </div>
        <div className="row"></div>
      </Form>
      <div className='row mt-5'>
        <div className='col-6 text-end' >
        <Button className='layout_addThietBi_row_Button' type="primary" htmlType="submit">
          Hủy bỏ
        </Button>  
        </div>
        <div className='col-6 text-start'>
          <Button
          className='layout_addThietBi_row_Button1'
          
        >
          Thêm thiết bị
        </Button></div>
        
      </div>

    </div>
  )
}

export default AddThietBi
