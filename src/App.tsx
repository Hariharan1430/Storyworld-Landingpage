import React, { useEffect } from 'react';
import { Header } from './components/Header';
import FeatureBox from "./components/Features"
import Footer from './components/Footer'
import CreateStories from "./components/CreateStories" 
import BorderFrameBox from './components/BorderImage1';
import BorderImageBox2 from './components/BoderImage2';
import TeachChildren from './components/TeachBox';
import BorderImageBox3 from './components/BorderImage3';
import FairytaleBox from './components/FairytaleBox';

function App() {
  // Scroll to top on page refresh/load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  return (
    <>
      <Header />
      <main>
        <section id="home">
          <CreateStories />
          <BorderFrameBox />
         
        </section>
        
        
        <section id="features">
           
          <FeatureBox />
       
        </section>
           <BorderImageBox2 />

       <section id="how-it-works">
                       <TeachChildren />

          <BorderImageBox3 />
          <FairytaleBox />
        </section>
      </main>
      
      {/* Contact section */}
      <section id="contact">
        <Footer />
      </section>
    </>
  );
}

export default App;