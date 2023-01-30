import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import MetaMask from './metamask';

const Header = () => {

    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
      };
    
      const onClose = () => {
        setOpen(false);
      };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
      />
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
      />
      <nav class="fixed ml-64 navbar-width lg:flex hidden top-0  z-50   items-center  px-2 py-3  bg-[#2c2c2c]">
        <header class="navbar-width header  top-0 navbar-expand-lg flex-wrap bg-[#2c2c2c] flex items-center justify-between px-8 py-02">
          <ul class="flex items-center ">
            <li class=" items-center">
              <i class="fas fa-random p-2 text-[#626262]"></i>
              <i class="fas fa-backward p-2 text-[#626262]"></i>
              <i class="fas fa-play p-2 text-[#626262]"></i>
              <i class="fas fa-forward p-2 text-[#626262]"></i>
              <i class="fas fa-stop p-2 text-[#626262]"></i>
            </li>
          </ul>
          <ul class="flex items-center ">
          <li class="flex items-center">
               <i class="fas fa-search bg-white -mr-8 z-50"></i>
              
              <input type="search" name="q" class="py-2 text-sm text-white bg-gray-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search..." autocomplete="off"/>    
            </li>
          </ul>

          <ul class="flex flex-col lg:flex-row list-none   mr-6 items-center">
            

            <li>
              <span class="px-1 hover:text-gray-800 cursor-pointer w-8 relative" onClick={showDrawer}>
                <i class="fas fa-bell p-2 bg-white rounded-full"></i>
                <span class="absolute right-0 top-0 -mt-2 -mr-1 text-xs bg-red-500 text-white font-medium px-2 shadow-lg rounded-full">
                  3
                </span>
              </span>
              <Drawer placement="right" onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
            </li>
            
            {/* <li>
              <span class="hover:text-gray-800 cursor-pointer w-10 relative float-right mr-3">
                <i class="fas fa-user p-2 bg-white rounded-full"></i>
                <span class="absolute right-0 top-0 -mt-1 -mr-1 text-xs bg-yellow-500 text-black font-medium px-2 rounded-full">
                  3
                </span>
              </span>
            </li> */}
           
            <li class="flex items-center">
             <MetaMask/>
            </li>
          </ul>
        </header>
      </nav></>
  );
};

export default Header;
