import React from 'react'
import img from '../assets/images/img1.jpg'
const Hero = () => {
  return (
    <div className='container w-100 md:w-375  h-screen sm:flex flex-wrap'>
      <div className='h-screen w-100 '>
        <div className='flex h-full px-20  gap-5 '>
          <div className='flex flex-col gap-5  w-2/3'>
            <div className='h-1/2 bg-red-200 '>
              <img src={img} alt="" />
            </div>
            
              <div className='flex gap-16 h-1/2 py-5'>
                <div className='w-[46%] font-bold text-7xl'>The Brigt Future of Web 3.0?</div>
                <div className='w-1/2'>
                <p>we dive into the next evolution of the web that claims to put the power of the platforms back in to the hands of the people. But is  it really fulfilling its promise?</p>
                <button className='bg-[#F44B3D] text-white my-10 py-5 px-10 space-x-4 from-neutral-200'>READ MORE</button>
                </div>
              </div>
              

            </div>
        
          <div className='bg-black w-1/3'>box-2</div>
        </div>
      </div>
    </div>
  )
}

export default Hero