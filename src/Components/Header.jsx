import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-primary">HuLink</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-primary">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-primary">About Us</Link>
          <Link to="/features" className="text-gray-700 hover:text-primary">Features</Link>
          <Link to="/contact" className="text-gray-700 hover:text-primary">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
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

        {/* Auth Buttons - Desktop */}
        <div className="hidden md:flex space-x-4">
          <Link to="/login" className="px-4 py-2 text-primary hover:bg-gray-100 rounded-md">Log In</Link>
          <Link to="/signup" className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark">Sign Up</Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white py-2 px-4 shadow-lg">
          <nav className="flex flex-col space-y-3">
            <Link to="/" className="text-gray-700 hover:text-primary py-2">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-primary py-2">About Us</Link>
            <Link to="/features" className="text-gray-700 hover:text-primary py-2">Features</Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary py-2">Contact</Link>
            <div className="border-t border-gray-200 pt-2">
              <Link to="/login" className="block text-gray-700 hover:text-primary py-2">Log In</Link>
              <Link to="/signup" className="block text-primary py-2">Sign Up</Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;