import { div } from "framer-motion/client";

const HowItWorks = () => {
  return (
    <div className="w-full min-h-[60vh] flex bg-black items-center justify-center px-2 sm:px-4">
      <section
        className="relative py-10 sm:py-14 w-full max-w-[95%] text-white bg-cover bg-center min-h-[55vh] backdrop-blur-lg border border-white/10 rounded-lg overflow-hidden shadow-1xl"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
            url('https://images.pexels.com/photos/8294591/pexels-photo-8294591.jpeg')
          `,
        }}
      >
        <div className="relative container flex flex-col justify-center mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6">
            What is HuLink?
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg font-medium text-gray-300 leading-relaxed">
            HuLink is your ultimate platform for discovering events, connecting
            with like-minded people, and building strong communities. Whether you
            are looking for activities, friends, or opportunities, HuLink brings
            everything together in one place.
            
            With our intuitive interface, finding events and making new
            connections has never been easier. Join today and be part of a
            growing network that thrives on shared experiences.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;


