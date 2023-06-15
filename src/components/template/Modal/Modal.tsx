import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Modal1 from 'react-modal';
import './Modal.css'
import avata from '../../../assets/images/avata.png';
import { BsBellFill } from "react-icons/bs";
import { IconContext } from "react-icons";


const Modal = () => {
    
    const [statusNotify, setStatusNotify] = useState<boolean>(false); //flasr là đóng true là mở 
    const [bgNotify, setBgNotify] = useState<string>('#fff2e7');
    const [colorNotifyBtn, setColorNotifyBtn] = useState<string>('#ff9138')
   
    useEffect(() => {
        // console.log('hinh anh', imageProfile);

    })

    useEffect(() => {
        if (statusNotify) {
            setBgNotify('#ff7506');
            setColorNotifyBtn('#fff');
            console.log(bgNotify);
        } else {
            setBgNotify('#fff2e7');
            setColorNotifyBtn('#ff9138')
            console.log(bgNotify);

        }
    }, [statusNotify]);



    return (
        <div>
            <div className='layout_Dashboard_Header_img' onClick={() => {
                        setStatusNotify(!statusNotify)
                    }}  >
                <div className='thongBao__wrap' style={{ backgroundColor: `${bgNotify}` }}>
                    <i className="fa fa-bell" style={{ color:`${colorNotifyBtn}` }} ></i>
                </div>
            </div>
            <Link to={'/thongtinnguoidung'} className='layout_Dashboard_Header_img1'>
                <img src={avata} alt="" />
            </Link>
            <div className='layout_Dashboard_Header_TT'>
                <p style={{ marginTop: "13px", paddingTop: '16px' }}>xin chào</p>
                <p style={{ color: "#535261", fontSize: '16px', fontWeight: "700", }}>Lê Quỳnh Ái Vân</p>
            </div>
            <div className='clear_both'></div>
            <Modal1
                isOpen={statusNotify}
                onRequestClose={() => setStatusNotify(false)}

                style={{
                    overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(255, 255, 255, 15%)'
                    },
                    content: {
                        zIndex: '9999',
                        position: 'absolute',
                        top: '100px',
                        left: '1060px',
                        border: 'none',
                        width: '360px',
                        height: '526px',
                        padding: '0px',
                        background: '#ffffff',
                        overflow: 'hidden',


                        borderRadius: '10px',
                        outline: 'none',
                        boxShadow: '2px 2px 15px rgba(70, 64, 67, 0.1)'

                    }
                }}

            >
                <div className='Modal_ThongBao'>
                    <h2>Thông báo</h2>
                </div>
                <div className='Modal_body_layout' id="Modal_1" >
                    <div className='Modal_body'>
                        <div className='Modal_NguoiDung'>Người dùng: Nguyễn Thị Thùy Dung</div>
                        <div className='Modal_Time'>Thời gian nhận số: 12h20 ngày 30/11/2023</div>
                    </div>
                    <div className='Modal_body'>
                        <div className='Modal_NguoiDung'>Người dùng: Nguyễn Thiên Chinh</div>
                        <div className='Modal_Time'>Thời gian nhận số: 12h20 ngày 30/11/2023</div>
                    </div>
                    <div className='Modal_body'>
                        <div className='Modal_NguoiDung'>Người dùng: Võ Thị Kim Liên</div>
                        <div className='Modal_Time'>Thời gian nhận số: 12h20 ngày 30/11/2023</div>
                    </div>
                    <div className='Modal_body'>
                        <div className='Modal_NguoiDung'>Người dùng: Nguyễn Quốc Huy</div>
                        <div className='Modal_Time'>Thời gian nhận số: 12h20 ngày 30/11/2023</div>
                    </div>
                    <div className='Modal_body'>
                        <div className='Modal_NguoiDung'>Người dùng: Võ Ngọc Lan Anh</div>
                        <div className='Modal_Time'>Thời gian nhận số: 12h20 ngày 30/11/2023</div>
                    </div>
                    <div className='Modal_body'>
                        <div className='Modal_NguoiDung'>Người dùng: Nguyễn thị Trúc Anh</div>
                        <div className='Modal_Time'>Thời gian nhận số: 12h20 ngày 30/11/2023</div>
                    </div>
                    <div className='Modal_body'>
                        <div className='Modal_NguoiDung'>Người dùng: Nguyễn thị Trúc Anh</div>
                        <div className='Modal_Time'>Thời gian nhận số: 12h20 ngày 30/11/2023</div>
                    </div>
                    <div className='Modal_body'>
                        <div className='Modal_NguoiDung'>Người dùng: Nguyễn thị Trúc Anh</div>
                        <div className='Modal_Time'>Thời gian nhận số: 12h20 ngày 30/11/2023</div>
                    </div>
                    <div className='Modal_body'>
                        <div className='Modal_NguoiDung'>Người dùng: Nguyễn thị Trúc Anh</div>
                        <div className='Modal_Time'>Thời gian nhận số: 12h20 ngày 30/11/2023</div>
                    </div>
                </div>
            </Modal1>
        </div>
    )
}

export default Modal
