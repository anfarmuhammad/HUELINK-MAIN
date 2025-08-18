import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Dot from "../assets/images/Dot.png"

const Testimonials = () => {
  const testimonials = [
    { name: "Aisha Khan", role: "Hiking Enthusiast", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
    { name: "Raj Patel", role: "Community Organizer", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "Sophia Chen", role: "Book Club Founder", avatar: "https://randomuser.me/api/portraits/women/68.jpg" },
    { name: "A.K. Sharma", role: "Founder & CEO", avatar: "https://randomuser.me/api/portraits/men/11.jpg" },
    { name: "Rina Mathew", role: "CTO", avatar: "https://randomuser.me/api/portraits/women/22.jpg" },
    { name: "Dr. Binu Nair", role: "Lead Clinical Advisor", avatar: "https://randomuser.me/api/portraits/men/55.jpg" },
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

  const preventScroll = (e) => e.preventDefault();

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const scrollAmount = scrollRef.current.firstChild?.clientWidth || 320;
        if (
          scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
          scrollRef.current.scrollWidth
        ) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="py-8 sm:py-12 md:py-16 bg-black text-white relative overflow-hidden"
      style={{
        backgroundImage: `url(${Dot})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 flex flex-col items-center">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-10 md:mb-12"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          What Our Users Say
        </motion.h2>

        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 w-full overflow-x-hidden h-full pb-4 px-4 sm:px-6"
          onWheel={preventScroll}
          onTouchMove={preventScroll}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[350px] lg:w-[380px] h-[240px] sm:h-[300px] md:h-[340px] rounded-xl md:rounded-2xl shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] cursor-pointer hover:scale-105 transition-transform duration-300 relative"
              style={{
                backgroundImage: `url(${testimonial.avatar})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
