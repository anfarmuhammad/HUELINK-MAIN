import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Features = () => {
  const features = [
    {
      title: "Smart Event Discovery",
      description: "Our intelligent recommendation engine learns your preferences to suggest events and activities you'll love, from local meetups to online workshops.",
      benefits: [
        "Personalized event feed",
        "Location-based suggestions",
        "Interest-based filtering"
      ]
    },
    {
      title: "Effortless Group Management",
      description: "Whether you're starting a book club or organizing a volunteer initiative, HuLink provides intuitive tools to create, manage, and grow your community groups.",
      benefits: [
        "Easy group creation",
        "Member management tools",
        "Integrated communication for groups"
      ]
    },
    {
      title: "Secure & Private Messaging",
      description: "Connect directly with individuals and groups through our secure in-app messaging system. Share ideas, coordinate plans, and build relationships with confidence.",
      benefits: [
        "Direct one-on-one chat",
        "Group messaging",
        "Robust privacy controls"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary to-secondary text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Unlock a World of Connection with HuLink</h1>
            <h2 className="text-xl md:text-2xl">
              Explore the powerful features designed to bring people together.
            </h2>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {features.map((feature, index) => (
              <div key={index} className={`mb-16 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} flex flex-col md:flex-row items-center gap-8`}>
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
                  <p className="text-lg text-gray-700 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:w-1/2 bg-gray-100 rounded-lg p-4">
                  <div className="bg-white p-8 rounded shadow-md h-64 flex items-center justify-center">
                    <p className="text-gray-500 text-center">Feature screenshot or illustration</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Demo Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Experience HuLink Firsthand</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Watch a quick demo to see how HuLink can transform your community connections.
            </p>
            <button className="inline-block bg-primary text-white px-8 py-3 rounded-md font-semibold hover:bg-primary-dark transition duration-300">
              Watch Demo
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Features;