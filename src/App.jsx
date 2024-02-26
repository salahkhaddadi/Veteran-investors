import AboutUs from './AboutUs';
import './App.css';
import ContactUs from './ContactUs';
import Features from './Features';
import Header from './Header';
import Pricing from './Pricing';
import Service from './Service';
import Testimonial from './Testimonial';
import Footer from './Footer';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="text-slate-700 bg-slate-50">
      <Header />
      <Features />
      <Service />
      <Pricing />
      <AboutUs />
      <Testimonial />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
