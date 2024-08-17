import React from 'react'
import imgf from '../assets/images/img2.jpg'
import imgs from '../assets/images/img3.jpg'
import imgt from '../assets/images/img4.jpg'

const News = () => {
    return (
        <div className='w-full px-20 py-10 '>
            <div className='flex gap-10 h-[35%] '>
                <div className='flex gap-5 w-1/2'>
                    <div className='w-1/3'>
                        <img src={imgf} alt="" />
                    </div>
                    <div className='w-2/3 bg-yellow-100'>
                        <span className='font-bold text-4xl text-[#F44B3D]'>01</span>
                        <h1 className='font-bold'>Reviving Retro PCs</h1>
                        <p>What happens when old PCs are given modern upgrades?</p>
                    </div>
                </div>
                <div className='flex gap-5 w-1/2  '>
                    <div className='w-1/3'>
                        <img src={imgs} alt="" />
                    </div>
                    <div className='w-2/3 bg-green-100'>
                        <span className='font-bold text-4xl text-[#F44B3D]'>02</span>
                        <h1 className='font-bold'>Top 10 Laptops of 2022</h1>
                        <p>Our best picks for various need and budget.</p>
                    </div>
                </div>
                <div className='flex gap-5 w-1/2'>
                    <div className='w-1/3'>
                        <img src={imgt} alt="" />
                    </div>
                    <div className='w-2/3 bg-red-100'>
                        <span className='font-bold text-4xl text-[#F44B3D]'>03</span>
                        <h1 className='font-bold'>The Growth of Gaming</h1>
                        <p>how the pandemic has sparked fresh opportunities.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News