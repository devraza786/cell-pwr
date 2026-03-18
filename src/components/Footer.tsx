const logoUrl = "https://cdn.builder.io/api/v1/image/assets%2Fd4fa75cea8dc4bea80ee4cb1488f6829%2Fc5b08b69ba0c4bc28267cbe9c0361757?format=webp&width=800&height=1200";

const Footer = () => (
  <footer className="bg-black border-t border-border">
    <div className="container mx-auto px-6 py-16">
      {/* Footer Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
        {/* Brand Section */}
        <div className="md:col-span-1">
          <div className="flex flex-col gap-4">
            <img src={logoUrl} alt="Cell PWR" className="h-12 w-auto" />
            <div>
              <p className="text-white text-sm font-bold">Cell PWR</p>
              <p className="text-white/60 text-xs mt-1">Premium Wellness Products</p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#home" className="text-white/60 text-sm hover:text-white transition-colors">Home</a></li>
            <li><a href="#shop" className="text-white/60 text-sm hover:text-white transition-colors">Shop</a></li>
            <li><a href="#about" className="text-white/60 text-sm hover:text-white transition-colors">About</a></li>
            <li><a href="#contact" className="text-white/60 text-sm hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Support</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-white/60 text-sm hover:text-white transition-colors">Terms & Conditions</a></li>
            <li><a href="#" className="text-white/60 text-sm hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="text-white/60 text-sm hover:text-white transition-colors">Contact Support</a></li>
            <li><a href="#" className="text-white/60 text-sm hover:text-white transition-colors">FAQ</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Contact</h4>
          <ul className="space-y-2 text-white/60 text-sm">
            <li>Email: info@cellpwr.com</li>
            <li>Phone: (555) 123-4567</li>
            <li className="text-xs">7640 Hasentree Way<br />Wake Forest, NC 27587</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 pt-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-xs">
            © 2026 Cell PWR. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/50 text-xs hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-white/50 text-xs hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-white/50 text-xs hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
