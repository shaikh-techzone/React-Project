import React from 'react';
import Layout from './Components/Layout';
import Home from './Screens/Home';
import About from './Screens/About';
import Contact from './Screens/Contact';
import Blog from './Screens/Blog';
import PageNotFound from './Screens/404';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Images from './Screens/Images';
import Videos from './Screens/Videos';
import Blogs from './Screens/Blogs';

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/blog/:id' element={<Blog />} />
            <Route path='/images' element={<Images />} />
            <Route path='/videos' element={<Videos />} />
            <Route path='*' element={< PageNotFound />} />

          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
