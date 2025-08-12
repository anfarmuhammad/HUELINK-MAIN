import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { motion } from 'framer-motion';
import animationvideo from '../assets/animations/animation2.mp4';

const About = () => {
  const values = [
    {
      title: "Community",
      description: "We believe in the power of collective action and mutual support.",
      icon: "https://img.icons8.com/color/96/group-foreground-selected.png",
      bg: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
    },
    {
      title: "Inclusivity",
      description: "We are committed to creating a welcoming space for everyone.",
      icon: "https://img.icons8.com/color/96/diversity.png",
      bg: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
    },
    {
      title: "Empowerment",
      description: "We empower individuals to take initiative.",
      icon: "https://img.icons8.com/color/96/self-confidence.png",
      bg: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
    },
    {
      title: "Trust & Safety",
      description: "We prioritize a secure and respectful environment.",
      icon: "https://img.icons8.com/color/96/lock--v1.png",
      bg: "https://images.unsplash.com/photo-1581090700227-4c54d30c7e9c"
    },
    {
      title: "Innovation",
      description: "We continuously strive to improve and evolve.",
      icon: "https://img.icons8.com/color/96/artificial-intelligence.png",
      bg: "https://images.unsplash.com/photo-1535223289827-42f1e9919769"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute bg-opacity-40 inset-0 bg-black z-0 bg-cover" />
          <video
            className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={animationvideo} type="video/mp4" />
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
              alt="Fallback"
              className="w-full h-full object-cover"
            />
          </video>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story: Connecting Communities</h1>
            <h2 className="text-xl md:text-2xl">
              Empowering individuals to find their tribe and build a better world, one connection at a time.
            </h2>
          </div>
        </section>

        {/* Challenge & Solution */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">The Challenge & Our Solution</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Problem */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl shadow-lg cursor-pointer"
                style={{
                  background: 'linear-gradient(to bottom right, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <img
                  src="https://img.icons8.com/fluency/96/error.png"
                  alt="Problem"
                  className="mx-auto mb-4 w-16 h-16"
                />
                <h3 className="text-2xl font-semibold mb-4 text-red-400">Problem (4 Key Issues)</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-200">
                  <li>Lack of continuous speech monitoring and feedback</li>
                  <li>Limited access to personalized exercises</li>
                  <li>Delayed intervention for speech challenges</li>
                  <li>Social anxiety & lack of confidence due to speech difficulties</li>
                </ul>
              </motion.div>

              {/* Solution */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl shadow-lg cursor-pointer"
                style={{
                  background: 'linear-gradient(to top left, rgba(255,255,255,0.07), rgba(255,255,255,0.03))',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <img
                  src="https://img.icons8.com/fluency/96/solution.png"
                  alt="Solution"
                  className="mx-auto mb-4 w-16 h-16"
                />
                <h3 className="text-2xl font-semibold mb-4 text-green-400">Solution (5 Key Points)</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-200">
                  <li>Continuous, personalized AI voice analysis</li>
                  <li>Tailored exercises for speech and language improvement</li>
                  <li>Early detection and proactive alerts</li>
                  <li>Gamified experience for boosted engagement and confidence</li>
                  <li>Progress tracking and real-time professional consultation prompts</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl shadow-lg text-center cursor-pointer"
              style={{
                background: 'linear-gradient(to bottom right, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                backdropFilter: 'blur(10px)',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1573497491208-6b1acb260507"
                alt="Mission"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-200">
                At HuLink, our mission is to break down barriers to connection, empowering individuals to discover meaningful relationships, engage in local activities, and contribute to vibrant, supportive communities.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl shadow-lg text-center cursor-pointer"
              style={{
                background: 'linear-gradient(to top left, rgba(255,255,255,0.07), rgba(255,255,255,0.03))',
                backdropFilter: 'blur(10px)',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
                alt="Vision"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-gray-200">
                We envision a world where every individual feels connected, valued, and empowered to participate in their local and global communities, fostering a sense of belonging for all.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Core Values with Background Images */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="rounded-xl shadow-lg text-center cursor-pointer"
                  style={{
                    backgroundImage: `url('${value.bg}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <div className="text-white bg-opacity-70 p-6 rounded-xl">
                    <img src={value.icon} alt={value.title} className="mx-auto mb-4 w-14 h-14" />
                    <h3 className="text-xl font-semibold mb-2 ">{value.title}</h3>
                    <p className="">{value.description}</p>
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
