import React from "react";

function NewsletterSection() {
  return (
    <section className="bg-[#594A3D] text-white py-20">
      <div className="max-w-3xl px-4 mx-auto text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Join Mubeen’s Inner Circle
        </h2>
        <p className="mb-8 text-lg">
          Get exclusive updates from Mubeen Saddique — car flipping strategies, business insights, event launches, and behind-the-scenes content delivered straight to your inbox.
        </p>

        <form className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-auto px-4 py-3 rounded-md text-[#594A3D] focus:outline-none"
          />
          <button
            type="submit"
            className="bg-white text-[#594A3D] font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

export default NewsletterSection;
