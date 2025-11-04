import { Link } from "react-router-dom";

function FeaturedCollections() {
  const collections = [
    {
      title: "Car Collection",
      description: "Step into Mubeen’s garage — a curated lineup of luxury rides, vintage classics, and performance beasts.",
      image: "https://res.cloudinary.com/dogdyxazy/image/upload/v1761916594/WhatsApp_Image_2025-10-31_at_14.49.29_2_prbyke.jpg",

      link: "/cars",
    },
    {
      title: "Bike Collection",
      description: "From superbikes to custom builds, Mubeen’s two-wheel fleet reflects speed, style, and street presence.",
      image: "https://res.cloudinary.com/dogdyxazy/image/upload/v1761921829/WhatsApp_Image_2025-10-31_at_16.48.16_xpmnlx.jpg",
      link: "/bikes",
    },
    {
      title: "Podcast Series",
      description: "Raw conversations on mindset, hustle, and influence — hosted by Mubeen Saddique.",
      image: "https://res.cloudinary.com/dogdyxazy/image/upload/v1762177116/podcast_sffezo.jpg",
      link: "/podcast",
    },
    {
      title: "Business Ventures",
      description: "Explore Mubeen’s empire: flipping cars, event marquees, ecommerce fashion, and influencer branding.",
      image: "https://res.cloudinary.com/dogdyxazy/image/upload/v1762176483/akaarcreativeagency_1748446824_3642454489777251908_67761740264_m6mygm.jpg",
      link: "/business",
    },
  ];

  return (
    <section className="bg-[#fdfaf7] py-20">
      <div className="px-4 mx-auto text-center max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[#594A3D] mb-12">
          Mubeen’s Featured Collections
        </h2>
        <p className="mb-10 text-lg text-gray-600">
          A glimpse into the ventures, passions, and platforms that define Mubeen Saddique’s journey.
        </p>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {collections.map((item, index) => (
            <Link
              to={item.link}
              key={index}
              className="block overflow-hidden transition border rounded-lg shadow group hover:shadow-md"
            >
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full h-48 transition-transform group-hover:scale-105"
              />
              <div className="p-4 text-left">
                <h3 className="text-xl font-semibold text-[#594A3D] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedCollections;
