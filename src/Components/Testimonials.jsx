import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Aisha Khan",
      role: "Hiking Enthusiast",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Raj Patel",
      role: "Community Organizer",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Sophia Chen",
      role: "Book Club Founder",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "A.K. Sharma",
      role: "Founder & CEO",
      avatar: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
      name: "Rina Mathew",
      role: "CTO",
      avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    },
    {
      name: "Dr. Binu Nair",
      role: "Lead Clinical Advisor",
      avatar: "https://randomuser.me/api/portraits/men/55.jpg",
    },
  ];

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.firstChild?.clientWidth || 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const preventScroll = (e) => {
    e.preventDefault();
  };

  return (
    <section
      className="py-8 sm:py-12 md:py-16 bg-black text-white relative overflow-hidden"
      style={{
        backgroundImage:
          "url('https://framerusercontent.com/images/mn2zfZoubysqLkaubCf2KzJuyo.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-10 md:mb-12">
          What Our Users Say
        </h2>

        {/* Navigation Buttons - Desktop */}
        <button
          onClick={() => scroll("left")}
          className="hidden sm:block absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 text-white z-20 p-2 sm:p-3 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition"
          aria-label="Scroll Left"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={() => scroll("right")}
          className="hidden sm:block absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 text-white z-20 p-2 sm:p-3 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition"
          aria-label="Scroll Right"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 w-full overflow-x-hidden h-full pb-4 px-4 sm:px-6"
          onWheel={preventScroll}
          onTouchMove={preventScroll}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[350px] lg:w-[380px] h-[240px] sm:h-[300px] md:h-[340px] rounded-xl md:rounded-2xl shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] cursor-pointer hover:scale-105 transition-transform duration-300 relative"
              style={{
                backgroundImage: `url(${testimonial.avatar})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/60 rounded-xl md:rounded-2xl p-4 flex flex-col justify-end">
                <div className="text-right text-white">
                  <h4 className="font-semibold text-lg sm:text-xl md:text-2xl">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-300 text-sm sm:text-base mt-1">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex justify-center gap-6 mt-6">
          <button
            onClick={() => scroll("left")}
            className="text-white z-20 p-3 rounded-full bg-black bg-opacity-70 hover:bg-opacity-90 transition"
            aria-label="Scroll Left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="text-white z-20 p-3 rounded-full bg-black bg-opacity-70 hover:bg-opacity-90 transition"
            aria-label="Scroll Right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;