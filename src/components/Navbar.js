import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-[#cc0000] text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">
            LiveHindustan Clone
          </Link>
        </div>
        <div className="hidden md:flex space-x-6 font-medium">
          <Link href="/" className="hover:text-gray-200">Home</Link>
          <Link href="#" className="hover:text-gray-200">National</Link>
          <Link href="#" className="hover:text-gray-200">International</Link>
          <Link href="#" className="hover:text-gray-200">Sports</Link>
          <Link href="#" className="hover:text-gray-200">Entertainment</Link>
          <Link href="#" className="hover:text-gray-200">Business</Link>
        </div>
        <div className="md:hidden">
          {/* Mobile Menu Button Placeholder */}
          <button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
