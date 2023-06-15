import React, { useState } from 'react'
import { AiOutlineRight } from 'react-icons/ai';
import { Form, Input, message, Button, Select } from 'antd';
import './AddDichVu.css'
import { Checkbox } from 'antd';
import { InputNumber } from 'antd';
import Modal from '../../../template/Modal/Modal';
import { Link } from 'react-router-dom';
import { dichVuProps } from '../../../../types/dichVu.types';


function onChange1(value: any) {
    console.log('changed', value);
}

function onChange(e: any) {
    console.log(`checked = ${e.target.checked}`);
}
const { TextArea } = Input;

const { Option } = Select;

const AddDichVu = (props:dichVuProps) => {


    const [form] = Form.useForm();
    return (
        <div className='layout_AddThietBi'>
            <div className='layout_AddThietbi_Header row' >
                <div className='layout_AddThietbi_Header_Text col-8'>
                    <div>
                        <strong style={{ color: '#7E7D88' }}>Dịch vụ </strong>
                        <AiOutlineRight style={{ color: '#7E7D88', fontSize: '14px', width: '25px' }} />
                        <Link to='/dichvu' style={{ textDecoration: 'none' }} ><strong style={{ color: '#7E7D88' }}>{props.name.danhSach} </strong></Link>
                        <AiOutlineRight style={{ color: '#7E7D88', fontSize: '14px', width: '25px' }} />
                        <strong>{props.name.them} </strong>
                    </div>
                </div>
                <div className=' layout_AddThietbi_Header_HoTen col-4' style={{ background: '#F7F7F7' }}>
                    <Modal />
                </div>
                <div className='clear_both'></div>
            </div>


            <div className="row layout_AddThietBi_row">
                <div className='layout_AddThietBi_row_text'> Quản lý dịch vụ </div>
            </div>
            <Form
                form={form}
                layout="vertical"

                autoComplete="off"
                className="layout_AddThietBi_row1">
                <div className="row layout_AddThietBi_row1_text">
                    Thông tin dịch vụ
                </div>
                <div className="row">
                    <Form.Item
                        className='col-6'
                    >
                        <div className='layout_addThietBi_row1_FormItem'>Mã dịch vụ : <img src="../image/sao.png" alt="" /> </div>
                        <Input style={{ height:'44px' }} />

                        <div style={{ marginTop: '8px' }} className='layout_addThietBi_row1_FormItem'>Tên dịch vụ : <img src="../image/sao.png" alt="" /> </div>
                        <Input style={{ height:'44px' }} placeholder="khám tim mạch" />
                    </Form.Item>
                    <Form.Item className="col-6 layout_addThietBi_row1_FormItem_hover ">
                        <div className='layout_addThietBi_row1_FormItem'>Mô tả : <img src="../image/sao.png" alt="" /> </div>
                        <TextArea style={{ height: '130px' }} placeholder="Mô tả dịch vụ" />
                    </Form.Item>
                </div>
                <div className="row">
                    <div className='col-12 layout_AddDichVu_row_text'>
                        Quy tắc cấp số
                    </div>
                </div>
                <div className="row">
                    <div style={{ padding: '10px 10px' }} className="col-2">
                        <Checkbox onChange={onChange}>Tăng tự động từ :</Checkbox>
                    </div>
                    <div className="col-10" style={{ paddingLeft: '0px', marginTop: '13px' }}>
                        <InputNumber defaultValue={1} onChange={onChange1} />
                        <strong style={{ marginLeft: '10px', marginRight: '10px' }}>đến</strong>
                        <InputNumber defaultValue={9999} onChange={onChange1} />
                    </div>
                </div>
                <div className="row">
                    <div style={{ paddingBottom: ' 10px' }} className="col-2">
                        <Checkbox onChange={onChange}>Prefix :</Checkbox>
                    </div>
                    <div className="col-10" style={{ paddingLeft: '0px', marginTop: '0px' }}>
                        <InputNumber defaultValue={1} onChange={onChange1} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-2 " style={{ paddingBottom: ' 10px' }}>
                        <Checkbox onChange={onChange}>Surfix :</Checkbox>
                    </div>
                    <div className="col-10" style={{ paddingLeft: '0px', marginTop: '0px' }}>
                        <InputNumber defaultValue={1} onChange={onChange1} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12" >
                        <Checkbox onChange={onChange}>Reset mỗi ngày </Checkbox>
                    </div>
                </div>
                <div className="row">
                    <div className='col-12' style={{ marginTop: '8px' }}> <img src="../image/sao.png" alt="" /> Là trường thông tin bắt buộc</div>
                </div>

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
                        Thêm dịch vụ
                    </Button></div>

            </div>

        </div>
    )
}

export default AddDichVu