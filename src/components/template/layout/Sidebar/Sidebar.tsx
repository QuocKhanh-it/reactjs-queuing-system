import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import { Layout, Menu, Switch } from 'antd';
import { BsColumnsGap, BsFileEarmarkBarGraph, BsOctagon } from "react-icons/bs";
import { BiLayer } from "react-icons/bi";
import { IoEllipsisVerticalOutline } from "react-icons/io5";
import { AiOutlineComment, AiOutlineExport } from "react-icons/ai";
import { DesktopOutlined, MailOutlined, } from '@ant-design/icons'
import "./Sidebar.css";
import 'antd/dist/antd.css';
import Cty from '../../../../assets/images/Logoalta.png';


const { SubMenu } = Menu;

const { Sider } = Layout;

const SidebarData = [
    {
        title: "Dashboard",
        path: "/",
        icon: <BsColumnsGap />
    },
    {
        title: "Thiết bị ",
        path: "/thietbi",
        icon: <DesktopOutlined />
    },
    {
        title: "Dịch vụ",
        path: "/dichvu",
        icon: <AiOutlineComment />
    },
    {
        title: "Cấp số",
        path: "/capso",
        icon: <BiLayer />
    },
    {
        title: "Báo cáo",
        path: "/baocao",
        icon: <BsFileEarmarkBarGraph />
    },
]

const Sidebar = () => {
    const [theme, setTheme] = React.useState('light');
    const [current, setCurrent] = React.useState('1');

    const handleClick = (e: any) => {
        setCurrent(e.key);
    };
    return (
        <div >

            <Sider >
                <div className="Sidebar_logo" >
                    <img className='Sidebar_logo_img' width={80} src={Cty} alt="" />
                </div>
                <Menu
                    onClick={handleClick}
                    style={{ width: 200 }}
                    defaultOpenKeys={['sub1']}
                    selectedKeys={[current]}
                    mode="vertical"
                    theme="dark"
                >
                    {SidebarData.map((item, index) => {
                        return (
                            <Menu.Item key={index} >
                                <Link to={`${item.path}`}>
                                    {item.icon} {item.title}
                                </Link>
                            </Menu.Item>
                        )
                    })}
                    <SubMenu style={{ background:'#FFFFFF',color:'#FF7506' }} key="sub1" icon={<BsOctagon />}  title="Cài đặt hệ thống" >
                        <Menu.Item key="6">
                            <Link to={'/quanlyvaitro'}>Quản lý vai trò </Link>
                        </Menu.Item>    
                        <Menu.Item key="7">
                            <Link to={'/quanlytaikhoan'}>Quản lý tài khoản </Link>
                        </Menu.Item>
                        <Menu.Item key="8">
                            <Link to={'/nhatkynguoidung'}>Nhật ký người dùng </Link>
                        </Menu.Item>
                    </SubMenu>

                </Menu>
                <div className='Siderbar_Logout'>
                    <Link className='Siderbar_Logout_Link' to={`/login`}> <strong style={{ marginRight: "10px", fontSize: "20px" }}> <AiOutlineExport /></strong> <strong>Đăng xuất</strong></Link>
                </div>

            </Sider>


        </div>
    )
}
export default Sidebar