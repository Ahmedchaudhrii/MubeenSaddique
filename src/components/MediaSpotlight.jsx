import React from "react";

function MediaSpotlight() {
  const features = [
    {
      title: "Interview with Business Insider",
      description:
        "Mubeen opens up about his journey from flipping cars in local markets to building a multi-industry business empire across Pakistan.",
      link: "#",
    },
    {
      title: "Podcast: The Hustler’s Blueprint",
      description:
        "A raw conversation on mindset, branding, and scaling influence — Mubeen shares how he turns hustle into strategy.",
      link: "#",
    },
    {
      title: "Featured in Real Estate Weekly",
      description:
        "Recognized as one of Punjab’s top emerging developers, Mubeen discusses his approach to high-growth commercial investments.",
      link: "#",
    },
    {
      title: "Spotlight on Influencer Ventures",
      description:
        "Mubeen’s brand collaborations and mentorship work are featured in a segment on digital entrepreneurship and creator-led businesses.",
      link: "#",
    },
    {
      title: "AutoFlip Success Story",
      description:
        "A case study on how Mubeen built a profitable car flipping model — blending restoration, marketing, and resale strategy.",
      link: "#",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="px-4 mx-auto text-center max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[#594A3D] mb-12">
          Mubeen in the Spotlight
        </h2>
        <p className="mb-10 text-lg text-gray-600">
          From podcasts to press features — here’s how Mubeen Saddique’s story is inspiring creators and entrepreneurs across industries.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-[#fdfaf7] p-6 rounded-lg shadow hover:shadow-md transition text-left"
            >
              <h3 className="text-xl font-semibold text-[#594A3D] mb-2">{item.title}</h3>
              <p className="mb-4 text-gray-700">{item.description}</p>
              <a href={item.link} className="text-[#594A3D] hover:underline">
                View Feature →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MediaSpotlight;
