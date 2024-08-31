
import { useEffect, useState } from "react";
import loader from '../assets/spinner.png'
const News = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetch(
      "https://newsapi.org/v2/everything?q=bitcoin&apiKey=65b45edc0d5d4f90ad82ceb6327218d5&pageSize=30"
    )
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data.articles);
        setIsLoading(false)
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
      <hr className="my-2 pb-10 border-gray-600 " />
      {isLoading && (
        <div className="w-full h-[400px] flex items-center justify-center">
          <img src={loader} alt="" />
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {blogs && blogs.map((blog, index) => (
          <div key={index} className="flex flex-col p-5 bg-slate-200 rounded-lg">
            <p className="max-h-40 overflow-hidden"> <img src={blog.urlToImage} alt="" /></p>
            <h2 className="font-bold">{blog.title}</h2>
            {/* <h3>{blog.content}</h3>  */}
            <h4 className="max-h-20 overflow-hidden">{blog.description} </h4>
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

