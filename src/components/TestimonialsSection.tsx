import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

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

const TestimonialsSection = () => (
  <section id="about" className="py-24 md:py-32 bg-primary relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
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
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-primary-foreground/5 rounded-2xl border border-primary-foreground/10 p-8 relative group hover:shadow-lg transition-shadow duration-300"
          >
            <Quote size={32} className="text-accent/10 absolute top-6 right-6" />
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={16} className="fill-accent text-accent" />
              ))}
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-6">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-sm">
                {t.name[0]}
              </div>
              <p className="font-display font-semibold text-foreground text-sm">{t.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
