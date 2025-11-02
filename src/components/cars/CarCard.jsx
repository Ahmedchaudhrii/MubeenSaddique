import React from "react";

function CarCard({ name, image, video, description }) {
  return (
    <div className="overflow-hidden transition bg-white rounded-lg shadow hover:shadow-md">
      {video ? (
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-48 mb-0 rounded"
        />
      ) : (
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-48"
        />
      )}
      <div className="p-4 text-left">
        <h3 className="text-xl font-semibold text-[#594A3D] mb-2">{name}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default CarCard;
