import React from 'react';

function HeroSection() {
  return (
    <section className="w-full h-[80vh] bg-black flex items-center justify-center overflow-hidden">
      <video
        className="object-cover w-full h-full"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://res.cloudinary.com/dogdyxazy/video/upload/v1761299469/Hero2_wpcmm9.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}

export default HeroSection;
