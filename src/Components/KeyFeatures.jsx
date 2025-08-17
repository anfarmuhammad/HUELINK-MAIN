import { motion } from "framer-motion";

const KeyFeatures = () => {
  const features = [
    {
      title: "Empathy & Accessibility",
      description:
        "We design inclusive solutions that address diverse speech needs, making advanced support accessible to everyone.",
      bgImage:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Innovation & Quality",
      description:
        "Our team leverages the latest AI advancements to ensure accurate, effective, and transformative communication tools.",
      bgImage:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Empowerment & Collaboration",
      description:
        "We empower users to take control of their progress while actively collaborating with the best minds in technology and speech sciences.",
      bgImage:
        "https://images.unsplash.com/photo-1521790797524-b2497295b8a0?auto=format&fit=crop&w=400&q=80"
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
