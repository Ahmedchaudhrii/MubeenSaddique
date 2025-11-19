import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex items-center justify-between h-16 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/picture/Gemini_Generated_Image_cna5rlcna5rlcna5.png"
            alt="Brand Logo"
            className="w-auto h-10"
          />
        </Link>

        {/* Hamburger Toggle - Mobile */}
        <button
          className="md:hidden text-[#594A3D] text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden space-x-6 md:flex">
          {navLinks}
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="px-4 py-3 space-y-2 bg-white shadow-md md:hidden">
          {navLinks}
        </div>
      )}
    </header>
  );
}

const active = "text-[#594A3D] font-semibold border-b-2 border-[#594A3D] pb-1";
const inactive = "text-gray-600 hover:text-[#594A3D] transition";

const navLinks = (
  <>
    <NavLink to="/" className={({ isActive }) => isActive ? active : inactive}>Home</NavLink>
    <NavLink to="/cars" className={({ isActive }) => isActive ? active : inactive}>Cars</NavLink>
    <NavLink to="/bikes" className={({ isActive }) => isActive ? active : inactive}>Bikes</NavLink>
    <NavLink to="/podcast" className={({ isActive }) => isActive ? active : inactive}>Podcast</NavLink>
    <NavLink to="/business" className={({ isActive }) => isActive ? active : inactive}>Business</NavLink>
    <NavLink to="/consultation" className={({ isActive }) => isActive ? active : inactive}>Consultation</NavLink>
    <NavLink to="/khidmat" className={({ isActive }) => isActive ? active : inactive}>Khidmat Foundation</NavLink>
  </>
);

export default Navbar;
