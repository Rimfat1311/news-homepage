// import React from 'react'
// import imgf from '../assets/images/img2.jpg'
// import imgs from '../assets/images/img3.jpg'
// import imgt from '../assets/images/img4.jpg'

// const News = () => {
//     return (
//         <div className='w-full px-20 py-10'>
//             <div className='flex h-[35%] gap-10 md:flex-row flex-col'>
//                 <div className='flex md:gap-5 md:w-1/2 w-full md:flex-row flex-col '>
//                     <div className='md:w-1/3 w-full'>
//                         <img src={imgf} alt="" />
//                     </div>
//                     <div className='md:w-2/3 w-full bg-yellw-100'>
//                         <span className='font-bold text-4xl text-[#F44B3D]'>01</span>
//                         <h1 className='pt-2 my-2 font-bold'>Reviving Retro PCs</h1>
//                         <p>What happens when old PCs are given modern upgrades?</p>
//                     </div>
//                 </div>
//                 <div className='flex md:gap-5 md:w-1/2 w-full md:flex-row flex-col '>
//                     <div className='md:w-1/3 w-full'>
//                         <img src={imgs} alt="" />
//                     </div>
//                     <div className='md:w-2/3 w-full bg-yellw-100'>
//                         <span className='font-bold text-4xl text-[#F44B3D]'>02</span>
//                         <h1 className='pt-2 my-2 font-bold'>Top 10 Laptops of 2022</h1>
//                         <p>Our best picks for various need and budget.</p>
//                     </div>
//                 </div>
//                 <div className='flex md:gap-5 md:w-1/2 w-full md:flex-row flex-col '>
//                     <div className='md:w-1/3 w-full'>
//                         <img src={imgt} alt="" />
//                     </div>
//                     <div className='md:w-2/3 w-full bg-yellw-100'>
//                         <span className='font-bold text-4xl text-[#F44B3D]'>03</span>
//                         <h1 className='pt-2 my-2 font-bold'>The Growth of Gaming</h1>
//                         <p>how the pandemic has sparked fresh opportunities.</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default News
import { useEffect, useState } from "react";

const News = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=bitcoin&apiKey=65b45edc0d5d4f90ad82ceb6327218d5&pageSize=9"
    )
     .then((response) => response.json())
      .then((data) => {
        setBlogs(data.articles);
        console.log("this is what i logging", data);
      })
      .catch((error) => {
        console.error("Error fetching the news:", error);
      });
  }, []);

  return (
    <div className="w-full h-screen bg-white p-16">
      <h1 className="md:text-3xl text-2xl font-bold text-blue-950 text-center mt-2 mb-8">
        Welcome to Our Blog
      </h1>
      <hr className="my-2 pb-10 border-gray-600 "/>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs && blogs.map((blog, index) => (
          <div key={index} className="flex flex-col p-5 bg-slate-200 rounded-lg">
             <p className="h-{80%}"> <img src={blog.urlToImage} alt="" /></p>
             <h2 className="font-bold">{blog.title}</h2> 
            {/* <h3>{blog.content}</h3>  */}
           <h4>{blog.description} </h4> 
             <h5>{blog.id}</h5> 
             <p className="font-bold"> Author: {blog.author}</p>
              <h6>publishedAt: {blog.publishedAt}</h6>  
            
            <a href={blog.url} className="px-5 text-center py-2 bg-[#F44B3D] text-white hover:bg-gray-500 
        focus:outline-none focus:ring-5 focus:ring-gray-500 focus:ring-offset-5">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News; 

