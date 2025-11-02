import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import WhyChooseUs from "../components/WhyChooseMe";
import AboutMe from "../components/AboutMe";
import ProjectsSection from "../components/ProjectsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CallToAction from "../components/CallToAction";
import IndustriesSection from "../components/IndustriesSection";
import MediaSpotlight from "../components/MediaSpotlight";
import ContactSection from "../components/ContactSection";
import NewsletterSection from "../components/NewsletterSection";
import FAQSection from "../components/FAQSection";
import FeaturedCollections from "../components/FeaturedCollections";
// import GallerySection from "../components/GallerySection";

function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <AboutMe />
      <ProjectsSection />
      <TestimonialsSection />
      <CallToAction />
      <IndustriesSection />
      <MediaSpotlight />
      <ContactSection />
      <NewsletterSection />
      <FAQSection />
      <FeaturedCollections />
      {/* <GallerySection /> */}
    </>
  );
}

export default Home;
