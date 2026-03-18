import { motion } from "framer-motion";
import { Check, Zap, Brain, Heart, Shield, Activity, Droplets } from "lucide-react";
import cellpwrImg from "@/assets/cellpwr-sport.png";
import { useParallax } from "@/hooks/use-parallax";

const benefits = [
  { icon: Activity, text: "Muscles, tendons, ligaments" },
  { icon: Brain, text: "Mental sharpness" },
  { icon: Zap, text: "Mitochondrial function / ATP levels / energy" },
  { icon: Droplets, text: "Cell to cell communication" },
  { icon: Shield, text: "Antioxidant levels / free radical reduction" },
  { icon: Heart, text: "Inflammation management" },
  { icon: Activity, text: "Blood oxygen levels / energy" },
  { icon: Brain, text: "Quick neuro-receptor response" },
  { icon: Activity, text: "Enhanced proprioception for balance and agility" },
  { icon: Zap, text: "Blood sugar management / energy" },
  { icon: Shield, text: "Adrenal / stress support" },
  { icon: Heart, text: "Reparative mechanism of the body" },
];

const PowerPowderSection = () => {
  const { ref, offset } = useParallax(0.3);

  return (
    <section ref={ref} className="relative py-16 md:py-24 bg-primary overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ transform: `translateY(${offset}px)` }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[hsl(175,80%,50%)] opacity-[0.06] blur-[120px]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-accent opacity-[0.04] blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex justify-center relative"
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-[hsl(175,80%,50%)] opacity-[0.12] blur-[80px]" />
            </div>
            <img
              src={cellpwrImg}
              alt="Cell PWR Sport - Glycopeptides Dietary Supplement"
              className="relative w-full max-w-sm md:max-w-md drop-shadow-[0_0_60px_rgba(0,255,200,0.15)]"
            />
          </motion.div>

          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-[hsl(175,80%,50%)]/10 text-[hsl(175,80%,65%)] text-xs font-bold tracking-widest uppercase mb-4 border border-[hsl(175,80%,50%)]/20">
                Featured Product
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground leading-tight mb-3">
                Cell PWR Sport
              </h2>
              <p className="text-[hsl(175,80%,65%)] font-display text-lg font-semibold mb-2">
                Natural Body Optimization
              </p>
              <p className="text-primary-foreground/60 text-sm mb-2">
                Glycopeptides Dietary Supplement · Net Wt. 150g
              </p>
              <div className="h-px bg-primary-foreground/10 my-6" />
              <h3 className="font-display text-lg font-bold text-primary-foreground mb-5 flex items-center gap-2">
                <Zap size={18} className="text-[hsl(175,80%,65%)]" />
                Power Powder Benefits
              </h3>
              <p className="text-primary-foreground/50 text-sm mb-5">
                Supportive nutrition for:
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {benefits.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                  className="flex items-start gap-3 group"
                >
                  <div className="mt-0.5 flex-shrink-0 h-5 w-5 rounded-full bg-[hsl(175,80%,50%)]/15 flex items-center justify-center">
                    <Check size={11} className="text-[hsl(175,80%,65%)]" />
                  </div>
                  <span className="text-primary-foreground/80 text-sm leading-snug group-hover:text-primary-foreground transition-colors">
                    {b.text}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex gap-4"
            >
              <a
                href="#shop"
                className="px-8 py-3 rounded-lg bg-[hsl(175,80%,50%)] text-primary font-bold text-sm hover:opacity-90 transition-opacity"
              >
                Shop Now
              </a>
              <a
                href="#order"
                className="px-8 py-3 rounded-lg border border-primary-foreground/20 text-primary-foreground font-semibold text-sm hover:bg-primary-foreground/5 transition-colors"
              >
                Learn More
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PowerPowderSection;
