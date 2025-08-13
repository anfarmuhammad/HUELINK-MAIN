import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { motion } from 'framer-motion';
import animationvideo from '../assets/animations/animation2.mp4';

const About = () => {
  const values = [
    {
      title: "Community",
      description: "We believe in the power of collective action and mutual support.",
      bg: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
    },
    {
      title: "Inclusivity",
      description: "We are committed to creating a welcoming space for everyone.",
      bg: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
    },
    {
      title: "Empowerment",
      description: "We empower individuals to take initiative.",
      bg: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
    },
    {
      title: "Trust & Safety",
      description: "We prioritize a secure and respectful environment.",
      bg: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1470&auto=format&fit=crop"
    },
    {
      title: "Innovation",
      description: "We continuously strive to improve and evolve.",
      bg: "https://images.unsplash.com/photo-1535223289827-42f1e9919769"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute bg-opacity-40 inset-0 bg-black z-0" />
          <video
            className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={animationvideo} type="video/mp4" />
          </video>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Our Story: Connecting Communities
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl">
              Empowering individuals to find their tribe and build a better world, one connection at a time.
            </h2>
          </div>
        </section>

        {/* Challenge & Solution */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
              The Challenge & Our Solution
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

              {/* Problem */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="h-64 sm:h-72 md:h-80 rounded-xl shadow-lg cursor-pointer bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1647964366344-bc680baf64e2?q=80&w=1126&auto=format&fit=crop')`,
                }}
              >
                <div className="bg-black/60 p-4 sm:p-6 rounded-xl h-full flex flex-col justify-center">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-red-400">
                    Problem (4 Key Issues)
                  </h3>
                  <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-200 text-sm sm:text-base">
                    <li>Lack of continuous speech monitoring and feedback</li>
                    <li>Limited access to personalized exercises</li>
                    <li>Delayed intervention for speech challenges</li>
                    <li>Social anxiety & lack of confidence due to speech difficulties</li>
                  </ul>
                </div>
              </motion.div>

              {/* Solution */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="h-64 sm:h-72 md:h-80 rounded-xl shadow-lg cursor-pointer bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1558541966-d1071f7329bd?q=80&w=1333&auto=format&fit=crop')`,
                }}
              >
                <div className="bg-black/50 p-4 sm:p-6 rounded-xl h-full flex flex-col justify-center">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-green-400">
                    Solution (5 Key Points)
                  </h3>
                  <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-200 text-sm sm:text-base">
                    <li>Continuous, personalized AI voice analysis</li>
                    <li>Tailored exercises for speech and language improvement</li>
                    <li>Early detection and proactive alerts</li>
                    <li>Gamified experience for boosted engagement and confidence</li>
                    <li>Progress tracking and real-time professional consultation prompts</li>
                  </ul>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-4 sm:p-6 rounded-xl shadow-lg text-center cursor-pointer bg-black/40 backdrop-blur-sm"
            >
              <img
                src="https://images.unsplash.com/photo-1573497491208-6b1acb260507"
                alt="Mission"
                className="w-full h-48 sm:h-56 object-cover rounded-lg mb-4"
              />
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-sm sm:text-base text-gray-200">
                At HuLink, our mission is to break down barriers to connection, empowering individuals to discover meaningful relationships, engage in local activities, and contribute to vibrant, supportive communities.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-4 sm:p-6 rounded-xl shadow-lg text-center cursor-pointer bg-black/30 backdrop-blur-sm"
            >
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
                alt="Vision"
                className="w-full h-48 sm:h-56 object-cover rounded-lg mb-4"
              />
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-sm sm:text-base text-gray-200">
                We envision a world where every individual feels connected, valued, and empowered to participate in their local and global communities, fostering a sense of belonging for all.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-white drop-shadow-lg">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="rounded-xl shadow-lg h-56 sm:h-64 md:h-72 flex flex-col justify-end p-4 sm:p-6 text-white bg-cover bg-center relative overflow-hidden"
                  style={{
                    backgroundImage: `url('${value.bg}?q=80&w=600&auto=format&fit=crop')`,
                  }}
                >
                  <div className="absolute inset-0 bg-black/50"></div>
                  <div className="relative z-10">
                    <h3 className="text-lg sm:text-xl font-extrabold mb-1">{value.title}</h3>
                    <p className="text-xs sm:text-sm font-semibold text-gray-200">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
