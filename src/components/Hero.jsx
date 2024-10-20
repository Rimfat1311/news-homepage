// my hero coponent structure
import React from 'react'
import img from '../assets/images/img1.jpg'
const Hero = () => {
    return (
        <div className='w-full   h-full'>
            <div className='h-full w-full '>
                <div className='flex flex-col md:flex-row h-full px-20  gap-5'>
                    <div className='flex flex-col  w-full md:flex-col md:w-2/3 md:gap-5 sm:flex-row'>
                        <div className='h-1/2  '>
                            <img src={img} alt="" />
                        </div>

                        <div className='flex flex-col md:flex-row h-full py-5 md:gap-8 md:h-1/2'>
                            <div className='md:w-[46%] w-full font-bold md:text-7xl text-2xl'>The Brigt Future of Web 3.0?</div>
                            <div className='md:w-1/2 w-full'>
                                <p>we dive into the next evolution of the web that claims to put the power of the platforms back in to the hands of the people. But is  it really fulfilling its promise?</p>
                                <button className='bg-[#F44B3D] text-white my-10 py-5 px-10 space-x-4 from-neutral-200'>READ MORE</button>
                            </div>
                        </div>


                    </div>

                    <div className='bg-black w-full md:w-1/3 p-8'>
                        <span className=' text-[#F8AA3E] font-bold text-3xl mt-5'>New</span>
                        <div className='text-gray-200 pt-5'>
                            <h1 className='font-bold py-1 pt-5'>Hydrogen VS Electric Cars</h1>
                            <p>Will Hydrogen-fueled cars ever catch up to EVs?</p>
                            <hr className="my-8  border-gray-600 "/>
                            <h1 className='font-bold py-1'>The Downsides of AI Artistry</h1>
                            <p>What are the possible adverse effects of on-demand AI image generation</p>
                            <hr className="my-8 border-gray-600 "/>
                            <h1 className='font-bold py-1'>Is VC Funding Drying Up?</h1>
                            <p>Private fundind by VC firms is down 50% YOY. take a look at what that means.</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero