import React from 'react';

const Layout = () => {

  return (
    <div className="flex h-full w-full">
      <div className="flex-1 bg-blue-500 h-full"></div>
      <div className="flex-[2_2_0%] bg-[url('/assets/zombie-bg.webp')] bg-cover h-full">
      <img src="" alt="" />
      </div>
      <div className="flex-1 bg-green-500 h-full"></div>
    </div>
  );
};

export default Layout;