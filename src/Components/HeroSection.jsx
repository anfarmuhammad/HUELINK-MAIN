import { Link } from 'react-router-dom';
import animationData from '../assets/animations/animation.mp4';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="w-full flex items-center bg-black justify-center shadow-2xl">
      <section className="relative bg-black bg-opacity-30 backdrop-blur-lg border border-white/30 text-white py-36 rounded w-[95%] overflow-hidden shadow-1xl">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(40%)' }}
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={animationData} type="video/mp4" />
            <img
              src="/images/ai-fallback.jpg"
              alt="AI Communication Background"
              className="w-full h-full object-cover"
            />
          </video>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          {/* Main Heading */}
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6 max-w-4xl mx-auto leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            viewport={{ once: true }}
          >
            Empowering every voice—unleashing clarity and confidence through AI-driven speech enhancement.
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            className="max-w-2xl mx-auto mb-10 text-lg text-gray-200"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            Experience the next generation of communication—where speech meets
            intelligence and your voice leads the way.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, rotateX: 90 }}
            whileInView={{ opacity: 1, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            {/* Try Now Button */}
            <Link
              to="/trynow"
              className="rounded-md font-semibold text-white px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-500 hover:to-gray-400 transition duration-300 shadow-lg"
            >
              Try Now
            </Link>

            {/* Contribute Button */}
            <Link
              to="/CTA"
              className="rounded-md font-semibold border-2 border-white text-white px-6 py-3 bg-transparent hover:bg-gray-700  transition duration-300 shadow-lg"
            >
              Contribute
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
