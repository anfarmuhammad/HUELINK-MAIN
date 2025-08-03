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
    }
  ];

  return (
    <section className="py-16 bg-black text-white from-white to-slate-100 bg-cover dark:from-[#0f172a] dark:to-[#1e293b]"
      style={{ backgroundImage: "url('https://framerusercontent.com/images/mn2zfZoubysqLkaubCf2KzJuyo.png')" }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center  dark:text-white mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-black h-[300px] backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-lg text-left transition duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={`Photo of ${testimonial.name}`}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold  dark:text-white">{testimonial.name}</h4>
                  <p className=" dark:text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className=" dark:text-gray-300 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
