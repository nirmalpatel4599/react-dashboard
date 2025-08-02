import React from 'react';
import './MainLayout.scss';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main className='main-layout' style={{ padding: '24px', flex: 1 }}>{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
