import React from "react";
function Consultation() {
  return (
    <div className="bg-[#fdfaf7] py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-[#594A3D] mb-6">
          1-on-1 Consultation with Mubeen Saddique
        </h1>
        <p className="mb-10 text-lg text-gray-700">
          Whether you're launching a brand, scaling a business, or refining your strategy — Mubeen offers personalized guidance to help you move forward with clarity and confidence.
        </p>

        <img
          src="/src/assets/business/consultation/consult-banner.jpg"
          alt="Consultation Banner"
          className="object-cover w-full h-64 mb-10 rounded-lg shadow"
        />

        <div className="space-y-6 text-left text-gray-700">
          <div>
            <h2 className="text-2xl font-semibold text-[#594A3D] mb-2">What You’ll Get</h2>
            <ul className="text-gray-600 list-disc list-inside">
              <li>Brand positioning and identity strategy</li>
              <li>Business model review and growth roadmap</li>
              <li>Digital presence audit (website, social, ecommerce)</li>
              <li>Actionable next steps tailored to your goals</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#594A3D] mb-2">Who It’s For</h2>
            <p>
              Entrepreneurs, influencers, small business owners, and anyone serious about building a scalable brand.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#594A3D] mb-2">How to Book</h2>
            <p>
              Send a message via the <a href="/contact" className="text-[#594A3D] underline">Contact Page</a> or DM Mubeen on Instagram to schedule your session.
            </p>
            <a
  href="mailto:contact@mubeensaddique.com"
  className="inline-block mt-6 bg-[#594A3D] text-white px-6 py-3 rounded-md hover:bg-[#473b31] transition"
>
  Request a Session
</a>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Consultation;
