import React from "react";

function ProjectsSection() {
  const projects = [
    {
      title: "Flipping Cars Portfolio",
      description: "A visual showcase of Mubeen’s car flips — before/after transformations, profit margins, and strategy breakdowns.",
      link: "/business/flipping-cars",
    },
    {
      title: "Influencer Brand Site",
      description: "Custom-built React site to highlight Mubeen’s ventures, collaborations, and personal brand with Cloudinary-powered media.",
      link: "/business/become-influencer",
    },
    {
      title: "Podcast Series Hub",
      description: "Landing page for Mubeen’s podcast episodes — covering mindset, business, and influence with embedded audio and video.",
      link: "/podcast",
    },
    {
      title: "Event & Marquee Booking",
      description: "A sleek platform for managing event bookings, showcasing past setups, and scaling Mubeen’s marquee business.",
      link: "/business/events-marquee",
    },
    {
      title: "Consultation Portal",
      description: "Secure booking app for business consultations — built with Express, MongoDB, and a clean UI for scheduling.",
      link: "/business/consultation",
    },
    {
      title: "Ecommerce Launchpad",
      description: "A modular storefront for Mubeen’s clothing brand — blending design, influence, and conversion strategy.",
      link: "/business/ecommerce-start",
    },
  ];

  return (
    <section className="bg-[#fdfaf7] py-20">
      <div className="px-4 mx-auto text-center max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[#594A3D] mb-10">
          Mubeen’s Featured Projects
        </h2>
        <p className="mb-12 text-lg text-gray-600">
          From flipping cars to launching brands — here’s how Mubeen turns ideas into impact.
        </p>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="p-6 text-left transition border rounded-lg shadow hover:shadow-md">
              <h3 className="text-xl font-semibold text-[#594A3D] mb-2">{project.title}</h3>
              <p className="mb-4 text-gray-600">{project.description}</p>
              <a href={project.link} className="text-[#594A3D] hover:underline">
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
