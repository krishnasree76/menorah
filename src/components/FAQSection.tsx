import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What documents are required for a home loan?",
    a: "Typically you need ID proof, address proof, income proof (salary slips or ITR), bank statements, and property documents. Our team will guide you through the exact requirements.",
  },
  {
    q: "How long does the loan approval process take?",
    a: "With our streamlined process, most loans are approved within 5-7 working days after submission of complete documentation.",
  },
  {
    q: "Do you charge any processing fees?",
    a: "Processing fees vary by bank and loan type. We ensure complete transparency — all fees are communicated upfront with no hidden charges.",
  },
  {
    q: "Can I transfer my existing home loan to get a better rate?",
    a: "Yes! We offer balance transfer services to help you switch to a lower interest rate, potentially saving you lakhs over your loan tenure.",
  },
  {
    q: "Which areas do you serve?",
    a: "We currently operate across Andhra Pradesh, Telangana, and Bengaluru, Karnataka, with plans to expand further.",
  },
];

const FAQSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">FAQ</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card rounded-xl px-6 shadow-card border-none"
              >
                <AccordionTrigger className="text-foreground font-semibold text-left hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
