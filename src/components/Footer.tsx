import logo from "@/assets/logo-100yards.png";

const Footer = () => (
  <footer className="bg-foreground py-10">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-4">
        <img src={logo} alt="100 Yards" className="h-10 w-auto brightness-0 invert" />
        <div className="text-left">
          <p className="text-background text-xs font-bold">100 YARDS LLC</p>
          <p className="text-background/50 text-xs">7640 HASENTREE WAY</p>
          <p className="text-background/50 text-xs">WAKE FOREST, NC 27587</p>
        </div>
      </div>
      <div className="flex gap-6 text-sm text-background/60">
        <a href="#" className="hover:text-background transition-colors">Terms & Support</a>
        <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
      </div>
      <p className="text-background/40 text-xs">
        © 2026 100YARDS LLC. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
