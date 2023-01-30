import React from 'react';
import Homepage from './home/homepage';

const Sidebar = () => {
  return (
    <>
    <div class=" fixed min-h-screen md:flex" data-dev-hint="container">
    <input type="checkbox" id="menu-open" class="hidden" />

    <label for="menu-open" class="absolute right-2 bottom-2 shadow-lg rounded-full p-2 bg-[#252526] text-gray-600 md:hidden" data-dev-hint="floating action button">
        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    </label>

    <header class="z-100 bg-[#252526] text-gray-100 flex justify-between md:hidden" data-dev-hint="mobile menu bar">
        <a href="#" class="block p-4 text-white font-bold whitespace-nowrap truncate">
            Your App is ol
        </a>

        <label for="menu-open" id="mobile-menu-button" class="m-2 p-2 focus:outline-none hover:text-white hover:bg-gray-700 rounded-md">
            <svg id="menu-open-icon" class="h-6 w-6 transition duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg id="menu-close-icon" class="h-6 w-6 transition duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </label>
    </header>

    <aside id="sidebar" class="bg-[#252526]  text-gray-100 md:w-64 w-3/4 space-y-6 pt-6 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out  md:flex md:flex-col md:justify-between overflow-y-auto" data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation">
        <div class="flex flex-col space-y-6" data-dev-hint="optional div for having an extra footer navigation">
            <a href="#" class="text-white flex items-center space-x-2 px-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 flex-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <span class="text-2xl font-extrabold whitespace-nowrap truncate">LOGO</span>
            </a>

            <nav data-dev-hint="main navigation">
            <div class="p-4 w-64 bg-[#252526]">
      <div class="w-full py-4 px-2 text-white bg-bg-[#252526] rounded-lg text-left capitalize font-medium ">
       
        <span class="cursor-pointer px-2 py-1 hover:bg-gray-800 hover:text-gray-300 rounded block mb-5">
          <i class="w-8 fas fa-stream p-2 bg-gray-800 rounded-full">
          </i>
          <span class="mx-2">categories</span>
        </span>
        <span class="cursor-pointer px-2 py-1 hover:bg-gray-800 hover:text-gray-300 rounded block mb-5">
          <i class="w-8 fas fa-search p-2 bg-gray-800 rounded-full">
          </i>
          <span class="mx-2">search</span>
        </span>
        <span class="cursor-pointer px-2 py-1 hover:bg-gray-800 hover:text-gray-300 rounded block mb-5">
          <span class="w-8 mb-5 relative">
            <i class="w-8 fas fa-user p-2 bg-gray-800 rounded-full">
            </i>
            <span
              class="absolute right-0 top-0 -mt-2 -mr-1 text-xs bg-yellow-500 text-black font-medium px-2 rounded-full">3</span>
          </span>
          <span class="mx-2">sign ups</span>
        </span>
        <span class="cursor-pointer px-2 py-1 hover:bg-gray-800 hover:text-gray-300 rounded block mb-5">
          <i class="w-8 fas fa-th p-2 bg-gray-800 rounded-full">
          </i>
          <span class="mx-2">menu</span>
        </span>
        <span class="cursor-pointer px-2 py-1 hover:bg-gray-800 hover:text-gray-300 rounded block mb-5">
          <i class="w-8 fas fa-calendar-alt p-2 bg-gray-800 rounded-full">
          </i>
          <span class="mx-2">calendar</span>
        </span>
      </div>
    </div>
            </nav>
        </div>

        <nav data-dev-hint="second-main-navigation or footer navigation">
            <a href="#" class="block py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                asd
            </a>
            <a href="#" class="block py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                asd
            </a>
            <a href="#" class="block py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                asd
            </a>
        </nav>
    </aside>

   
</div>
    </>
  );
}

export default Sidebar;
