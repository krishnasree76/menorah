import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Eye, FileText, Building } from "lucide-react";

const features = [
  { icon: Zap, title: "Fast Approvals", desc: "Get your loan approved within days, not weeks." },
  { icon: Eye, title: "Transparent Process", desc: "No hidden charges, clear documentation." },
  { icon: FileText, title: "Doorstep Documentation", desc: "We come to you for all paperwork." },
  { icon: Building, title: "Multiple Bank Partnerships", desc: "Access to the best rates across banks." },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-28 gradient-subtle">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Who We Are</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="gradient-text">Menorah Financial Services</span>
          </h2>
          <p className="max-w-3xl mx-auto text-muted-foreground text-lg leading-relaxed">
            Menorah Financial Services operates in Andhra Pradesh, Telangana, and Bengaluru, Karnataka,
            providing home loan expertise with doorstep documentation and personalized eligibility checks.
            We partner with multiple banks to secure competitive interest rates and EMI plans, simplifying
            the journey from renter to homeowner.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="w-14 h-14 rounded-full gradient-brand flex items-center justify-center mx-auto mb-4">
                <f.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-foreground text-lg mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
