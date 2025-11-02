import React from 'react';



function ServicesSection() {
  
  
    return (
    <section className="py-16 bg-white">
      <div className="px-4 mx-auto text-center max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[#594A3D] mb-10">
          What We Offer
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="p-6 transition border rounded-lg shadow hover:shadow-md">
            <h3 className="text-xl font-semibold text-[#594A3D] mb-2">Car Flipping</h3>
            <p className="text-gray-600">Buy, fix, and sell cars for profit with expert guidance.</p>
          </div>

          <div className="p-6 transition border rounded-lg shadow hover:shadow-md">
            <h3 className="text-xl font-semibold text-[#594A3D] mb-2">Brand Building</h3>
            <p className="text-gray-600">Launch your online presence with custom design and strategy.</p>
          </div>

          <div className="p-6 transition border rounded-lg shadow hover:shadow-md">
            <h3 className="text-xl font-semibold text-[#594A3D] mb-2">Consultation</h3>
            <p className="text-gray-600">One-on-one sessions to turn your ideas into income.</p>
          </div>

          <div className="p-6 transition border rounded-lg shadow hover:shadow-md">
            <h3 className="text-xl font-semibold text-[#594A3D] mb-2">Podcasting</h3>
            <p className="text-gray-600">Share your voice and grow your audience with ease.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
