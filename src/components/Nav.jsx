// import React from 'react'
// import Logo from '../assets/icons/Logo'

// const Nav = () => {
//   return (
//       <div className='flex justify-between px-20 py-10 cursor-pointer'>
//             <Logo />
//           <ul className='flex space-x-5 '>
//               <li>Home</li>
//               <li>New</li>
//               <li>Popular</li>
//               <li>Trending</li>
//               <li>Categories</li>
//           </ul>
//       </div>
//   )
// }

// export default Nav


import React, { useState } from 'react';
import Logo from '../assets/icons/Logo';
import { FaBars, FaTimes } from 'react-icons/fa'; // Correct import

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='relative flex justify-between items-center px-4 py-6 md:px-20 md:py-20'>
            <Logo />

            {/* Menu Toggle Icon */}
            <div className='md:hidden cursor-pointer' onClick={toggleMenu}>
                {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {/* Menu Items */}
            <ul className={`absolute top-full left-24 w-full bg-white md:flex md:space-x-5 md:static md:h-full md:bg-transparent md:opacity-100 md:flex-row ${isOpen ? 'block' : 'hidden'} md:block md:opacity-100`}>
                <li className='py-2 px-4 hover:bg-gray-200 transition rounded'>
                    <a href="#">Home</a>
                </li>
                <li className='py-2 px-4 hover:bg-gray-200 transition rounded'>
                    <a href="#">New</a>
                </li>
                <li className='py-2 px-4 hover:bg-gray-200 transition rounded'>
                    <a href="#">Popular</a>
                </li>
                <li className='py-2 px-4 hover:bg-gray-200 transition rounded'>
                    <a href="#">Trending</a>
                </li>
                <li className='py-2 px-4 hover:bg-gray-200 transition rounded'>
                    <a href="#">Categories</a>
                </li>
            </ul>
        </div>
    );
};

export default Nav;
