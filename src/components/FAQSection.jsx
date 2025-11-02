import React from "react";

function FAQSection() {
  const faqs = [
    {
      question: "What ventures is Mubeen Saddique involved in?",
      answer:
        "Mubeen leads successful businesses in car flipping, event & marquee management, influencer branding, ecommerce fashion, and real estate development.",
    },
    {
      question: "Can I book Mubeen for mentorship or speaking engagements?",
      answer:
        "Yes — Mubeen offers limited slots for mentorship, consultations, and public speaking. Use the contact section to inquire directly.",
    },
    {
      question: "Does Mubeen collaborate with startups or only established brands?",
      answer:
        "Both. Mubeen works with emerging entrepreneurs and established businesses to help scale their vision and brand presence.",
    },
    {
      question: "Where is Mubeen Saddique based?",
      answer:
        "He operates primarily out of Punjab, Pakistan, but collaborates globally through digital platforms and remote partnerships.",
    },
    {
      question: "How can I pitch a business idea or partnership?",
      answer:
        "Use the contact form or email provided to share your proposal. All serious inquiries are reviewed personally by Mubeen and his team.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#594A3D] text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="pb-4 border-b">
              <h3 className="text-lg font-semibold text-[#594A3D] mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
