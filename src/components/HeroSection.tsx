import { motion } from "framer-motion";
import heroHome from "@/assets/hero-home.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Video Section */}
      {/* Video Section */}
<div className="relative w-full flex justify-center bg-background pt-12">
  <div className="relative w-[95%] md:w-[85%] lg:w-[75%] aspect-video rounded-3xl overflow-hidden shadow-2xl border border-border">
    
    <video
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-full object-cover"
    >
      <source src="/hero-video.mp4" type="video/mp4" />
    </video>

    {/* Soft overlay */}
    <div className="absolute inset-0 bg-black/20" />

  </div>
</div>


      {/* Content Below Video */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-6xl mx-auto px-4 py-16 md:py-20 bg-background">
        {/* Left: Text */}
        <div className="flex-1 text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-4"
          >
            Menorah Financial Services
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight mb-6"
          >
            Lighting Your{" "}
            <span className="gradient-text">Dream Home</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted-foreground text-lg md:text-xl font-light mb-10"
          >
            We are there when you are needed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <a
              href="#contact"
              className="gradient-brand text-primary-foreground px-8 py-3.5 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity shadow-glow"
            >
              Apply for Loan
            </a>
            <a
              href="#contact"
              className="border-2 border-secondary/40 text-secondary px-8 py-3.5 rounded-full font-semibold text-lg hover:bg-secondary/10 transition-colors"
            >
              Contact Us
            </a>
          </motion.div>
        </div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 w-full max-w-md md:max-w-lg"
        >
          <img
            src={heroHome}
            alt="Beautiful modern dream home"
            className="w-full rounded-2xl shadow-card"
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="flex justify-center pb-8"
      >
        <div className="w-6 h-10 border-2 border-secondary/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
