import React from "react";

function ContactSection() {
  return (
    <section className="bg-[#fdfaf7] py-20">
      <div className="max-w-3xl px-4 mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#594A3D] mb-6">
          Connect with Mubeen Saddique
        </h2>
        <p className="mb-8 text-lg text-gray-700">
          For business inquiries, brand collaborations, mentorship opportunities, or media features — reach out directly or connect through social platforms.
        </p>

        <a
          href="mailto:contact@mubeensaddique.com"
          className="inline-block bg-[#594A3D] text-white px-6 py-3 rounded-md hover:bg-[#473b31] transition"
        >
          contact@mubeensaddique.com
        </a>

        {/* Social Links */}
        <div className="flex justify-center mt-8 space-x-6">
          <a
            href="https://instagram.com/mubeensaddique"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#594A3D] hover:underline"
          >
            Instagram
          </a>
          <a
            href="https://youtube.com/@mubeensaddique"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#594A3D] hover:underline"
          >
            YouTube
          </a>
          <a
            href="https://linkedin.com/in/mubeensaddique"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#594A3D] hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
