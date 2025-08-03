import { Link } from 'react-router-dom';
import animationData from '../assets/animations/animation.mp4'
import { motion } from 'framer-motion';
const HeroSection = () => {
  return (
    <div className='w-full  flex items-center bg-black justify-center shadow-2xl  '>
      <section className="relative bg-black bg-opacity-30 backdrop-blur-lg border border-white/10 text-white py-24 rounded w-[95%] overflow-hidden shadow-1xl"
      >


        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-full object-cover opacity-60"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={animationData} type="video/mp4" />
            <img src="/images/ai-fallback.jpg" alt="AI Communication Background" className="w-full h-full object-cover" />
          </video>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
            Empowering every voice—unleashing clarity and confidence through AI-driven speech enhancement.
          </h1>
          <p className="max-w-2xl mx-auto mb-10 text-lg text-gray-200">
            Experience the next generation of communication—where speech meets intelligence and your voice leads the way.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            {/* Try Now Button */}
            <Link
              to="/trynow"
              className="relative overflow-hidden group rounded-md font-semibold text-white px-6 py-3 bg-gray-700 hover:bg-gray-500 transition duration-300"
            >
              <span className="absolute inset-0 bg-gray-700 translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out rounded-md z-0"></span>
              <span className="relative z-10">Try Now</span>
            </Link>

            {/* Contribute Button */}
            <Link
              to="/CTA"
              className="relative overflow-hidden group rounded-md font-semibold border-2 border-white text-white px-6 py-3 bg-transparent transition duration-300"
            >
              <span className="absolute inset-0 bg-gray-700 translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out rounded-md z-0"></span>
              <span className="relative z-10 group-hover:text-primary transition duration-300">Contribute</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
