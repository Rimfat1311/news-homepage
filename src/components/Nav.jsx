import React from 'react'
import Logo from '../assets/icons/Logo'



const Nav = () => {
  return (
      <div className='flex justify-between px-20 py-10 cursor-pointer'>
            <Logo />
          
            
          <ul className='flex space-x-5 '>
              <li>Home</li>
              <li>New</li>
              <li>Popular</li>
              <li>Trending</li>
              <li>Categories</li>
          </ul>

      </div>
  )
}

export default Nav