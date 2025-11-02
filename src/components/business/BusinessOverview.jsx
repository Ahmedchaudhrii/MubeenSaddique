// src/components/business/BusinessOverview.jsx
import { Link } from "react-router-dom";
import FlipCard from "./FlipCard";
import MarqueeCard from "./MarqueeCard";
import InfluencerCard from "./InfluencerCard";
import ConsultationCard from "./ConsultationCard";
import EcommerceCard from "./EcommerceCard";

function BusinessOverview() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
      <Link to="/business/flipping-cars"><FlipCard /></Link>
      <Link to="/business/events-marquee"><MarqueeCard /></Link>
      <Link to="/business/become-influencer"><InfluencerCard /></Link>
      <Link to="/business/consultation"><ConsultationCard /></Link>
      <Link to="/business/ecommerce-start"><EcommerceCard /></Link>
      {/* <Link to="/business/events-marquee"><MarqueeCard /></Link>
      <Link to="/business/become-influencer"><InfluencerCard /></Link> */}


      {/* <Link to="/business/flipping-cars"><FlipCard /></Link> */}

    </div>
  );
}

export default BusinessOverview;
