import { motion } from "framer-motion";
import { ArrowRight, Shield, Truck, Award } from "lucide-react";
import heroImg from "@/assets/hero-container.png";

const badges = [
  { icon: Shield, text: "Purity Tested" },
  { icon: Truck, text: "Fast Shipping" },
  { icon: Award, text: "Lab Verified" },
];

const HeroSection = () => (
  <section id="home" className="pt-4">
    <div className="relative overflow-hidden bg-primary">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-accent opacity-[0.07] blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-cta opacity-[0.05] blur-[80px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container mx-auto px-6 py-24 md:py-36 flex flex-col md:flex-row items-center gap-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-left"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-widest uppercase mb-6 border border-accent/20"
          >
            Premium Quality Peptides
          </motion.span>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.1] mb-6">
            Get Your Stack.
            <br />
            <span className="text-accent">Elevate</span> Your Game.
          </h1>
          <p className="text-primary-foreground/60 text-lg max-w-lg mb-10 leading-relaxed">
            Research-grade peptides trusted by athletes and professionals. Purity tested, fast shipping, unmatched quality.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="#shop"
              className="group px-8 py-3.5 rounded-lg bg-cta text-cta-foreground font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              Shop Now
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#about"
              className="px-8 py-3.5 rounded-lg border border-primary-foreground/20 text-primary-foreground font-semibold hover:bg-primary-foreground/5 transition-colors"
            >
              Learn More
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-6">
            {badges.map((b, i) => (
              <motion.div
                key={b.text}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex items-center gap-2 text-primary-foreground/50"
              >
                <b.icon size={16} className="text-accent" />
                <span className="text-xs font-medium">{b.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-1 flex justify-center relative"
        >
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-80 h-80 rounded-full bg-accent opacity-[0.08] blur-[60px]" />
          </div>
          <img
            src={heroImg}
            alt="100 Yards Peptide Vial"
            className="relative w-full max-w-lg object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
