import React from "react";

function EpisodeCard({ title, image, video, description, audioLink }) {
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
          alt={title}
          className="object-cover w-full h-48"
        />
      )}
      <div className="p-4 text-left">
        <h3 className="text-xl font-semibold text-[#594A3D] mb-2">{title}</h3>
        <p className="mb-4 text-sm text-gray-600">{description}</p>
        {audioLink && (
          <audio controls className="w-full">
            <source src={audioLink} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        )}
      </div>
    </div>
  );
}

export default EpisodeCard;
