import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="shadow-md bg-black">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl text-white font-bold text-primary">HuLink</span>
        </Link>

        <motion.div
          className="flex space-x-4"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <Link
            to="/trynow"
            className="relative md:px-3 px-2 md:py-2 py-1 bg-gray-700 text-white font-bold rounded-md overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gray-500 translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out rounded-md z-0"></span>
            <span className="relative z-10">Try Now</span>
          </Link>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
