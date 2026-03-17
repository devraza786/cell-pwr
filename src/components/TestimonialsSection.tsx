import { motion } from "framer-motion";
import { Star } from "lucide-react";

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
  <section id="about" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-6">
      <div className="mb-14">
        <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-2">Testimonials</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          What Our Clients Say
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-surface rounded-xl border border-border p-8"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={16} className="fill-accent text-accent" />
              ))}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-sm">
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
