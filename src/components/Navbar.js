import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    { name: 'Home', path: '/' },
    { name: 'Nation', path: '/#nation' },
    { name: 'World', path: '/#world' },
    { name: 'Cricket', path: '/#cricket' },
    { name: 'Entertainment', path: '/#entertainment' },
    { name: 'Tech', path: '/#tech' },
  ];

  return (
    <nav className="bg-red-700 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold tracking-tighter">
            LiveHindustan
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {categories.map((cat) => (
              <Link key={cat.name} href={cat.path} className="hover:text-gray-200 font-medium">
                {cat.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={cat.path}
                className="block py-2 px-4 hover:bg-red-800"
                onClick={() => setIsOpen(false)}
              >
                {cat.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
