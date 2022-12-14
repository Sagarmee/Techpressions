import './App.css';
import { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import Navbar from './components/Navbar';
import React from 'react';
import SyncLoader from "react-spinners/SyncLoader";
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Career from './Pages/Career';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Websitedesigining from './Pages/Websitedesigining';
import Websitedevlopment from './Pages/Websitedevlopment';
import Seo from './Pages/Seo';
import Digitalmarketing from './Pages/Digitalmarketing';
import Portfolio from './Pages/Portfolio';
import About from './Pages/About';
import Graphic from './Pages/Graphic';
import Services from './Pages/Services';
import Footer from './components/Footer';

function App() {


  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

    }, 3000);
  }, [])

  return (
    <div className="App">
      {
        loading ?
          <SyncLoader color={ '#800080' } loading={ loading } size={ 20 } />
          :
          <>
            <Navbar />
            <Routes>
              <Route path='/' index element={ <Home /> } />
              <Route path='/career' element={ <Career /> } />
              <Route path='/blog' element={ <Blog /> } />
              <Route path='/contact' element={ <Contact /> } />
              <Route path="/about" element={ <About /> } />
              <Route path="/services" element={ <Services /> } />
              <Route path='/website-designing' element={ <Websitedesigining /> } >

              </Route>
              <Route path='/website-development' element={ <Websitedevlopment /> } >

              </Route>
              <Route path='/seo' element={ <Seo /> } >

              </Route>
              <Route path='/digital-marketing' element={ <Digitalmarketing /> } >

              </Route>
              <Route path="/portfolio" element={ <Portfolio /> } />
              <Route path="/graphic-design" element={ <Graphic /> } />
            </Routes>
            <Footer />
          </>
      }
      {/* testing for commmit */}
    </div >
  );
}

export default App;
