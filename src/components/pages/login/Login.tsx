
import { Input, Space } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className='login_Layout'>
            <div className='login_Layout_Left'>
                <div className='login_Layout_Left_logo'>
                    <img className='login_Layout_Left_logo_img' src="./image/Logoalta.png" alt="" />
                </div>
                <Space direction="vertical" className='login_Layout_Left_form'>
                    <div className='login_Layout_Left_form_item'>Tên đăng nhập *</div>
                    <Input className='login_Layout_Left_form_input' placeholder="" />
                </Space>
                <Space direction="vertical" className='login_Layout_Left_form_1'>
                    <div className='login_Layout_Left_form_item'>Mật khẩu *</div>
                    <Input.Password className='login_Layout_Left_form_input' placeholder="" />
                </Space>
                <div className='login_Layout_Left_form_2'>
                    <Link to='/forgot' style={{ textDecoration: 'none', color: '#E73F3F' }}>Quên mật khẩu ?</Link>
                </div>
                <Link to={`/`} className='login_Layout_Left_Button'>
                    Đăng nhập
                </Link>

            </div>
            <div className='login_Layout_Right'>
                <div className='login_Layout_Right_logo'>
                    <img className='login_Layout_Left_logo_img' src="./image/Group341.png" alt="" />
                </div>
                <div className='login_Layout_Right_logo_1'>
                    <img className='login_Layout_Left_logo_img' src="./image/hethong.png" alt="" />
                </div>
                <div className='login_Layout_Right_logo_2'>
                    <img className='login_Layout_Left_logo_img' src="./image/quanLyXepHang.png" alt="" />
                </div>
            </div>
            <div className='clear_both'></div>
        </div>
    )
}

export default Login