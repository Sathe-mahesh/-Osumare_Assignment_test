

// import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Productivity from './components/Productivity';
import Features from './components/Features';
import Testimonial from './components/Testimonial';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
// import SocialIcons from './components/SocialIcons';
function App() {


  return (
    <>
     <Navbar />
     <Hero />
     <Productivity />
     {/* <SocialIcons /> */}
     <Features />
     <Testimonial />
     <HeroSection />
     <Footer />
    </>
  )
}

export default App
