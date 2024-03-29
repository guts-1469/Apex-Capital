 import React from 'react';
 import { Button, Menu, Typography, Avatar } from 'antd';
 import { Link } from 'react-router-dom';
 import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons'; 
 import icon from '../images/apexCapital.jpeg';

 const Navbar = () => {
   return (
     <div className='nav-container'>
         <div className='logo-container'>
          <div className='nav-header'>
          <Avatar src={icon} size='large'/>
             <Typography.Title level={2} className='logo'>
                 <Link to='/'>Apex Capital</Link>
             </Typography.Title>
          </div>
             <div>
               <Menu theme='dark'>
                 <Menu.Item icon={<HomeOutlined/>}>
                   <Link to='/'>Home</Link>
                 </Menu.Item>
                 <Menu.Item icon={<FundOutlined/>}>
                   <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
                 </Menu.Item>
                 <Menu.Item icon={<BulbOutlined/>}>
                   <Link to='/news'>News</Link>
                 </Menu.Item>
               </Menu>
             </div>

         </div>
     </div>
   )
 }
 
 export default Navbar