import React from 'react';

const Blogs = ({ blogs }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md px-20">
      <h1 className="text-2xl font-bold text-blue-950 text-center mb-4">
         Blog Posts
      </h1>
      <div></div>
      <hr className="my-2 pb-4 border-gray-600" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div key={index} className="flex flex-col p-5 bg-slate-200 rounded-lg">
            {blog.image && (
              <p className="mb-2">
                <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover rounded" />
              </p>
            )}
            <h2 className="font-bold text-lg mb-2">{blog.title}</h2>
            <p className="mb-2">{blog.content}</p>
            <p className="font-bold mb-2">Author: {blog.author || 'Unknown'}</p>
            <h6 className="mb-2">Published At: {new Date(blog.publishedAt).toLocaleDateString()}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
