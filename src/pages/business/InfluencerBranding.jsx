// src/pages/business/InfluencerBranding.jsx
import React from "react";

function InfluencerBranding() {
  const services = [
    {
      title: "Personal Brand Strategy",
      image: "https://res.cloudinary.com/dogdyxazy/image/upload/v1762188360/mubeeninsta2_cr5mho.jpg",
      description: "Define your niche, voice, and visual identity to stand out in a crowded digital space.",
    },
    {
      title: "Content & Media Coaching",
      image: "https://res.cloudinary.com/dogdyxazy/image/upload/v1762177116/podcast_sffezo.jpg",
      description: "Learn how to create high-impact content that builds trust, drives engagement, and grows your audience.",
    },
    {
      title: "Platform Launch & Monetization",
      image: "https://res.cloudinary.com/dogdyxazy/image/upload/v1762188360/mubeentiktok2_n2xyrd.jpg",
      description: "From websites to merch stores — Mubeen helps influencers turn attention into income.",
    },
  ];

  return (
    <section className="bg-[#fdfaf7] py-20 px-4">
      <div className="mx-auto text-center max-w-7xl">
        <h1 className="text-4xl font-bold text-[#594A3D] mb-6">Influencer Branding</h1>
        <p className="mb-4 text-lg italic text-gray-700">
          “Your story is your superpower — let’s build a brand that amplifies it.”
        </p>
        <p className="mb-12 text-gray-600">
          Mubeen Saddique helps creators, coaches, and entrepreneurs craft personal brands that convert — blending strategy, storytelling, and digital execution.
        </p>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
          {services.map((item, i) => (
            <div key={i} className="p-4 text-left bg-white rounded-lg shadow">
              <img src={item.image} alt={item.title} className="object-cover w-full h-40 mb-4 rounded" />
              <h3 className="text-xl font-semibold text-[#594A3D] mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#594A3D] text-white py-10 px-6 rounded-lg shadow text-center">
          <h2 className="mb-2 text-2xl font-semibold">Want to Build Your Brand?</h2>
          <p className="mb-4">Book a 1-on-1 session with Mubeen to start your influencer journey.</p>
          <a
            href="/consultation"
            className="inline-block px-6 py-2 bg-white text-[#594A3D] font-medium rounded hover:bg-[#fdfaf7] transition"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}

export default InfluencerBranding;
