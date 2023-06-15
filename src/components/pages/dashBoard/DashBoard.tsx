import React, { useEffect, useState } from 'react'
import { AiOutlineComment } from "react-icons/ai";
import { BiLayer } from "react-icons/bi";
import { DesktopOutlined, } from '@ant-design/icons'
import "./Dashboard.css"
// import { Modal } from 'antd';
import { Area } from '@ant-design/charts';
import ReactDOM from 'react-dom';
import { RingProgress } from '@ant-design/plots';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import 'antd/dist/antd.css';
import { Select } from 'antd';
import Modal from '../../template/Modal/Modal';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { MenuChart } from './MenuChart/MenuChart';
import { Link } from 'react-router-dom';
import { RadialBar } from '@ant-design/plots';

const { Option } = Select;

const DashBoard = () => {
    //thiet bi
    const [daCap, setDaCap] = useState(4221)
    const [daCapHD, setDaCapHD] = useState(3779)
    const [daCapNHD, setDaCapNHD] = useState(422)

    //ThietBiBar
    const maxAngle = (daCapHD / daCap) * 360
    const ngungHD = (daCapNHD / daCap) * 360
    const phanTram1 = (daCapHD / daCap) * 100
    // console.log('phan tram', maxAngle);
    // console.log('ngung hoat dong', ngungHD);
    const ThietBiBar = () => {
        const data = [
            {
                name: ' ',
                star: ngungHD,
            },
            {
                name: '2',
                star: maxAngle,
            },
        ];
        const config = {
            data,
            xField: 'name',
            yField: 'star',
            width: 80,
            height: 70,
            autoFit: false,
            maxAngle: maxAngle,
            //最大旋转角度,
            radius: 1,
            innerRadius: 0.6,
            colorField: 'star',
            color: ({ star }: any) => {
                if (star > 80) {
                    return '#FF7506';
                } else if (star > 10) {
                    return '#7E7D88';
                }

                return star;
            },
            barBackground: {},

        };
        return <RadialBar {...config} />;
    };

    //dịch vụ
    const [dichVu, setDichVu] = useState(276)
    const [dichVuHD, setDichVuHD] = useState(210)
    const [dichVuNHD, setDichVuNHD] = useState(60)

    //Dich vu bar
    const maxAngleDichVu = (dichVuHD / dichVu) * 360
    const dichVuNgungHD = (dichVuNHD / dichVu) * 360
    const phanTramDichVu = (dichVuHD / dichVu) * 100
    // console.log('phan tram', maxAngle);
    // console.log('ngung hoat dong', ngungHD);
    const DichVuBar = () => {
        const data = [
            {
                name: ' ',
                star: dichVuNgungHD,
            },
            {
                name: '2',
                star: maxAngleDichVu,
            },
        ];
        const config = {
            data,
            xField: 'name',
            yField: 'star',
            width: 80,
            height: 70,
            autoFit: false,
            maxAngle: maxAngleDichVu,
            //最大旋转角度,
            radius: 1,
            innerRadius: 0.6,
            colorField: 'star',
            color: ({ star }: any) => {
                if (star > 80) {
                    return '#4277FF';
                } else if (star > 40) {
                    return '#7E7D88';
                }

                return star;
            },
            barBackground: {},

        };
        return <RadialBar {...config} />;
    };


    //cấp số 
    const [capSo, setCapSo] = useState(4221)
    const [capSoSD, setCapSoSD] = useState(3721)
    const [capSoDangCho, setCapSoDangCho] = useState(422)
    const [capSoBoQua, setCapSoBoQua] = useState(102)
    //cấp số bar
    const maxAngleCapSo = (capSoSD / capSo) * 360
    const capSoDC = (capSoDangCho / capSo) * 360
    // console.log('capSoDC',capSoDC);
    const capSoBQ = (capSoBoQua / capSo) * 360
    const phanTramCapSo = (capSoSD / capSo) * 100
    const CapSoBar = () => {
        const data = [
            {
                name: ' ',
                star: capSoBQ,
            },
            {
                name: '2',
                star: capSoDC,
            },
            {
                name: '3',
                star: maxAngleCapSo,
            },
        ];
        const config = {
            data,
            xField: 'name',
            yField: 'star',
            width: 80,
            height: 70,
            autoFit: false,
            maxAngle: maxAngleCapSo,
            //最大旋转角度,
            radius: 1,
            innerRadius: 0.5,
            colorField: 'star',
            color: ({ star }: any) => {
                if (star > 80) {
                    return '#35C75A';
                } else if (star > 30) {
                    return '#7E7D88';
                } else if (star <= 30) {
                    return '#F178B6'
                }

                return star;
            },
            barBackground: {},

        };
        return <RadialBar {...config} />;
    };
    return (
        <div>
            <div className='layout_Dashboard '>
                <div className='layout_Dashboard_Header row' >
                    <div className='layout_Dashboard_Header_Text col-8'>
                        <p>Dashboard</p>
                    </div>
                    <div className=' layout_Dashboard_Header_HoTen col-4'>
                        <Modal />
                    </div>
                    <div className='clear_both'></div>
                </div>
                <div className='row'>
                    <div className='col-8'>
                        <div className='layout_Dashboard_BieuDo'>Biểu đồ cấp số</div>
                        <div className='row' style={{ padding: '0px 45px' }}>

                            <div className="layout_Dashboard_STT col-3">
                                <Link to='/capso' style={{ textDecoration: 'none' }}>
                                    <div style={{ height: '61px' }}>
                                        <img className='layout_Dashboard_STT_img' src="./image/1.png" alt="" />
                                        <div className='layout_Dashboard_STT_text'>Số thứ tự đã cấp </div>
                                    </div>
                                    <div  >
                                        <div className='layout_Dashboard_STT_text_1'>4221</div>
                                        <div >
                                            <img className='layout_Dashboard_STT_img_1' src="./image/tang1.png" alt="" />
                                        </div>
                                    </div>
                                    <div className='clear_both'></div>
                                </Link>
                            </div>

                            <div className="layout_Dashboard_STT col-3">
                                <Link to='/capso' style={{ textDecoration: 'none' }}>
                                    <div style={{ height: '61px' }}>
                                        <img className='layout_Dashboard_STT_img' src="./image/2.png" alt="" />
                                        <div className='layout_Dashboard_STT_text'>Số thứ tự đã sử dụng</div>
                                    </div>
                                    <div  >
                                        <div className='layout_Dashboard_STT_text_1'>3721</div>
                                        <div >
                                            <img className='layout_Dashboard_STT_img_1' src="./image/tang2.png" alt="" />
                                        </div>
                                    </div>
                                    <div className='clear_both'></div>
                                </Link>
                            </div>
                            <div className="layout_Dashboard_STT col-3">
                                <Link to='/capso' style={{ textDecoration: 'none' }}>
                                    <div style={{ height: '61px' }}>
                                        <img className='layout_Dashboard_STT_img' src="./image/3.png" alt="" />
                                        <div className='layout_Dashboard_STT_text'>Số thứ tự đang chờ </div>
                                    </div>
                                    <div  >
                                        <div className='layout_Dashboard_STT_text_1'>462</div>
                                        <div >
                                            <img className='layout_Dashboard_STT_img_1' src="./image/tang3.png" alt="" />
                                        </div>
                                    </div>
                                    <div className='clear_both'></div>
                                </Link>
                            </div>
                            <div className="layout_Dashboard_STT col-3">
                                <Link to='/capso' style={{ textDecoration: 'none' }}>
                                    <div style={{ height: '61px' }}>
                                        <img className='layout_Dashboard_STT_img' src="./image/1.png" alt="" />
                                        <div className='layout_Dashboard_STT_text'>Số thứ tự đã bỏ qua </div>
                                    </div>
                                    <div  >
                                        <div className='layout_Dashboard_STT_text_1'>32</div>
                                        <div >
                                            <img className='layout_Dashboard_STT_img_1' src="./image/tang4.png" alt="" />
                                        </div>
                                    </div>
                                    <div className='clear_both'></div>
                                </Link>
                            </div>

                        </div>
                        <div style={{ padding: "19px 70px", marginLeft: '-25px' }}>
                            <MenuChart />
                            <Outlet />
                        </div>
                    </div>
                    <div className='col-4 bg-white layout_Dashboard_left'>
                        <div className='layout_Dashboard_TongQuan'>Tổng quan</div>
                        <div className='layout_Dashboard_menu'>
                            <Link to='/thietbi' style={{ textDecoration: 'none' }}>
                                <div className='layout_Dashboard_menu_charts' style={{ position: 'relative' }} >

                                    <ThietBiBar />
                                </div>
                                <div style={{ position: 'absolute', color: 'black', marginLeft: '25px', marginTop: '21px' }}>{phanTram1.toFixed(0)}%</div>
                                <div className='layout_Dashboard_menu_Thongso'>
                                    <div className='layout_Dashboard_menu_Thongso_text'>{daCap}</div>
                                    <div style={{ color: '#FF7506' }}><DesktopOutlined /> thiết bị</div>
                                </div>
                                <div className=''>
                                    <ul className='layout_Dashboard_menu_hoatdong_ul'>
                                        <li className='layout_Dashboard_menu_hoatdong_ul_li'> <img src="./image/chamvang.png" alt="" /> Đang hoạt động <strong>{daCapHD}</strong></li>
                                        <li className='layout_Dashboard_menu_hoatdong_ul_li'> <img src="./image/chamxam.png" alt="" /> ngưng hoạt động <strong>422</strong></li>
                                    </ul>
                                </div>
                            </Link>
                        </div>
                        <div className='layout_Dashboard_menu'>
                            <Link to='/dichvu' style={{ textDecoration: 'none' }}>
                                <div className='layout_Dashboard_menu_charts' style={{ position: 'relative' }} >

                                    <DichVuBar />
                                </div>
                                <div style={{ position: 'absolute', color: 'black', marginLeft: '25px', marginTop: '21px' }}>{phanTramDichVu.toFixed(0)}%</div>
                                <div className='layout_Dashboard_menu_Thongso' >
                                    <div className='layout_Dashboard_menu_Thongso_text'>{dichVu}</div>
                                    <div style={{ color: '#4277FF' }}><AiOutlineComment /> Dịch vụ</div>
                                </div>
                                <div className=''>
                                    <ul className='layout_Dashboard_menu_hoatdong_ul'>
                                        <li className='layout_Dashboard_menu_hoatdong_ul_li'> <img src="./image/chamxanh.png" alt="" /> Đang hoạt động <strong style={{ color: '#4277FF' }}>{dichVuHD}</strong></li>
                                        <li className='layout_Dashboard_menu_hoatdong_ul_li'> <img src="./image/chamxam.png" alt="" /> ngưng hoạt động <strong style={{ color: '#4277FF' }}>66</strong></li>
                                    </ul>
                                </div>
                            </Link>
                        </div>
                        <div className='layout_Dashboard_menu'>
                            <Link to='/capso' style={{ textDecoration: 'none' }}>
                                <div className='layout_Dashboard_menu_charts' style={{ position: 'relative' }} >
                                    <CapSoBar />
                                </div>
                                <div style={{ position: 'absolute', color: 'black', marginLeft: '25px', marginTop: '21px' }}>{phanTramCapSo.toFixed(0)}%</div>
                                <div className='layout_Dashboard_menu_Thongso'>
                                    <div className='layout_Dashboard_menu_Thongso_text'>{capSo}</div>
                                    <div style={{ color: '#35C75A' }}><BiLayer /> Cấp số </div>
                                </div>
                                <div className=''>
                                    <ul className='layout_Dashboard_menu_hoatdong_ul'>
                                        <li className='layout_Dashboard_menu_hoatdong_ul_li'> <img src="./image/chamxanh.png" alt="" /> Đang sử dụng <strong style={{ color: '#35C75A', marginLeft: '25px' }}>{capSoSD}</strong></li>
                                        <li className='layout_Dashboard_menu_hoatdong_ul_li'> <img src="./image/chamxam.png" alt="" /> Đang chờ <strong style={{ marginLeft: '45px', color: '#35C75A' }}>422</strong></li>
                                        <li className='layout_Dashboard_menu_hoatdong_ul_li'> <img src="./image/chamhong.png" alt="" /> Bỏ qua <strong style={{ marginLeft: '58px', color: '#35C75A' }}>32</strong></li>
                                    </ul>
                                </div>
                            </Link>
                        </div>
                        {/* calendar lịch  */}
                        <div className="site-calendar-demo-card">
                            <Calendar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashBoard