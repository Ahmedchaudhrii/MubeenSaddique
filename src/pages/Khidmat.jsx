import React from "react";

function Khidmat() {
  return (
    <div className="bg-[#fdfaf7] py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-[#594A3D] mb-6">Khidmat Foundation</h1>
        <p className="mb-10 text-lg text-gray-700">
          Our mission is simple: serve humanity with compassion. From food drives to education support, Khidmat Foundation is dedicated to uplifting communities across Pakistan.
        </p>

        <img
          src="https://res.cloudinary.com/dogdyxazy/image/upload/v1762003061/54513846_858444741170754_7219402736775725056_n_x8iyvu.jpg"
          alt="Khidmat Foundation"
          className="object-cover w-full mb-10 rounded-lg shadow h-174"
        />

        <div className="space-y-6 text-left text-gray-700">
          <div>
            <h2 className="text-2xl font-semibold text-[#594A3D] mb-2">Our Work</h2>
            <ul className="text-gray-600 list-disc list-inside">
              <li>Monthly ration distribution for families in need</li>
              <li>Free medical camps and health awareness</li>
              <li>School supplies and scholarships for underprivileged children</li>
              <li>Emergency relief during floods and disasters</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#594A3D] mb-2">Get Involved</h2>
            <p>
              Want to volunteer or donate? Reach out via our <a href="/contact" className="text-[#594A3D] underline">Contact Page</a> or follow us on Instagram @khidmatfoundation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Khidmat;
