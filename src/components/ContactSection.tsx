import { motion } from "framer-motion";
import { Mail, Phone, Clock, Instagram, Facebook, Twitter } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [email, setEmail] = useState("");

  return (
    <section id="contact" className="py-16 md:py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-accent opacity-[0.06] blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-14 text-center">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-2">Peptides Rule</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">Get In Touch</h2>
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
            <p className="text-primary-foreground text-sm">support@peptidesrule.com</p>
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
            <p className="text-primary-foreground text-sm">1-800-PEPTIDES</p>
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
            <p className="text-primary-foreground text-sm">24/7 Support Available</p>
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

        {/* Google Maps Embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <h3 className="font-display text-xl font-semibold text-primary-foreground mb-4 text-center">Visit Us</h3>
          <div className="rounded-xl overflow-hidden border border-primary-foreground/20 h-96">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3201.3738402923817!2d-78.5381!3d35.9101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89acc3e0e0e0e0e1%3A0xe0e0e0e0e0e0e0e0!2s7640%20Hasentree%20Way%2C%20Wake%20Forest%2C%20NC%2027587!5e0!3m2!1sen!2sus!4v1234567890"
              title="Cell PWR Location"
            />
          </div>
          <p className="text-primary-foreground/60 text-sm mt-4 text-center">
            7640 Hasentree Way, Wake Forest, NC 27587
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
