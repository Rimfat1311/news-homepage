import React from 'react'
import imgf from '../assets/images/img2.jpg'
import imgs from '../assets/images/img3.jpg'
import imgt from '../assets/images/img4.jpg'

const News = () => {
    return (
        <div className='w-full px-20 py-10 '>
            <div className='flex gap-10 h-[35%] '>
                <div className='flex gap-5 w-1/2'>
                    <div className='w-1/3 bg-yellow-300'>
                        <img src={imgf} alt="" />
                    </div>
                    <div className='w-2/3 bg-yellow-100'>second</div>
                </div>
                <div className='flex gap-5 w-1/2  '>
                    <div className='w-1/3 bg-green-300'>
                        <img src={imgs} alt="" />
                    </div>
                    <div className='w-2/3 bg-green-100'>second</div>
                </div>
                <div className='flex gap-5 w-1/2'>
                    <div className='w-1/3 bg-red-300'>
                        <img src={imgt} alt="" />
                    </div>
                    <div className='w-2/3 bg-red-100'>second</div>
                </div>
            </div>
        </div>
    )
}

export default News