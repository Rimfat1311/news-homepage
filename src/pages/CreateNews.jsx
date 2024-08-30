import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import NewNews from '../components/NewNews';

const CreateNews = () => {
  // Define the handleAddBlog function
  const handleAddBlog = (newBlog) => {
    // Handle the logic for adding a new blog here
    console.log('New blog added:', newBlog);
  };

  return (
    <div>
      <Nav />
      <NewNews onAddBlog={handleAddBlog} />
      <Footer />
    </div>
  );
};

export default CreateNews;
