import React from 'react'
import { Input, Space } from 'antd';
import '../forgot/Forgot.css'
import './ResetPassword.css'
import { Link } from 'react-router-dom';

const ResetPassword = () => {
    return (
        <div className='ResetPassword_layout'>
            <div className='ResetPassword_Layout_Left'>
                <div className='ResetPassword_Layout_Left_logo'>
                    <img className='ResetPassword_Layout_Left_logo_img' src="./image/Logoalta.png" alt="" />
                </div>
                <div className='ResetPassword_Layout_Left_text'>
                    Đặt lại mật khẩu mới
                </div>

                <Space direction="vertical" className='ResetPassword_Layout_Left_form'>
                    <div className='ResetPassword_Layout_Left_form_item'>Mật khẩu</div>
                    <Input.Password className='ResetPassword_Layout_Left_form_input' placeholder="" />
                </Space>
                <Space direction="vertical" className='ResetPassword_Layout_Left_form_1'>
                    <div className='ResetPassword_Layout_Left_form_item_1'>Nhập lại mật khẩu</div>
                    <Input.Password className='ResetPassword_Layout_Left_form_input_1' placeholder="" />
                </Space>
                <Link to='/login'>
                    <button className='ResetPassword_layput_left_Button'>
                        Xác nhận
                    </button>
                </Link>
            </div>
            <div className='ResetPassword_Layout_Right'>
                <img className='ResetPassword_Layout_Right_img' src="./image/Frame.png" alt="" />
            </div>
            <div className='clear_both'></div>
        </div>
    )
}

export default ResetPassword
