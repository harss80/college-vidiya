import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import MockCallEvaluator from './components/MockCallEvaluator';

const Layout = () => {
  return (
    <div className="font-sans antialiased min-h-screen text-slate-800 bg-[#f4f7fa] selection:bg-primary-100 selection:text-primary-900">
      <Navbar />
      <main className="relative z-10 w-full pt-[72px]">
        <Outlet />
      </main>
      <MockCallEvaluator />
    </div>
  );
};

export default Layout;
