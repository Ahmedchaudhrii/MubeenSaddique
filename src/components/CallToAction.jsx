import React from "react";

function CallToAction() {
  return (
    <section className="bg-[#594A3D] py-20 text-white text-center">
      <div className="max-w-3xl px-4 mx-auto">
        <h2 className="mb-6 text-3xl font-bold md:text-4xl">
          Ready to Launch Your Venture?
        </h2>
        <p className="mb-8 text-lg">
          Whether you're flipping cars, planning events, building your influencer brand, or starting a business — Mubeen Saddique can help you turn your vision into reality.
        </p>
        <a
          href="/consultation"
          className="inline-block bg-white text-[#594A3D] font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition"
        >
          Book a Consultation
        </a>
      </div>
    </section>
  );
}

export default CallToAction;
