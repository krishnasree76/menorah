import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    text: "Menorah made my home buying journey so smooth. The team was incredibly supportive and got me the best interest rate!",
    rating: 5,
    location: "Nellore",
  },
  {
    name: "Priya Sharma",
    text: "Excellent service! Doorstep documentation saved me so much time. Highly recommended for anyone looking for home loans.",
    rating: 5,
    location: "Hyderabad",
  },
  {
    name: "Venkat Rao",
    text: "Professional team with transparent process. They compared rates from multiple banks and found the best deal for me.",
    rating: 5,
    location: "Bengaluru",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section className="py-20 md:py-28 gradient-subtle">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Testimonials</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto bg-card rounded-2xl p-8 md:p-12 shadow-card text-center relative"
        >
          <div className="flex justify-center gap-1 mb-4">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-accent text-accent" />
            ))}
          </div>
          <p className="text-foreground text-lg leading-relaxed mb-6 italic">"{t.text}"</p>
          <p className="font-bold text-foreground">{t.name}</p>
          <p className="text-muted-foreground text-sm">{t.location}</p>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
