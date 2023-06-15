
import {Layout} from 'antd';
import Sidebar from './Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import './Menu.css';



export const Menu = () => {
  return (
    <div>
         <Layout className='Layout_Menu' >
            <Sidebar/>
            <Outlet />
         </Layout>
    </div>
  )
}
