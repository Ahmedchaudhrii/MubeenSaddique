import React from "react";

function AboutMe() {
  return (
    <section className="py-20 bg-white">
      <div className="grid items-center grid-cols-1 gap-10 px-4 mx-auto max-w-7xl md:grid-cols-2">
        
        {/* Left: Image or Visual */}
        <div className="flex justify-center">
          <img
            src="https://res.cloudinary.com/dogdyxazy/image/upload/v1762874603/mubeenlogo2_ggwlpw.png"
            alt="Mubeen Saddique"
            className="w-full max-w-sm rounded-lg shadow-md"
          />
        </div>

        {/* Right: Mubeen's Intro */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#594A3D] mb-4">
            Meet Mubeen Saddique
          </h2>
          <p className="mb-4 text-lg text-gray-700">
            I’m Mubeen — a car flipper, influencer, and business strategist with a passion for turning ideas into impact. From restoring cars and launching podcast series to building event brands and ecommerce platforms, I help creators and entrepreneurs grow their presence and profits.
          </p>
          <p className="mb-4 text-gray-600">
            My journey blends hustle with strategy. I’ve built multi-city ventures, flipped dozens of cars, and helped influencers and small businesses scale online. Every project I take on is rooted in clarity, creativity, and real-world execution.
          </p>
          <a
            href="/consultation"
            className="inline-block mt-4 bg-[#594A3D] text-white px-6 py-3 rounded-md hover:bg-[#473b31] transition"
          >
            Work With Mubeen
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
