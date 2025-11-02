import React from "react";

function ConsultationCard() {
  return (
    <div className="p-4 text-left transition bg-white rounded-lg shadow hover:shadow-md">
      <img src="/src/assets/business/consultation/consult1.jpg" alt="Consultation" className="object-cover w-full h-48 mb-4" />
      <h3 className="text-xl font-semibold text-[#594A3D] mb-2">1-on-1 Consultation</h3>
      <p className="text-sm text-gray-600">
        Book private sessions with Mubeen for strategic advice on branding and business growth.
      </p>
    </div>
  );
}
export default ConsultationCard;
