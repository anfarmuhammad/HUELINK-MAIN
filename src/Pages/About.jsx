// File: About.jsx

import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { motion } from 'framer-motion';
import animationvideo from '../assets/animations/animation2.mp4'; // ✅ Correct video import

const About = () => {
  const values = [
    {
      title: "Community",
      description: "We believe in the power of collective action and mutual support."
    },
    {
      title: "Inclusivity",
      description: "We are committed to creating a welcoming space for everyone, regardless of background."
    },
    {
      title: "Empowerment",
      description: "We empower individuals to take initiative and create the connections they seek."
    },
    {
      title: "Trust & Safety",
      description: "We prioritize a secure and respectful environment for all interactions."
    },
    {
      title: "Innovation",
      description: "We continuously strive to improve and evolve our platform to better serve our users."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />

      <main className="flex-grow">


        {/* Hero Section with Video Background */}
        <section className="relative  from-primary to-secondary py-20 overflow-hidden">

          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40 z-0 bg-cover" />
          {/* Video Background */}
          <video
            className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={animationvideo} type="video/mp4" /> {/* ✅ Correct type */}
            <img
              src="/images/ai-fallback.jpg"
              alt="AI Communication Background"
              className="w-full h-full object-cover"
            />
          </video>

          {/* Hero Text */}
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story: Connecting Communities</h1>
            <h2 className="text-xl md:text-2xl">
              Empowering individuals to find their tribe and build a better world, one connection at a time.
            </h2>
          </div>
        </section>

        {/* The Challenge & Our Solution */}
        <section className="py-16">
          <div className="container bg-black mx-auto px-4">

            <h2 className="text-3xl font-bold text-center mb-12 text-white">The Challenge & Our Solution</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Problem Box */}
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
                <h3 className="text-2xl font-semibold mb-4 text-red-400">Problem (4 Key Issues)</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-200">
                  <li>Lack of continuous speech monitoring and feedback</li>
                  <li>Limited access to personalized exercises</li>
                  <li>Delayed intervention for speech challenges</li>
                  <li>Social anxiety & lack of confidence due to speech difficulties</li>
                </ul>
              </motion.div>

              {/* Solution Box */}
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

        {/* Mission and Vision Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
                <p className="text-lg text-gray-200">
                  We envision a world where every individual feels connected, valued, and empowered to participate in their local and global communities, fostering a sense of belonging for all.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Core Values Section */}
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
                  className="p-6 rounded-xl shadow-lg text-center cursor-pointer"
                  style={{
                    background: index % 2 === 0
                      ? 'linear-gradient(to bottom right, rgba(255,255,255,0.1), rgba(255,255,255,0.05))'
                      : 'linear-gradient(to top left, rgba(255,255,255,0.07), rgba(255,255,255,0.03))',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-200">{value.description}</p>
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
