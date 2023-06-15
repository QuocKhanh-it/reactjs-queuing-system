import React, { useState } from 'react'
import { AiOutlineRight } from 'react-icons/ai';
import { Form, Modal, message, Button, Select } from 'antd';
import { Link } from 'react-router-dom';
import Modal1 from '../../../template/Modal/Modal';
import './DetailCapSo.css'
import xanhduong from '../../../../assets/images/xanhduong.png';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { capSoProps } from '../../../../types/capSo.types';


const { Option } = Select;
function handleChange(value: any) {
    console.log(`selected ${value}`);
}

const DetailCapSo = (props:capSoProps) => {
    const [form] = Form.useForm();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };
    return (
        <div className='layout_AddThietBi'>
            <div className='layout_AddThietbi_Header row' >
                <div className='layout_AddThietbi_Header_Text col-8'>
                    <div>
                        <strong style={{ color: '#7E7D88' }}>Cấp số</strong>

                        <AiOutlineRight style={{ color: '#7E7D88', fontSize: '14px', width: '25px' }} />
                        <Link to='/capso' style={{ textDecoration: 'none' }}> <strong style={{ color: '#7E7D88' }}>{props.name.danhSach}</strong></Link>
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
                <div className='layout_AddThietBi_row_text'> Quản lý cấp số </div>
            </div>
            <Form
                form={form}
                layout="vertical"

                autoComplete="off"
                className="layout_DetailCapSo_Form">
                <div className="layout_DetailCapSo_Form_text" >Thông tin cấp số </div>
                <div className='layout_DetailCapSo_Form_Container' >
                    <div className='layout_DetailCapSo_Form_Container_left'>
                        <div className='layout_DetailCapSo_Form_Container_left_text' >
                            <div className='layout_DetailCapSo_Form_Container_left_label' >Họ tên:</div>
                            <div className='layout_DetailCapSo_Form_Container_left_HoTen'>Nguyễn Thị Dung</div>
                        </div>
                        <div className='layout_DetailCapSo_Form_Container_left_text' >
                            <div className='layout_DetailCapSo_Form_Container_left_label' >Tên dịch vụ:</div>
                            <div className='layout_DetailCapSo_Form_Container_left_HoTen'>khám tim mạch</div>
                        </div>
                        <div className='layout_DetailCapSo_Form_Container_left_text' >
                            <div className='layout_DetailCapSo_Form_Container_left_label' >Số thứ tự:</div>
                            <div className='layout_DetailCapSo_Form_Container_left_HoTen'>2001201</div>
                        </div>
                        <div className='layout_DetailCapSo_Form_Container_left_text' >
                            <div className='layout_DetailCapSo_Form_Container_left_label' >Thời gian cấp:</div>
                            <div className='layout_DetailCapSo_Form_Container_left_HoTen'>14:35 - 07/11/2023</div>
                        </div>
                        <div className='layout_DetailCapSo_Form_Container_left_text' >
                            <div className='layout_DetailCapSo_Form_Container_left_label' >Hạn sử dụng:</div>
                            <div className='layout_DetailCapSo_Form_Container_left_HoTen'>18:00 - 07/11/2023</div>
                        </div>
                    </div>
                    <div className='layout_DetailCapSo_Form_Container_left'>
                        <div className='layout_DetailCapSo_Form_Container_left_text' >
                            <div className='layout_DetailCapSo_Form_Container_left_label' >Nguồn cấp:</div>
                            <div className='layout_DetailCapSo_Form_Container_left_HoTen'>Kiosk</div>
                        </div>
                        <div className='layout_DetailCapSo_Form_Container_left_text' >
                            <div className='layout_DetailCapSo_Form_Container_left_label' >Trạng thái:</div>
                            <div className='layout_DetailCapSo_Form_Container_left_HoTen'><img src={xanhduong} alt="" /> Đang chờ</div>
                        </div>
                        <div className='layout_DetailCapSo_Form_Container_left_text' >
                            <div className='layout_DetailCapSo_Form_Container_left_label' >Số điện thoại:</div>
                            <div className='layout_DetailCapSo_Form_Container_left_HoTen'>040239043920</div>
                        </div>
                        <div className='layout_DetailCapSo_Form_Container_left_text' >
                            <div className='layout_DetailCapSo_Form_Container_left_label' >Địa chỉ Email:</div>
                            <div className='layout_DetailCapSo_Form_Container_left_HoTen'>nguyendung@gmail.com</div>
                        </div>

                    </div>
                </div>

            </Form>
            <div className='layout_DetailCapSo_Button'>
                <Link to='/capso' style={{ textDecoration: 'none', color: '#FF7506' }}>
                    <RiArrowGoBackFill className='layout_DetailDichVu_Between_Button_icon' />
                    <div style={{ textAlign: 'center' }}>
                        Quay lại
                    </div>
                </Link>
            </div>
            <div className='clear-both'></div>
        </div>
    )
}

export default DetailCapSo