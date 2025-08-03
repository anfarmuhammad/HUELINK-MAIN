import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" shadow-md bg-black">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl text-white font-bold text-primary">HuLink</span>
        </Link>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
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

        <motion.div
          className="hidden md:flex space-x-4"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <Link
            to="/trynow"
            className="relative px-8 py-2 bg-gray-700 text-white font-bold rounded-md overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gray-500 translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out rounded-md z-0"></span>
            <span className="relative z-10">Try Now</span>
          </Link>
        </motion.div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4  py-2  shadow-lg">
          <nav className="flex flex-col space-y-3">
            <div className="border-t border-gray-200 pt-2">
              <Link to="/trynow" className=" text-white bg-gray-700 w-[120px] flex items-center justify-center rounded hover:text-gray-600 py-2 font-medium">Try Now</Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
