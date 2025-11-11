import React from "react";

function WhyChooseMe() {
  return (
    <section className="bg-[#fdfaf7] py-16">
      <div className="grid items-center grid-cols-1 gap-10 px-4 mx-auto max-w-7xl md:grid-cols-2">
        
        {/* Left: Mubeen's Story */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#594A3D] mb-4">
            Why Work With Mubeen
          </h2>
          <p className="mb-6 text-lg text-gray-700">
            I’m Mubeen Saddique — a business strategist, car flipper, influencer, and digital entrepreneur. I help individuals and brands turn raw ideas into profitable ventures. Whether you're flipping cars, launching an event brand, or building your online presence, I bring clarity, hustle, and hands-on experience to every project.
          </p>
          <ul className="space-y-3 text-left text-gray-600">
            <li>✅ Proven success in flipping cars for profit</li>
            <li>✅ Built multi-city event and influencer brands</li>
            <li>✅ Passionate about helping others grow online</li>
            <li>✅ Real-world experience with business, branding, and digital strategy</li>
          </ul>
        </div>

        {/* Right: Mubeen's Image or Brand Visual */}
        <div className="flex justify-center">
          <img
            src="https://res.cloudinary.com/dogdyxazy/image/upload/v1762874603/mubeenlogo2_ggwlpw.png"
            alt="Mubeen Saddique"
            className="w-full max-w-md rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
}

export default WhyChooseMe;
