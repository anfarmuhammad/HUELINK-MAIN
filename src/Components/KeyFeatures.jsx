const KeyFeatures = () => {
  const features = [
    {
      title: "Empathy & Accessibility",
      description:
        "We design inclusive solutions that address diverse speech needs, making advanced support accessible to everyone.",
      bgImage:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" // empathy related bg
    },
    {
      title: "Innovation & Quality",
      description:
        "Our team leverages the latest AI advancements to ensure accurate, effective, and transformative communication tools.",
      bgImage:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80" // innovation related bg
    },
    {
      title: "Empowerment & Collaboration",
      description:
        "We empower users to take control of their progress while actively collaborating with the best minds in technology and speech sciences.",
      bgImage:
        "https://images.unsplash.com/photo-1521790797524-b2497295b8a0?auto=format&fit=crop&w=400&q=80" // collaboration related bg
    }
  ];

  return (
    <section className="py-16 bg-black"
      // style={{
      //   backgroundImage:
      //     "url('https://framerusercontent.com/images/mn2zfZoubysqLkaubCf2KzJuyo.png')",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
        
      // }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative h-[300px] rounded-2xl  inset-0  bg-opacity-60 dark:bg-opacity-70  overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300 bg-black dark:bg-black"
              style={{
                backgroundImage: `url(${feature.bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Dark overlay for readability */}


              <div className="relative z-10  h-full flex flex-col justify-center text-center text-white">
                <div className="w-full h-full flex items-center flex-col justify-center bg-black/70">
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-200">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
