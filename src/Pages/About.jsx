// File: About.jsx

import Header from '../Components/Header';
import Footer from '../Components/Footer';

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
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary to-secondary text-black py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story: Connecting Communities</h1>
            <h2 className="text-xl md:text-2xl">
              Empowering individuals to find their tribe and build a better world, one connection at a time.
            </h2>
          </div>
        </section>

        {/* The Challenge & Our Solution Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">The Challenge & Our Solution</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Problem Box */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4 text-red-600">Problem (4 Key Issues)</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Lack of continuous speech monitoring and feedback</li>
                  <li>Limited access to personalized exercises</li>
                  <li>Delayed intervention for speech challenges</li>
                  <li>Social anxiety & lack of confidence due to speech difficulties</li>
                </ul>
              </div>

              {/* Solution Box */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4 text-green-600">Solution (5 Key Points)</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Continuous, personalized AI voice analysis</li>
                  <li>Tailored exercises for speech and language improvement</li>
                  <li>Early detection and proactive alerts</li>
                  <li>Gamified experience for boosted engagement and confidence</li>
                  <li>Progress tracking and real-time professional consultation prompts</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Mission and Vision Box Section */}
        <section className="bg-gray-50">
          <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Mission */}
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  At HuLink, our mission is to break down barriers to connection, empowering individuals to discover meaningful relationships, engage in local activities, and contribute to vibrant, supportive communities.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  We envision a world where every individual feels connected, valued, and empowered to participate in their local and global communities, fostering a sense of belonging for all.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Core Values Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <h3 className="text-xl font-semibold mb-2 text-primary">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
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
