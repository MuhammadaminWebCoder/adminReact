import React from 'react'
import { Menu } from 'antd'
import {routes} from '../hooks/useRoute'
import { Link } from 'react-router-dom'
import getToken from '../hooks/getToken'
const Navbar = () => {
  const {hideMenu} = getToken()
  const menuList = routes.map(item => {
    const data = {
        key: item.id,
        label:<Link className='pl-2 text-[15px]' to={item.path}> {item.title} </Link>,
        icon:item.icon,
    }
    return data
  })

  return (
    <Menu
      className={`${hideMenu ? '' : '!w-[20%]'} h-[100vh] overflow-y-auto`}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode='inline'
      theme='dark'
      inlineCollapsed={hideMenu}
      items={menuList}
    />
  )
}

export default Navbar
