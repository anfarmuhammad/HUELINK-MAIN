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
        <section className="relative bg-gradient-to-r from-primary to-secondary text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story: Connecting Communities</h1>
            <h2 className="text-xl md:text-2xl">
              Empowering individuals to find their tribe and build a better world, one connection at a time.
            </h2>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 max-w-3xl">
              At HuLink, our mission is to break down barriers to connection, empowering individuals to discover meaningful relationships, engage in local activities, and contribute to vibrant, supportive communities.
            </p>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-lg text-gray-700 max-w-3xl">
              We envision a world where every individual feels connected, valued, and empowered to participate in their local and global communities, fostering a sense of belonging for all.
            </p>
          </div>
        </section>

        {/* Values Section */}
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