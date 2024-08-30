// import React from 'react'
// import Nav from './components/Nav'
// import Hero from './components/Hero'
// import News from './components/News'
// import Footer from './components/Footer'

// const App = () => {
//   return (
//     <div>
//       <Nav />
//       <Hero />
//       <News />
//     </div>
//   )
// }

// export default App
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CreateNews from './pages/CreateNews';
import Home from './pages/Home';

import BlogsPage from './pages/BlogsPage';

const App = () => {
  return (
    <Router>
      <div>
    
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/CreateNews" element={<CreateNews />} />
          <Route path="/BlogsPage" element={<BlogsPage />} />
        </Routes>
      
      </div>
    </Router>
  );
};

export default App;
