import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import homeLoan from "@/assets/home-loan.jpg";
import carLoan from "@/assets/car-loan.jpg";
import personalLoan from "@/assets/personal-loan.jpg";
import businessLoan from "@/assets/business-loan.jpg";

const services = [
  {
    title: "Home Loans",
    image: homeLoan,
    desc: "Loans for property purchase, construction, and balance transfers.",
    icon: "🏠",
  },
  {
    title: "Car Loans",
    image: carLoan,
    desc: "Flexible car financing with easy EMIs.",
    icon: "🚗",
  },
  {
    title: "Personal Loans",
    image: personalLoan,
    desc: "Quick personal loans with minimal documentation.",
    icon: "👤",
  },
  {
    title: "Business Loans",
    image: businessLoan,
    desc: "Funding solutions to grow your business.",
    icon: "🏢",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">What We Offer</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Our <span className="gradient-text">Services</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group"
            >
              <div className="gradient-border">
                <div className="bg-card rounded-xl overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-2xl mb-2 block">{s.icon}</span>
                    <h3 className="font-bold text-foreground text-xl mb-2">{s.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
