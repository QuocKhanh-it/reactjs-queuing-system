import React, { useEffect, useState } from 'react'
import { AiOutlineRight } from 'react-icons/ai';
import './UpdateThietBi.css'
import { Form, Input, message, Button, Select } from 'antd';
import { Link } from 'react-router-dom';
import Modal from '../../../template/Modal/Modal';
import { DashboardProps } from '../../../../types/thietBi.types';

const { Option } = Select;

function handleChange(value: any) {
  console.log(`selected ${value}`);
}

const UpdateThietBi = (props:DashboardProps) => {
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
            <Link to='/thietbi' style={{ textDecoration: 'none' }}><strong style={{ color: '#7E7D88' }}>{props.name.thietBi} </strong></Link>
            <AiOutlineRight style={{ color: '#7E7D88', fontSize: '14px', width: '25px' }} />
            <strong>{props.name.capNhat} </strong>
          </div>
        </div>
        <div className=' layout_AddThietbi_Header_HoTen col-4' style={{ background: '#F7F7F7' }}>
          <Modal />
        </div>
        <div className='clear_both'></div>
      </div>


      <div className="row layout_AddThietBi_row">
        <div className='layout_AddThietBi_row_text'> Quản lý thiết bị </div>
      </div>
      <Form
        form={form}
        layout="vertical"
        style={{ height:'520px' }}
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
            <Input style={{ height: '44px' }} value="KIO_01" />
          </Form.Item>
          <Form.Item className="col-6 layout_addThietBi_row1_FormItem_hover ">
            <div className='layout_addThietBi_row1_FormItem'>Loại thiết bị : <img src="../image/sao.png" alt="" /> </div>
            <Select value="Kiosk" onClick={() =>{setSelect(!select)}} suffixIcon={<i className={selectUp} style={{ fontSize:'25px' }}></i>}>
              <Option className='layout_addThietBi_row1_Option_hover' value="Kiosk">Kiosk</Option>
              <Option className='layout_addThietBi_row1_Option_hover' value="Display Counter">Display Counter</Option>
            </Select>
          </Form.Item>
        </div>
        <div className="row">
          <Form.Item
            className='col-6'
          >
            <div className='layout_addThietBi_row1_FormItem'>Tên thiết bị : <img src="../image/sao.png" alt="" /> </div>
            <Input style={{ height: '44px' }} value="Kiosk" />
          </Form.Item>
          <Form.Item className="col-6">
            <div className='layout_addThietBi_row1_FormItem'>Tên đăng nhập : <img src="../image/sao.png" alt="" /> </div>
            <Input style={{ height: '44px' }} value="Linhkyo001" />
          </Form.Item>
        </div>
        <div className="row">
          <Form.Item
            className='col-6'
          >
            <div className='layout_addThietBi_row1_FormItem'>Địa chỉ IP : <img src="../image/sao.png" alt="" /> </div>
            <Input style={{ height: '44px' }} value="128.172.208" />
          </Form.Item>
          <Form.Item className="col-6">
            <div className='layout_addThietBi_row1_FormItem'>Mật khẩu : <img src="../image/sao.png" alt="" /> </div>
            <Input style={{ height: '44px' }} value="CMS" />
          </Form.Item>
        </div>
        <div className="row">
          <Form.Item
            className='col-12'
          >
            <div className='layout_addThietBi_row1_FormItem'>Dịch vụ sử dụng  : <img src="../image/sao.png" alt="" /> </div>
            <Select
              tokenSeparators={[',']}
              style={{ width: '100%' }}
              mode="tags"
              defaultValue={['khám tim mạch']}
              onChange={handleChange}
              optionLabelProp="label"
            >
              <Option  value="khám tim mạch" label="khám tim mạch">
                <div className="demo-option-label-item">
                  <span role="img" aria-label="khám tim mạch">
                    khám tim mạch
                  </span>
                  
                </div>
              </Option>
              <Option value="khám sản phụ khoa " label="khám sản phụ khoa ">
                <div className="demo-option-label-item">
                  <span role="img" aria-label="khám sản phụ khoa ">
                   khám sản phụ khoa 
                  </span>
                  
                </div>
              </Option>
              <Option value="khám răng hàm mặt" label="khám răng hàm mặt">
                <div className="demo-option-label-item">
                  <span role="img" aria-label="khám răng hàm mặt">
                    khám răng hàm mặt 
                  </span>

                </div>
              </Option>
              <Option value=" khám tai mũi họng " label=" khám tai mũi họng ">
                <div className="demo-option-label-item">
                  <span role="img" aria-label=" khám tai mũi họng ">
                   khám tai mũi họng 
                  </span>
                  
                </div>
              </Option>
              <Option  value=" khám hô hấp" label=" khám hô hấp">
                <div className="demo-option-label-item">
                  <span role="img" aria-label=" khám hô hấp">
                   khám hô hấp
                  </span>
                  
                </div>
              </Option>
              <Option value=" khám tổng quát" label=" khám tổng quát">
                <div className="demo-option-label-item">
                  <span role="img" aria-label=" khám tổng quát">
                   khám tổng quát
                  </span>
                  
                </div>
              </Option>
            </Select>
            <div style={{ marginTop: '8px' }}> <img src="../image/sao.png" alt="" /> Là trường thông tin bắt buộc</div>
          </Form.Item>

        </div>
        <div className="row"></div>
      </Form>
      <div className='row mt-4'>
        <div className='col-6 text-end' >
          <Button className='layout_addThietBi_row_Button' type="primary" htmlType="submit">
            Hủy bỏ
          </Button>
        </div>
        <div className='col-6 text-start'>
          <Button
            className='layout_addThietBi_row_Button1'

          >
            Cập nhật
          </Button></div>

      </div>

    </div>
  )
}

export default UpdateThietBi