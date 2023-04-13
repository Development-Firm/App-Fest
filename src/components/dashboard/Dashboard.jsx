import React from 'react'
import Cookies from 'js-cookie'
import './Dashboard.css'
import {
  UserOutlined,
  LogoutOutlined,
  VideoCameraOutlined,
  SearchOutlined,
  CalendarOutlined,
  FileTextOutlined
} from '@ant-design/icons'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Avatar, Dropdown, Collapse } from 'antd'
import { StarsCanvas } from '../canvas'
const { Panel }=Collapse

const Dashboard=() => {
  const location=useLocation()
  let navigate=useNavigate()
  const handleLogout=e => {
    e.preventDefault()
    Cookies.remove( 'jwt' )
    navigate( '/login' )
  }
  const items=[
    {
      key: '1',
      label: (
        <span onClick={handleLogout}>
          <LogoutOutlined />
          &nbsp;Logout
        </span>
      )
    }
  ]

  return (
    <>
      <div style={{ background: 'rgb(245,245,245)' }}>
        <div className='header_main'>
          <span style={{ fontWeight: 'bold', color: '#050816' }}>Welcome, Admin</span>
          <div>
            <Dropdown
              menu={{
                items
              }}
              placement='bottom'
            >
              <Avatar size='medium' icon={<UserOutlined />} />
            </Dropdown>
          </div>
        </div>
        <div className='main'>
          <div className='left-bar bg-[#050816]'>
            <div
              style={{
                padding: '3rem 0rem',
                fontSize: '2rem',
                fontWeight: 'bold',
                textAlign: 'center'
              }}
            >
              Dashboard
            </div>
            <div className='left-content'>
              <ul className='action-list'>

                <li className='item text-white'>
                  <Link
                    to='/dashboard/approved_teams'
                    style={{ textDecoration: 'none', color: 'black' }}
                    className={`${location.pathname.endsWith( 'approved_teams' )
                      ? 'side_active'
                      :''
                      }`}
                  >
                    <span style={{ color: 'white' }}> <UserOutlined style={{ color: 'white' }} />Approved Teams</span>
                  </Link>
                </li>


                <li className='item text-white'>
                  <Link
                    to='/dashboard/applicants'
                    style={{ textDecoration: 'none', color: 'black' }}
                    className={`${location.pathname.endsWith( 'applicants' )
                      ? 'side_active'
                      :''
                      }`}
                  >
                    <span style={{ color: 'white' }}> <UserOutlined style={{ color: 'white' }} />Applicants</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='page-content '>
            <Outlet />
            <StarsCanvas />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
