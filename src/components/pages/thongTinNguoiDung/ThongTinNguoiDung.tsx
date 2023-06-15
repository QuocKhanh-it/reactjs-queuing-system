import React, { useState } from 'react'
import { Form, Input, Select } from 'antd';
import { Link } from 'react-router-dom';
import './ThongTinNguoiDung.css'
import Modal from '../../template/Modal/Modal';

const { TextArea } = Input;

const { Option } = Select;

export const ThongTinNguoiDung = () => {
    const [visible, setVisible] = useState(false);

    const [form] = Form.useForm();
    return (
        <div className='layout_AddThietBi'>
            <div className='layout_AddThietbi_Header row' >
                <div className='layout_AddThietbi_Header_Text col-8'>
                    <div>
                        <strong style={{ color: '#FF9138', fontSize: '20px' }}>Thông tin cá nhân  </strong>

                    </div>
                </div>
                <div className=' layout_AddThietbi_Header_HoTen col-4' style={{ background: '#F7F7F7' }}>
                    <Modal/>
                </div>
                <div className='clear_both'></div>
            </div>

           

            <Form
                form={form}
                layout="vertical"

                autoComplete="off"
                className="layout_ThongTinNguoiDung_row1">

                <form style={{ display:'block' }} className="">
                    <div style={{ float:'left' }} className="">
                        <div>
                            <img src="./image/anhdaidien.jpg" alt="" />
                        </div>
                        <div className='layout_ThongTinNguoiDung_row_Ten'>Lê Quỳnh Ái Vân</div>
                    </div>
                    <div style={{ width:'384px',float:'left', marginLeft:'24px', marginTop:'20px' }} className=''>
                        <div style={{ marginBottom:'24px' }}>
                            <div className='layout_addThietBi_row1_FormItem'>Tên người dung</div>
                            <input type="text" placeholder='Lê Quỳnh Ái Vân' className='layout_ThongTinNguoiDung_row_input' />
                        </div>
                        <div style={{ marginBottom:'24px' }}>
                            <div className='layout_addThietBi_row1_FormItem'>Số điện thoại</div>
                            <input type="number" placeholder='09098098098' className='layout_ThongTinNguoiDung_row_input' />
                        </div>
                        <div>
                            <div className='layout_addThietBi_row1_FormItem'>Email</div>
                            <input type="email" placeholder='AiVan@gmail.com' className='layout_ThongTinNguoiDung_row_input' />
                        </div>
                    </div>
                    <div style={{ width:'384px',float:'left',marginLeft:'24px', marginTop:'20px' }} className="">
                        <div style={{ marginBottom:'24px' }}>
                            <div className='layout_addThietBi_row1_FormItem'>Tên đăng nhập</div>
                            <input type="text" placeholder='lequynhaivan01' className='layout_ThongTinNguoiDung_row_input' />
                        </div>
                        <div style={{ marginBottom:'24px' }}>
                            <div className='layout_addThietBi_row1_FormItem'>Mật khẩu</div>
                            <input type="text" placeholder='323242' className='layout_ThongTinNguoiDung_row_input' />
                        </div>
                        <div >
                            <div className='layout_addThietBi_row1_FormItem'>Vai trò </div>
                            <input type="text" placeholder='Kế toán ' className='layout_ThongTinNguoiDung_row_input'/>
                        </div>
                    </div>
                </form>


            </Form>


        </div>
    )
}
