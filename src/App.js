import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import PrivacyPolicy from './components/PrivacyPolicy'
import About2 from './components/About2'
import About3 from './components/About3'
import Footer from './components/Footer'



function App() {
  return (
    <div>  
    
      <Home />
      <About /> 
      <About2 />
      <About3 />      
      <PrivacyPolicy />
      <Footer/>
      <Navbar />
    </div>
  );
}

export default App;