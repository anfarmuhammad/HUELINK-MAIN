import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary to-secondary text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Connect. Engage. Thrive.</h1>
        <h2 className="text-xl md:text-2xl mb-8">Your Community, Amplified. Find and foster connections effortlessly with HuLink.</h2>
        <p className="max-w-2xl mx-auto mb-8">
          HuLink is the platform where meaningful connections blossom. Discover local events, join interest groups, and build a vibrant community around you.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            to="/signup" 
            className="bg-white text-primary px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition duration-300"
          >
            Join HuLink Today
          </Link>
          <Link 
            to="/about" 
            className="bg-transparent border-2 border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-primary transition duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;