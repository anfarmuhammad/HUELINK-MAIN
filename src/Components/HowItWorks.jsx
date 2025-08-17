import Pexel from "../assets/images/pexels.png";
import { motion } from "framer-motion";

const HowItWorks = () => {
  return (
    <div className="w-full min-h-[60vh] flex bg-black items-center justify-center px-2 sm:px-4">
      <section
        className="relative py-10 sm:py-14 w-full max-w-[95%] text-white bg-cover bg-center min-h-[55vh] backdrop-blur-lg border border-white/10 rounded-lg overflow-hidden shadow-1xl"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
            url(${Pexel})
          `,
        }}
      >
        <div className="relative container flex flex-col justify-center mx-auto px-4 text-center">
          {/* Heading with smooth zoom-in */}
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            What is HuLink?
          </motion.h2>

          {/* Paragraph with fade-up */}
          <motion.p
            className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg font-medium text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            HuLink is your ultimate platform for discovering events, connecting
            with like-minded people, and building strong communities. Whether you
            are looking for activities, friends, or opportunities, HuLink brings
            everything together in one place.
            With our intuitive interface, finding events and making new
            connections has never been easier. Join today and be part of a
            growing network that thrives on shared experiences.
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;




