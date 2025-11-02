// src/pages/business/EcommerceStartup.jsx
import React from "react";

function EcommerceStartup() {
  const features = [
    {
      title: "Streetwear Meets Strategy",
      image: "/src/assets/ecommerce/streetwear.jpg",
      description: "Mubeen’s fashion line blends bold design with business sense — built for creators and hustlers.",
    },
    {
      title: "Modular Storefronts",
      image: "/src/assets/ecommerce/storefront.jpg",
      description: "Custom-built ecommerce platforms with clean UI, secure payments, and mobile-first design.",
    },
    {
      title: "Brand Identity & Launch",
      image: "/src/assets/ecommerce/branding.jpg",
      description: "From logo to launch — Mubeen helps you craft a brand that connects and converts.",
    },
  ];

  return (
    <section className="bg-[#fdfaf7] py-20 px-4">
      <div className="mx-auto text-center max-w-7xl">
        <h1 className="text-4xl font-bold text-[#594A3D] mb-6">Ecommerce Startup</h1>
        <p className="mb-4 text-lg italic text-gray-700">
          “Your brand is more than a product — it’s a movement.”
        </p>
        <p className="mb-12 text-gray-600">
          Mubeen Saddique’s ecommerce journey blends fashion, influence, and digital strategy. Whether you're launching your first drop or scaling your store, this is where hustle meets design.
        </p>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
          {features.map((item, i) => (
            <div key={i} className="p-4 text-left bg-white rounded-lg shadow">
              <img src={item.image} alt={item.title} className="object-cover w-full h-40 mb-4 rounded" />
              <h3 className="text-xl font-semibold text-[#594A3D] mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#594A3D] text-white py-10 px-6 rounded-lg shadow text-center">
          <h2 className="mb-2 text-2xl font-semibold">Launch Your Brand with Mubeen</h2>
          <p className="mb-4">Book a consultation to turn your product idea into a powerful online store.</p>
          <a
            href="/consultation"
            className="inline-block px-6 py-2 bg-white text-[#594A3D] font-medium rounded hover:bg-[#fdfaf7] transition"
          >
            Start Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default EcommerceStartup;
