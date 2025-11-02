import React from "react";

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Zara Sheikh",
      role: "Influencer & Content Creator",
      quote:
        "Mubeen helped me build my personal brand from the ground up. His strategy, design sense, and business mindset made all the difference.",
    },
    {
      name: "Bilal Hussain",
      role: "Event Planner",
      quote:
        "Working with Mubeen on marquee events was a game-changer. He brings clarity, hustle, and premium execution to every project.",
    },
    {
      name: "Farah Javed",
      role: "Aspiring Entrepreneur",
      quote:
        "Mubeen’s flipping journey inspired me to start my own. His mentorship gave me the confidence and tools to take action.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="px-4 mx-auto text-center max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[#594A3D] mb-12">
          What People Say About Mubeen
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-[#fdfaf7] p-6 rounded-lg shadow hover:shadow-md transition text-left"
            >
              <p className="mb-4 italic text-gray-700">“{t.quote}”</p>
              <h4 className="text-[#594A3D] font-semibold">{t.name}</h4>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
