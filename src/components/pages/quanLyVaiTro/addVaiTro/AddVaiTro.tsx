import React, { useState } from 'react'
import { AiOutlineRight } from 'react-icons/ai';
import { Form, Input, message, Button, Select } from 'antd';
import './AddVaiTro.css'
import Modal from '../../../template/Modal/Modal';
import sao from '../../../../assets/images/sao.png';

import { Checkbox, Divider } from 'antd';
import { Link } from 'react-router-dom';

const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Chức năng X', 'Chức năng Y', 'Chức năng Z'];
const defaultCheckedList = ['Chức năng X'];

const plainOptions1 = ['Chức năng X', 'Chức năng Y', 'Chức năng Z'];
const defaultCheckedList1 = ['Chức năng X'];




const { TextArea } = Input;

const { Option } = Select;


const AddVaiTro = () => {
    // check box
    const [checkedList, setCheckedList] = React.useState(defaultCheckedList);
    const [checkedList1, setCheckedList1] = React.useState(defaultCheckedList);
    const [indeterminate, setIndeterminate] = React.useState(true);
    const [indeterminate1, setIndeterminate1] = React.useState(true);
    const [checkAll, setCheckAll] = React.useState(false);
    const [checkAll1, setCheckAll1] = React.useState(false);

      const onChange = (list:any) => {
        setCheckedList(list);
        setIndeterminate(!!list.length && list.length < plainOptions.length);
        setCheckAll(list.length === plainOptions.length);
      };
      const onChange1 = (list:any) => {
        setCheckedList1(list);
        setIndeterminate1(!!list.length && list.length < plainOptions1.length);
        setCheckAll1(list.length === plainOptions1.length);
      };

      const onCheckAllChange = (e:any) => {
        setCheckedList(e.target.checked ? plainOptions : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
      };
      const onCheckAllChange1 = (e:any) => {
        setCheckedList1(e.target.checked ? plainOptions1 : []);
        setIndeterminate1(false);
        setCheckAll1(e.target.checked);
      };
    const [form] = Form.useForm();
    return (
        <div className='layout_AddThietBi'>
            <div className='layout_AddThietbi_Header row' >
                <div className='layout_AddThietbi_Header_Text col-8'>
                    <div>
                        <strong style={{ color: '#7E7D88' }}>Cài đặt hệ thống</strong>
                        <AiOutlineRight style={{ color: '#7E7D88', fontSize: '14px', width: '25px' }} />
                        <Link to='/quanlyvaitro' style={{ textDecoration:'none' }}><strong style={{ color: '#7E7D88' }}>Quản lý vai trò </strong></Link>
                        <AiOutlineRight style={{ color: '#7E7D88', fontSize: '14px', width: '25px' }} />
                        <strong>Thêm vai trò  </strong>
                    </div>
                </div>
                <div className=' layout_AddThietbi_Header_HoTen col-4' style={{ background: '#F7F7F7' }}>
                    <Modal />
                </div>
                <div className='clear_both'></div>
            </div>


            <div className="row layout_AddThietBi_row">
                <div className='layout_AddThietBi_row_text'> Danh sách vai trò </div>
            </div>
            <Form
                form={form}
                layout="vertical"
                autoComplete="off"
                className="">
                <div className='layout_addVaiTro_form mt-3'>
                    <div className='layout_addVaiTro_form_thongTin'>
                        Thông tin vai trò
                    </div>
                    <div className='layout_addVaiTro_form_left'>
                        <div className='layout_addVaiTro_form_left_text'>
                            Tên vai trò <img src={sao} />
                        </div>
                        <Input placeholder="Nhập tên vai trò" />
                        <div className='layout_addVaiTro_form_left_text_1'>
                            Mô tả :
                        </div>
                        <TextArea placeholder="Nhập mô tả" />
                        <div className='layout_addVaiTro_form_left_text'>
                            <img src={sao} /> Là trường thông tin bắt buộc
                        </div>
                    </div>
                    <div className='layout_addVaiTro_form_right'>
                        <div className='layout_addVaiTro_form_right_text'>
                            Phân quyền chức năng <img src={sao} />
                        </div>
                        <div className='layout_addVaiTro_form_right_chucNang' id='chucNang'>
                            <div className='layout_addVaiTro_form_right_chucNang_text'>
                                Nhóm chức năng A
                            </div>
                            <Checkbox  indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>Tất cả</Checkbox><br />
                            <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
                            <div className='layout_addVaiTro_form_right_chucNang_text'>
                                Nhóm chức năng B
                            </div>
                            <Checkbox  indeterminate={indeterminate1} onChange={onCheckAllChange1} checked={checkAll1}>Tất cả</Checkbox><br />
                            <CheckboxGroup options={plainOptions1} value={checkedList1} onChange={onChange1} />
                            <div className='layout_addVaiTro_form_right_chucNang_text'>
                                Nhóm chức năng C
                            </div>
                            <Checkbox  indeterminate={indeterminate1} onChange={onCheckAllChange1} checked={checkAll1}>Tất cả</Checkbox><br />
                            <CheckboxGroup options={plainOptions1} value={checkedList1} onChange={onChange1} />
                            <div className='layout_addVaiTro_form_right_chucNang_text'>
                                Nhóm chức năng D
                            </div>
                            <Checkbox  indeterminate={indeterminate1} onChange={onCheckAllChange1} checked={checkAll1}>Tất cả</Checkbox><br />
                            <CheckboxGroup options={plainOptions1} value={checkedList1} onChange={onChange1} />
                        </div>
                    </div>
                    <div style={{ clear: 'both' }}></div>
                </div>

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
                            Thêm
                        </Button></div>

                </div>

            </Form>


        </div>
    )
}

export default AddVaiTro
