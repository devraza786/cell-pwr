import { motion } from "framer-motion";
import { Mail, Phone, Clock, Instagram, Facebook, Twitter } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [email, setEmail] = useState("");

  return (
    <section id="contact" className="py-20 md:py-28 bg-surface">
      <div className="container mx-auto px-6">
        <div className="mb-14 text-center">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-2">Peptides Rule</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Get In Touch</h2>
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto bg-primary rounded-xl p-8 mb-16 text-center"
        >
          <h3 className="font-display text-xl font-bold text-primary-foreground mb-2">
            Join Our Newsletter
          </h3>
          <p className="text-primary-foreground/60 text-sm mb-5">
            Get exclusive deals and research updates delivered to your inbox
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Subscribed!");
              setEmail("");
            }}
            className="flex gap-2"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-4 py-2.5 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button
              type="submit"
              className="px-6 py-2.5 rounded-lg bg-cta text-cta-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Submit
            </button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
          >
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-accent/10 text-accent mb-4">
              <Mail size={22} />
            </div>
            <h4 className="font-display font-semibold text-cta text-sm uppercase tracking-wider mb-1">Email</h4>
            <p className="text-foreground text-sm">support@peptidesrule.com</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-accent/10 text-accent mb-4">
              <Phone size={22} />
            </div>
            <h4 className="font-display font-semibold text-cta text-sm uppercase tracking-wider mb-1">Phone</h4>
            <p className="text-foreground text-sm">1-800-PEPTIDES</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-accent/10 text-accent mb-4">
              <Clock size={22} />
            </div>
            <h4 className="font-display font-semibold text-cta text-sm uppercase tracking-wider mb-1">Hours</h4>
            <p className="text-foreground text-sm">24/7 Support Available</p>
          </motion.div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-5 mt-12">
          {[Instagram, Facebook, Twitter].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:opacity-80 transition-opacity"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
