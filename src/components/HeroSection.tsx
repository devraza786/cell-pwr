import { motion } from "framer-motion";
import heroImg from "@/assets/hero-container.png";

const HeroSection = () => (
  <section id="home" className="pt-16">
    <div className="relative overflow-hidden bg-primary">
      <div className="container mx-auto px-6 py-20 md:py-32 flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-left"
        >
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">
            Premium Quality Peptides
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Get Your Stack.<br />Elevate Your Game.
          </h1>
          <p className="text-primary-foreground/70 text-lg max-w-md mb-8">
            Research-grade peptides trusted by athletes and professionals. Purity tested, fast shipping, unmatched quality.
          </p>
          <div className="flex gap-4">
            <a
              href="#shop"
              className="px-8 py-3 rounded-lg bg-cta text-cta-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Shop Now
            </a>
            <a
              href="#about"
              className="px-8 py-3 rounded-lg border border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors"
            >
              Learn More
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 flex justify-center"
        >
          <img
            src={heroImg}
            alt="100 Yards Peptide Vial"
            className="w-full max-w-lg object-contain drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
