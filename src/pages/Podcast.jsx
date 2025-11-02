import React from "react";
import EpisodeCard from "../components/podcast/EpisodeCard";

function Podcast() {
  const episodes = [
  {
  title: "The Hustler’s Mindset",
  video: "https://res.cloudinary.com/dogdyxazy/video/upload/v1761913473/WhatsApp_Video_2025-10-31_at_16.48.18_lnmvgx.mp4",
  description: "Mubeen breaks down the mindset behind flipping cars, scaling brands, and staying resilient.",
  audioLink: "https://example.com/episode1.mp3",
},

    {
      title: "From Events to Empires",
      image: "/src/assets/podcast/episode2.jpg",
      description: "How Mubeen turned local event management into a multi-city business venture.",
      audioLink: "https://example.com/episode2.mp3",
    },
    {
      title: "Ecommerce That Converts",
      image: "/src/assets/podcast/episode3.jpg",
      description: "Lessons from launching a clothing brand that blends influence, design, and digital strategy.",
      audioLink: "https://example.com/episode3.mp3",
    },
    {
      title: "Becoming an Influencer CEO",
      image: "/src/assets/podcast/episode4.jpg",
      description: "Mubeen shares how he built his personal brand while managing multiple businesses.",
      audioLink: "https://example.com/episode4.mp3",
    },
  ];

  return (
    <div className="bg-[#fdfaf7] py-20 px-4">
      <div className="mx-auto text-center max-w-7xl">
        <h1 className="text-4xl font-bold text-[#594A3D] mb-10">Mubeen’s Podcast Series</h1>
        <p className="mb-12 text-lg text-gray-700">
          Raw conversations on business, mindset, and influence — hosted by Mubeen Saddique.
        </p>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {episodes.map((ep, index) => (
            <EpisodeCard
              key={index}
              title={ep.title}
              image={ep.image}
              video={ep.video}  
              description={ep.description}
              audioLink={ep.audioLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Podcast;
