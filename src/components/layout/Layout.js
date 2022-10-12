import React from 'react';
import Sidebar from './SideBar';

const Layout = ({ children }) => {
  return (
    <div className="relative flex flex-1">
      <Sidebar />
      {children}
    </div>
  );
};

export default Layout;
