import { Link } from 'react-router-dom';
import animationData from '../assets/animations/animation.mp4'
const HeroSection = () => {
  return (
    <section className="relative bg-black text-white py-24 overflow-hidden">
      

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

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/try"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-semibold transition duration-300"
          >
            Try Now
          </Link>
          <Link
            to="/contribute"
            className="bg-transparent border-2 border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-primary transition duration-300"
          >
            Contribute
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
