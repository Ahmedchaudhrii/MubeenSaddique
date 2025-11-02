import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="grid items-center h-16 grid-cols-12 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        
        {/* Logo Section - 3/12 */}
        <div className="col-span-3">
          <Link to="/" className="flex items-center">
            <img
              src="/picture/Gemini_Generated_Image_cna5rlcna5rlcna5.png"
              alt="Brand Logo"
              className="w-auto h-10"
            />
          </Link>
        </div>

        {/* Navigation Links - 7/12 */}
        <nav className="justify-center hidden col-span-7 space-x-6 md:flex">
          <NavLink to="/" className={({ isActive }) => isActive ? active : inactive}>Home</NavLink>
          <NavLink to="/cars" className={({ isActive }) => isActive ? active : inactive}>Cars</NavLink>
          <NavLink to="/bikes" className={({ isActive }) => isActive ? active : inactive}>Bikes</NavLink>
          <NavLink to="/podcast" className={({ isActive }) => isActive ? active : inactive}>Podcast</NavLink>
          <NavLink to="/business" className={({ isActive }) => isActive ? active : inactive}>Business</NavLink>
          
          <NavLink to="/consultation" className={({ isActive }) => isActive ? active : inactive}>Consultation</NavLink>
          <NavLink to="/khidmat" className={({ isActive }) => isActive ? active : inactive}>Khidmat Foundation</NavLink>

          
        </nav>

        {/* Optional Section - 2/12 */}
        <div className="justify-end hidden col-span-2 md:flex">
          {/* Placeholder for future button/icon */}
          {/* Example: <button className="text-[#594A3D] font-medium">Login</button> */}
        </div>
      </div>
    </header>
  );
}

const active = "text-[#594A3D] font-semibold border-b-2 border-[#594A3D] pb-1";
const inactive = "text-gray-600 hover:text-[#594A3D] transition";

export default Navbar;
