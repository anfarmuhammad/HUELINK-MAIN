const Testimonials = () => {
  const testimonials = [
    {
      name: "Aisha Khan",
      role: "Hiking Enthusiast",
      content: "HuLink helped me find my passion for hiking and a fantastic group of new friends!",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Raj Patel",
      role: "Community Organizer",
      content: "Organizing my community workshops has never been easier. HuLink is a game-changer!",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Sophia Chen",
      role: "Book Club Founder",
      content: "I've doubled my book club membership since using HuLink to connect with local readers.",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      name: "A.K. Sharma",
      role: "Founder & CEO",
      content: "Driving the overall vision and shaping the strategic roadmap of HuLink.",
      avatar: "https://randomuser.me/api/portraits/men/11.jpg"
    },
    {
      name: "Rina Mathew",
      role: "CTO",
      content: "Leading the AI and speech tech innovations to power personalized experiences.",
      avatar: "https://randomuser.me/api/portraits/women/22.jpg"
    },
    {
      name: "Dr. Binu Nair",
      role: "Lead Clinical Advisor",
      content: "Ensuring clinical excellence in speech pathology integration.",
      avatar: "https://randomuser.me/api/portraits/men/55.jpg"
    }
  ];

  return (
    <section
      className="py-16 bg-black text-white"
      style={{
        backgroundImage: "url('https://framerusercontent.com/images/mn2zfZoubysqLkaubCf2KzJuyo.png')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-black backdrop-blur-[8px] border border-white/20 rounded-2xl p-6 shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] hover:scale-105 transition duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={`Photo of ${testimonial.name}`}
                  className="w-12 h-12 rounded-full mr-4 border border-white/20"
                />
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-gray-300 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-200 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
