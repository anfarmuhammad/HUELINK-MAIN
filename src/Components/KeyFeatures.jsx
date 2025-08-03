const KeyFeatures = () => {
  const features = [
    {
      title: "Empathy & Accessibility",
      description:
        "We design inclusive solutions that address diverse speech needs, making advanced support accessible to everyone.",
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292 4 4 0 010-5.292zM4.318 17.682A8 8 0 0112 4a8 8 0 017.682 13.682A8 8 0 0112 20a8 8 0 01-7.682-2.318z"
          />
        </svg>
      )
    },
    {
      title: "Innovation & Quality",
      description:
        "Our team leverages the latest AI advancements to ensure accurate, effective, and transformative communication tools.",
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4m16 0a8 8 0 01-16 0 8 8 0 0116 0z"
          />
        </svg>
      )
    },
    {
      title: "Empowerment & Collaboration",
      description:
        "We empower users to take control of their progress while actively collaborating with the best minds in technology and speech sciences.",
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a4 4 0 00-4-4h-1m-4-4a4 4 0 10-8 0v4a4 4 0 008 0v-4zm0 0V6m4 14v-2a4 4 0 00-4-4H7"
          />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
