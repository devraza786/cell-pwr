import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useParallax } from "@/hooks/use-parallax";

const faqs = [
  {
    question: "What are peptides and how do they work?",
    answer: "Peptides are chains of amino acids that your body uses to build proteins. Our research-grade peptides are designed to support specific biological functions, from muscle recovery to cellular repair and regeneration."
  },
  {
    question: "Are your products lab tested?",
    answer: "Yes, every batch of Cell PWR products undergoes rigorous third-party laboratory testing to verify purity, potency, and safety. We maintain the highest standards of quality control."
  },
  {
    question: "What is the typical shipping time?",
    answer: "We offer fast shipping with most orders processed and shipped within 24-48 hours. Standard delivery typically arrives within 3-5 business days depending on your location."
  },
  {
    question: "Do you offer a money-back guarantee?",
    answer: "We stand behind the quality of our products. If you're not satisfied with your purchase, we offer a 30-day money-back guarantee, no questions asked."
  },
  {
    question: "Are these products legal?",
    answer: "Our products are legal for research and educational purposes in most jurisdictions. However, regulations vary by location, so we recommend checking your local laws before ordering."
  },
  {
    question: "How should I store my peptides?",
    answer: "Peptides should be stored in a cool, dry place, ideally at 2-8°C (35-46°F) for optimal stability. Lyophilized peptides can be stored at room temperature if kept in a sealed container."
  },
];

const FAQSection = () => {
  const { ref, offset } = useParallax(0.15);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-24 md:py-32 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ transform: `translateY(${offset}px)` }}>
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-accent opacity-[0.06] blur-[100px]" />
        <div className="absolute bottom-20 right-0 w-80 h-80 rounded-full bg-cta opacity-[0.04] blur-[80px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center max-w-2xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-widest uppercase mb-4 border border-accent/20">
            Frequently Asked
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            Common Questions
          </h2>
          <p className="text-primary-foreground/60 text-sm md:text-base">
            Find answers to the most common questions about our products, shipping, and more.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="mb-4"
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                className="w-full px-6 py-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 hover:border-accent/30 hover:bg-primary-foreground/[0.08] transition-all duration-300 text-left group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-base md:text-lg font-semibold text-primary-foreground group-hover:text-accent transition-colors">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: expandedIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 ml-4"
                  >
                    <ChevronDown size={20} className="text-accent" />
                  </motion.div>
                </div>
              </button>

              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: expandedIndex === i ? 1 : 0,
                  height: expandedIndex === i ? "auto" : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 py-4 bg-primary-foreground/[0.03] border-b border-primary-foreground/10">
                  <p className="text-primary-foreground/70 text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-primary-foreground/60 text-sm mb-4">
            Can't find the answer you're looking for?
          </p>
          <a
            href="#contact"
            className="inline-flex px-8 py-3 rounded-lg bg-accent text-primary font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Contact Support
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
