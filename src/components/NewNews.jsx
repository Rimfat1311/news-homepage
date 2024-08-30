import React, { useState } from 'react';

const NewNews = ({ onAddBlog }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    if (!title || !content || !file) {
      setMessage('All fields are required.');
      return;
    }

    // Create a new blog object
    const newBlog = {
      title,
      content,
      image: URL.createObjectURL(file), // Create a temporary URL for the image
      author: 'Your Name', // You can adjust or get this dynamically
      publishedAt: new Date().toISOString(),
    };

    // Call the onAddBlog function to add the new blog
    onAddBlog(newBlog);

    // Clear the form
    setTitle('');
    setContent('');
    setFile(null);
    setMessage('News created successfully!');
  };

  return (
    <div className="container mx-auto p-6 px-20">
      <h1 className="text-3xl font-bold mb-4">Create New News</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-lg font-medium mb-2">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 p-2 w-full rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="content" className="block text-lg font-medium mb-2">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border border-gray-300 p-2 w-full h-40 rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="file" className="block text-lg font-medium mb-2">Upload Image</label>
          <input
            type="file"
            id="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
            className="border border-gray-300 p-2 w-full rounded"
            required
          />
        </div>
        {message && <p className="text-red-500">{message}</p>}
        <button
          type="submit"
          className="bg-[#F44B3D] text-white py-2 px-4 rounded hover:bg-[#d73a2d]"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewNews;
