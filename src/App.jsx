import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Cars from "./pages/Cars";
import Bikes from "./pages/Bikes";
import Podcast from "./pages/Podcast";
import BusinessHome from "./pages/business/BusinessHome";
import Consultation from "./pages/business/Consultation";
import Khidmat from "./pages/Khidmat";
// import FlippingCars from "./pages/FlippingCars";

import FlippingCars from "./pages/business/FlippingCars";

import EventsMarquee from "./pages/business/EventsMarquee";

import InfluencerBranding from "./pages/business/InfluencerBranding";


import EcommerceStartup from "./pages/business/EcommerceStartup";
// import Consultation from "./pages/business/Consultation";






function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/bikes" element={<Bikes />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/business" element={<BusinessHome />} />
        <Route path="/consultation" element={<Consultation />} />
        {/* <Route path="/flipping-cars" element={<FlippingCars />} /> */}
        <Route path="/business/flipping-cars" element={<FlippingCars />} />
        <Route path="/business/events-marquee" element={<EventsMarquee />} />
        <Route path="/business/become-influencer" element={<InfluencerBranding />} />
        <Route path="/business/consultation" element={<Consultation />} />


        <Route path="/business/ecommerce-start" element={<EcommerceStartup />} />
        <Route path="/khidmat" element={<Khidmat />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
