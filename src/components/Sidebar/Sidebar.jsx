import React, { useState } from 'react';
import './Sidebar.scss';
import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiMessageSquare, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaTasks } from "react-icons/fa";
import { RiErrorWarningLine } from "react-icons/ri";
import { FaWpforms } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { PiBrowser } from "react-icons/pi";
import { GrTemplate } from "react-icons/gr";
import { TbUsers } from "react-icons/tb";
import { MdOutlineInsertChart } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <aside
    className='sidebar'
      style={{
        width: collapsed ? '60px' : '200px',
        padding: '12px',
        background: 'transparent',
        transition: 'width 0.3s ease',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: collapsed ? 'center' : 'flex-start',
        height: '100%',
        minHeight: 'calc(100vh - 56px)'
      }}
    >
      <nav style={{ flex: 1, width: '100%' }}>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>
            <Link
              className='active'
              to="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                justifyContent: collapsed ? 'center' : 'start'
              }}
            >
              <FiHome />
              {!collapsed && <span>Home</span>}
            </Link>
          </li>
          <li>
            <Link
              to="/chat"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                
                justifyContent: collapsed ? 'center' : 'start'
              }}
            >
              <FaTasks />
              {!collapsed && <span>Tasks</span>}
            </Link>
          </li>
          <li>
            <Link
              to="#"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                
                justifyContent: collapsed ? 'center' : 'start'
              }}
            >
              <RiErrorWarningLine />
              {!collapsed && <span>Issues</span>}
            </Link>
          </li>
          <li>
            <Link
              to="#"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                
                justifyContent: collapsed ? 'center' : 'start'
              }}
            >
              <FaWpforms />
              {!collapsed && <span>Forms</span>}
            </Link>
          </li>
          <li>
            <Link
              to="#"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                
                justifyContent: collapsed ? 'center' : 'start'
              }}
            >
              <SlCalender />
              {!collapsed && <span>Calendar</span>}
            </Link>
          </li>
          <li>
            <Link
              to="#"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                
                justifyContent: collapsed ? 'center' : 'start'
              }}
            >
              <PiBrowser />
              {!collapsed && <span>Browse Templates</span>}
            </Link>
          </li>
          <li>
            <Link
              to="#"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                
                justifyContent: collapsed ? 'center' : 'start'
              }}
            >
              <GrTemplate />
              {!collapsed && <span>Temlate Library</span>}
            </Link>
          </li>
          <li>
            <Link
              to="#"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                
                justifyContent: collapsed ? 'center' : 'start'
              }}
            >
              <TbUsers />
              {!collapsed && <span>User Management</span>}
            </Link>
          </li>
          <li>
            <Link
              to="#"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                
                justifyContent: collapsed ? 'center' : 'start'
              }}
            >
              <MdOutlineInsertChart />
              {!collapsed && <span>Reports</span>}
            </Link>
          </li>
          <li>
            <Link
              to="#"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                
                justifyContent: collapsed ? 'center' : 'start'
              }}
            >
              <CiSettings />
              {!collapsed && <span>Settings</span>}
            </Link>
          </li>
          <li>
            <Link
              to="#"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                
                justifyContent: collapsed ? 'center' : 'start'
              }}
            >
              <IoIosLogOut />
              {!collapsed && <span>Log Out</span>}
            </Link>
          </li>
        </ul>

        <div className="sidebar-bottom">
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>
              <Link
                to="#"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  textDecoration: 'none',
                  justifyContent: collapsed ? 'center' : 'start'
                }}
              >
                <IoChatbubbleEllipsesOutline />
                {!collapsed && <span>Chat</span>}
              </Link>
            </li>
            <li>
              <Link
                className='profile'
                to="#"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  textDecoration: 'none',
                  justifyContent: collapsed ? 'center' : 'start'
                }}
              >
                <div className="profile-icon">
                  <h5>A</h5>
                </div>
                {!collapsed && 
                  <div className="profile-name">
                    <h6>Ajay</h6>
                    <p>Manager</p>
                  </div>
                }
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Toggle Button */}
      <button
        className='toggle-btn'
        onClick={toggleSidebar}
        style={{
          border: 'none',
          background: '#ffffff',
          cursor: 'pointer',
          padding: '6px',
          // alignSelf: collapsed ? 'center' : 'flex-end',
        }}
      >
        {collapsed ? <FiChevronRight  /> : <FiChevronLeft />}
      </button>
    </aside>
  );
};

export default Sidebar;
