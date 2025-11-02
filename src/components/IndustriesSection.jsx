import React from "react";

function IndustriesSection() {
  const industries = [
    {
      title: "Car Flipping",
      description:
        "I’ve built a profitable flipping business by sourcing undervalued vehicles, restoring them, and reselling with strategy and speed.",
    },
    {
      title: "Event & Marquee Management",
      description:
        "From weddings to corporate setups, I run a multi-city marquee business that delivers premium experiences with precision.",
    },
    {
      title: "Influencer Branding",
      description:
        "As a public figure, I help creators and entrepreneurs build digital influence through content, strategy, and collaborations.",
    },
    {
      title: "Ecommerce & Fashion",
      description:
        "My clothing brand blends streetwear with elegance — designed for hustlers, creators, and trendsetters who move with purpose.",
    },
    {
      title: "Business Consultation",
      description:
        "I offer hands-on guidance to startups and small businesses — helping them scale through clarity, branding, and execution.",
    },
    {
      title: "Digital Media & Podcasting",
      description:
        "I produce raw, real conversations on mindset, business, and influence — building media that connects and converts.",
    },
  ];

  return (
    <section className="bg-[#fdfaf7] py-20">
      <div className="px-4 mx-auto text-center max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[#594A3D] mb-12">
          Industries Mubeen Leads
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {industries.map((item, index) => (
            <div
              key={index}
              className="p-6 text-left transition bg-white border rounded-lg shadow hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-[#594A3D] mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IndustriesSection;
