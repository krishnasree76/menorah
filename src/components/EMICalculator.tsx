import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const EMICalculator = () => {
  const [amount, setAmount] = useState(2500000);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const monthlyRate = rate / 12 / 100;
  const months = tenure * 12;
  const emi = monthlyRate > 0
    ? (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1)
    : amount / months;
  const totalPayment = emi * months;
  const totalInterest = totalPayment - amount;

  const fmt = (n: number) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Plan Your Loan</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            EMI <span className="gradient-text">Calculator</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto bg-card rounded-2xl p-8 shadow-card"
        >
          <div className="space-y-6">
            <div>
              <label className="flex justify-between text-sm font-semibold text-foreground mb-2">
                <span>Loan Amount</span>
                <span className="text-primary">{fmt(amount)}</span>
              </label>
              <input
                type="range"
                min={100000}
                max={10000000}
                step={100000}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full accent-primary"
              />
            </div>
            <div>
              <label className="flex justify-between text-sm font-semibold text-foreground mb-2">
                <span>Interest Rate</span>
                <span className="text-primary">{rate}%</span>
              </label>
              <input
                type="range"
                min={5}
                max={20}
                step={0.1}
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full accent-primary"
              />
            </div>
            <div>
              <label className="flex justify-between text-sm font-semibold text-foreground mb-2">
                <span>Tenure (Years)</span>
                <span className="text-primary">{tenure} yrs</span>
              </label>
              <input
                type="range"
                min={1}
                max={30}
                step={1}
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="w-full accent-primary"
              />
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
  <div className="bg-muted rounded-xl p-4">
    <p className="text-xs text-muted-foreground font-semibold mb-1">
      Monthly EMI
    </p>
    <p className="text-lg font-bold gradient-text break-words">
      {fmt(emi)}
    </p>
  </div>

  <div className="bg-muted rounded-xl p-4">
    <p className="text-xs text-muted-foreground font-semibold mb-1">
      Total Interest
    </p>
    <p className="text-lg font-bold text-foreground break-words">
      {fmt(totalInterest)}
    </p>
  </div>

  <div className="bg-muted rounded-xl p-4">
    <p className="text-xs text-muted-foreground font-semibold mb-1">
      Total Payment
    </p>
    <p className="text-lg font-bold text-foreground break-words">
      {fmt(totalPayment)}
    </p>
  </div>
</div>

        </motion.div>
      </div>
    </section>
  );
};

export default EMICalculator;
