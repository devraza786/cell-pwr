import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useParallax } from "@/hooks/use-parallax";

const testimonials = [
  {
    name: "Marcus Johnson",
    text: "These peptides have completely transformed my recovery time. I'm back in the gym faster and stronger than ever. Highly recommend!",
  },
  {
    name: "Sarah Mitchell",
    text: "As a competitive athlete, quality matters. This is the only brand I trust for my research needs. The purity is unmatched.",
  },
  {
    name: "David Reyes",
    text: "Outstanding products and customer service. Fast shipping and the results speak for themselves. A game changer for my training.",
  },
];

const TestimonialsSection = () => {
  const { ref, offset } = useParallax(0.2);

  return (
    <section ref={ref} id="about" className="py-16 md:py-24 bg-primary relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none" style={{ transform: `translateY(${offset}px)` }}>
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-accent opacity-[0.07] blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-cta opacity-[0.05] blur-[80px]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
    </div>

    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14 text-center"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-widest uppercase mb-4 border border-accent/20">
          Testimonials
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground">
          What Our Clients Say
        </h2>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-gradient-to-br from-primary-foreground/[0.08] to-primary-foreground/[0.03] rounded-2xl border border-primary-foreground/15 p-8 relative group hover:border-accent/40 hover:shadow-xl transition-all duration-300"
          >
            <Quote size={40} className="text-accent/15 absolute top-4 right-4" />
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={18} className="fill-accent text-accent" />
              ))}
            </div>
            <p className="text-primary-foreground/70 text-base leading-relaxed mb-8 font-medium">"{t.text}"</p>
            <div className="flex items-center gap-4 pt-4 border-t border-primary-foreground/10">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-accent/40 to-accent/20 flex items-center justify-center text-accent font-bold text-lg flex-shrink-0">
                {t.name[0]}
              </div>
              <div>
                <p className="font-display font-semibold text-primary-foreground text-sm">{t.name}</p>
                <p className="text-primary-foreground/40 text-xs">Verified Customer</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default TestimonialsSection;
