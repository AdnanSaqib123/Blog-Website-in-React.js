import 'boxicons/css/boxicons.min.css';
import 'animate.css';
import React, { useEffect } from 'react';
import WOW from 'wow.js';
import './App.css';
import Header from './components/Header';
import Home from './components/pages/Home';
import Posts from './components/pages/Posts';
import Footer from './components/Footer';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserProfile from './components/pages/UserProfile';
import { useLocation } from 'react-router-dom';


function App() {
  useEffect(() => {
    console.log('WOW.js:', window.WOW);
    // Initialize WOW.js after the component mounts
    if (window.WOW) {
      new WOW().init();
    }
  }, []);
  return (
    <>

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<><Home /><Posts /></>} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<><Home /><Posts /></>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user-profile" element={<UserProfileWithProps />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

function UserProfileWithProps() {
  const location = useLocation();
  const { state } = location;

  return <UserProfile name={state?.name} age={state?.age} email={state?.email} designation={state?.designation} />;
}

export default App;
