import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, UserCircle, Bell, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-slate-200 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[72px]">
          {/* Logo Section */}
          <div className="flex items-center gap-6">
            <NavLink to="/" className="flex items-center gap-3 group">
              <img src="/logo.png" alt="College Vidya Logo" className="h-[36px] md:h-[46px] object-contain" />
              <div className="hidden md:flex flex-col border-l-2 border-slate-300 pl-3 ml-1 leading-none py-1">
                 <span className="text-slate-800 font-black text-[15px] tracking-wide uppercase">Employee</span>
                 <span className="text-primary-600 font-bold text-[13px] tracking-wider uppercase">Mock Call Simulator</span>
              </div>
            </NavLink>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 pl-6 ml-2 h-8">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `px-4 py-2 rounded-md text-sm font-bold transition-all ${
                    isActive 
                      ? 'text-primary-600 bg-primary-50' 
                      : 'text-slate-600 hover:text-primary-600 hover:bg-slate-50'
                  }`
                }
              >
                Dashboard
              </NavLink>
              <NavLink 
                to="/mock-calls" 
                className={({ isActive }) => 
                  `px-4 py-2 rounded-md text-sm font-bold transition-all ${
                    isActive 
                      ? 'text-primary-600 bg-primary-50' 
                      : 'text-slate-600 hover:text-primary-600 hover:bg-slate-50'
                  }`
                }
              >
                University Data Tool
              </NavLink>
            </div>
          </div>

          {/* Right Action Section */}
          <div className="flex items-center gap-2 md:gap-4">
             <button className="hidden md:flex text-slate-400 hover:text-primary-600 p-2 rounded-full hover:bg-slate-100 transition-colors relative">
               <Bell size={20} />
               <span className="absolute top-1 right-2 w-2 h-2 bg-accent-500 rounded-full"></span>
             </button>
             
             <button className="flex items-center gap-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-bold transition-all">
               <UserCircle className="w-4 h-4 md:w-[18px] md:h-[18px] text-primary-600" />
               <span className="hidden sm:block">My Profile</span>
             </button>

             {/* Hamburger Toggle */}
             <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                className="md:hidden text-slate-600 p-2 ml-1"
             >
               {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
             </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
         <div className="md:hidden border-t border-slate-200 bg-white">
           <div className="px-4 pt-2 pb-6 space-y-2">
              <NavLink 
                to="/" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) => 
                  `block px-4 py-3 rounded-md text-sm font-bold transition-all ${
                    isActive 
                      ? 'text-primary-600 bg-primary-50' 
                      : 'text-slate-600 hover:text-primary-600 hover:bg-slate-50'
                  }`
                }
              >
                Dashboard
              </NavLink>
              <NavLink 
                to="/mock-calls" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) => 
                  `block px-4 py-3 rounded-md text-sm font-bold transition-all ${
                    isActive 
                      ? 'text-primary-600 bg-primary-50' 
                      : 'text-slate-600 hover:text-primary-600 hover:bg-slate-50'
                  }`
                }
              >
                University Data Tool
              </NavLink>
              
              <div className="border-t border-slate-100 mt-2 pt-2">
                 <button className="w-full text-left px-4 py-3 flex items-center justify-between text-slate-600 font-bold hover:bg-slate-50 rounded-md">
                    Notifications
                    <div className="bg-accent-500 text-white text-[10px] px-2 py-0.5 rounded-full">3 New</div>
                 </button>
              </div>
           </div>
         </div>
      )}
    </nav>
  );
};

export default Navbar;
