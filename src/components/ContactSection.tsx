import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", phone: "", loanType: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We will contact you shortly.");
    setForm({ name: "", phone: "", loanType: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-28 gradient-subtle">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Get In Touch</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Contact <span className="gradient-text">Us</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full gradient-brand flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Address</h4>
                <p className="text-muted-foreground text-sm">
                  #20-1A-3-351/2, 5th Street,<br />
                  Sramika Nagar, Nellore - 524004.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full gradient-brand flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Phone</h4>
                <p className="text-muted-foreground text-sm">8500761937<br />8431993546</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full gradient-brand flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Email</h4>
                <p className="text-muted-foreground text-sm">contact@menorahfinancialservices.com</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full gradient-brand flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Business Hours</h4>
                <p className="text-muted-foreground text-sm">
                  Mon – Fri: 9:30 AM – 6:30 PM<br />
                  Saturday: 9:30 AM – 6:30 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="bg-card rounded-2xl p-8 shadow-card space-y-5"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-muted text-foreground placeholder:text-muted-foreground border-none outline-none focus:ring-2 focus:ring-primary/30 transition"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-muted text-foreground placeholder:text-muted-foreground border-none outline-none focus:ring-2 focus:ring-primary/30 transition"
            />
            <select
              required
              value={form.loanType}
              onChange={(e) => setForm({ ...form, loanType: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-muted text-foreground border-none outline-none focus:ring-2 focus:ring-primary/30 transition"
            >
              <option value="">Select Loan Type</option>
              <option value="home">Home Loan</option>
              <option value="car">Car Loan</option>
              <option value="personal">Personal Loan</option>
              <option value="business">Business Loan</option>
            </select>
            <textarea
              placeholder="Your Message"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-muted text-foreground placeholder:text-muted-foreground border-none outline-none focus:ring-2 focus:ring-primary/30 transition resize-none"
            />
            <button
              type="submit"
              className="w-full gradient-brand text-primary-foreground py-3.5 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity shadow-glow"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
