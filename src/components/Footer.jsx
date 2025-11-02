import React from "react";
function Footer() {
  return (
    <footer className="bg-[#594A3D] text-white py-10">
      <div className="grid grid-cols-1 gap-8 px-4 mx-auto text-center max-w-7xl md:grid-cols-3 md:text-left">
        
        {/* Brand Info */}
        <div>
          <h3 className="mb-2 text-xl font-bold">Mubeen Saddique</h3>
          <p className="text-sm">
            CEO • Influencer • Entrepreneur<br />
            Event Management | Real Estate | Ecommerce | Auto Empire
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-2 text-lg font-semibold">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/projects" className="hover:underline">Projects</a></li>
            <li><a href="/consultation" className="hover:underline">Consultation</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="mb-2 text-lg font-semibold">Connect</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="https://instagram.com/mubeensaddique" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a></li>
            <li><a href="https://youtube.com/@mubeensaddique" target="_blank" rel="noopener noreferrer" className="hover:underline">YouTube</a></li>
            <li><a href="https://linkedin.com/in/mubeensaddique" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-8 text-sm text-center text-gray-300">
        &copy; {new Date().getFullYear()} Mubeen Saddique. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
