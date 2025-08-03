import Header from '../Components/Header';
import HeroSection from '../Components/HeroSection';
import HowItWorks from '../Components/HowItWorks';
import KeyFeatures from '../Components/KeyFeatures';
import Testimonials from '../Components/Testimonials';
import CTA from '../Components/CTA';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <HowItWorks />
        <KeyFeatures />
        <Testimonials />
        {/* <CTA /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Home;