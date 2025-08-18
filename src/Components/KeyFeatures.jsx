import { motion } from "framer-motion";
import Empathy from "../assets/images/Empathy.png";
import Innovation from "../assets/images/innovation.png";
import Collaboration from "../assets/images/Collaboration.png";

const KeyFeatures = () => {
  const features = [
    {
      title: "Empathy & Accessibility",
      description:
        "We design inclusive solutions that address diverse speech needs, making advanced support accessible to everyone.",
      bgImage: Empathy
    },
    {
      title: "Innovation & Quality",
      description:
        "Our team leverages the latest AI advancements to ensure accurate, effective, and transformative communication tools.",
      bgImage: Innovation
    },
    {
      title: "Empowerment & Collaboration",
      description:
        "We empower users to take control of their progress while actively collaborating with the best minds in technology and speech sciences.",
      bgImage: Collaboration
    }
  ];

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        {/* Animated Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Why Choose Us?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative h-[300px] rounded-2xl overflow-hidden shadow-lg cursor-pointer bg-black dark:bg-black"
              style={{
                backgroundImage: `url(${feature.bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: index * 0.2,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
            >
              {/* Dark overlay for readability */}
              <div className="w-full h-full flex items-center flex-col justify-center bg-black/70 text-center p-4">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-200 text-sm md:text-base">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
