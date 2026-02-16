import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import founder1 from "@/assets/founder1.jpg";
import founder2 from "@/assets/founder2.jpg";

const founders = [
  { name: "Madhu Konna", role: "Founder & CEO", image: founder1 },
  { name: "Johar Babu Palavi", role: "Co-Founder & COO", image: founder2 },
];

const FoundersSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="founders" className="py-20 md:py-28 gradient-subtle">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Leadership</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Message From Our <span className="gradient-text">Founders</span>
          </h2>
          <p className="text-muted-foreground text-lg">Leading with Vision, Growing with Passion.</p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center max-w-3xl mx-auto text-muted-foreground text-lg leading-relaxed mb-16"
        >
          At Menorah Financial Services, we believe that success is built on innovation, teamwork, and trust.
          Our mission is to empower every individual with the financial solutions they deserve, making
          homeownership a reality for all.
        </motion.p>

        <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
          {founders.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 text-center max-w-xs w-full"
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full p-1 gradient-brand">
                <img
                  src={f.image}
                  alt={f.name}
                  className="w-full h-full rounded-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="font-bold text-foreground text-xl mb-1">{f.name}</h3>
              <p className="text-primary font-medium text-sm">{f.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
