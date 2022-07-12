import React from 'react'
import Banner from './components/Banner';
import Template from './components/Template';
import Gallery from './components/ImageGallery';
import HomePage from './pages/HomePage';
import HousePage from './pages/HousePage';
import AboutPage from './pages/AboutPage';
import Footer from './components/Footer';
import ErrorPage from './pages/ErrorPage';
import './fonts/typo.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Collapse2 from './components/Collapse2';

function App(props) {
  return (

      <div className="App">
          <Router>
            <Banner/>
            <Routes>
              <Route path= "/" element={<HomePage/>}/>
              <Route path= "/logement/:id" element={<HousePage/>}/>
              <Route path= "/A-propos" element={<AboutPage/>}/>
              <Route path= "*" element={<ErrorPage/>}/>
            </Routes>
            <Footer/>
          </Router>
      </div>  
  );

}

export default App;
