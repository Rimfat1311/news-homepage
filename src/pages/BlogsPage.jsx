import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import Blogs from '../components/Blogs';
import NewNews from '../components/NewNews';
import Footer from '../components/Footer';

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);

  // Fetch initial blog posts
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=bitcoin&apiKey=65b45edc0d5d4f90ad82ceb6327218d5&pageSize=9"
    )
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data.articles);
      })
      .catch((error) => {
        console.error("Error fetching the news:", error);
      });
  }, []);

  // Function to add a new blog
  const handleAddBlog = (newBlog) => {
    setBlogs((prevBlogs) => [newBlog, ...prevBlogs]);
  };

  return (
    <div>
      <Nav />
      <NewNews onAddBlog={handleAddBlog} />
      <Blogs blogs={blogs} /> 
      <Footer />
    </div>
  );
};

export default BlogsPage;
