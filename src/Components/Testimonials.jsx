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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={`Photo of ${testimonial.name}`} 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;