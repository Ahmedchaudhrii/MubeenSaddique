// src/pages/business/EventsMarquee.jsx
import React from "react";

function EventsMarquee() {
  const marqueeServices = [
    {
      title: "Luxury Wedding Setups",
      image: "https://res.cloudinary.com/dogdyxazy/image/upload/v1762177734/couples.events_1708056410_3303739077647369371_39867527339_rebrav.jpg",
      description: "Elegant marquees, floral decor, and lighting for unforgettable wedding experiences.",
    },
    {
      title: "Corporate Events",
      image: "https://res.cloudinary.com/dogdyxazy/image/upload/v1762178570/couples.events_1655124861_2859717065658161637_39867527339_j3khdm.jpg",
      description: "Professional setups for seminars, product launches, and executive gatherings.",
    },
    {
      title: "Community Celebrations",
      image: "https://res.cloudinary.com/dogdyxazy/image/upload/v1762178570/couples.events_1690123654_3153308216891323983_39867527339_lxfouz.jpg",
      description: "Festive marquees for local events, fundraisers, and cultural programs.",
    },
  ];

  return (
    <section className="bg-[#fdfaf7] py-20 px-4">
      <div className="mx-auto text-center max-w-7xl">
        <h1 className="text-4xl font-bold text-[#594A3D] mb-6">Event Marquee Services</h1>
        <p className="mb-4 text-lg italic text-gray-700">
          “Every event deserves a space that speaks luxury, clarity, and celebration.”
        </p>
        <p className="mb-12 text-gray-600">
          Mubeen Saddique’s marquee business delivers premium setups across Punjab — blending design, logistics, and hospitality into unforgettable experiences.
        </p>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
          {marqueeServices.map((service, i) => (
            <div key={i} className="p-4 text-left bg-white rounded-lg shadow">
              <img src={service.image} alt={service.title} className="object-cover w-full h-40 mb-4 rounded" />
              <h3 className="text-xl font-semibold text-[#594A3D] mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#594A3D] text-white py-10 px-6 rounded-lg shadow text-center">
          <h2 className="mb-2 text-2xl font-semibold">Need a Marquee Setup?</h2>
          <p className="mb-4">Book a consultation or request a quote for your next event.</p>
          <a
            href="/consultation"
            className="inline-block px-6 py-2 bg-white text-[#594A3D] font-medium rounded hover:bg-[#fdfaf7] transition"
          >
            Book Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default EventsMarquee;
