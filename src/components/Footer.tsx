const logoUrl = "https://cdn.builder.io/api/v1/image/assets%2Fd4fa75cea8dc4bea80ee4cb1488f6829%2Fc5b08b69ba0c4bc28267cbe9c0361757?format=webp&width=800&height=1200";

const Footer = () => (
  <footer className="bg-gray-950 border-t border-gray-800">
    <div className="container mx-auto px-6 py-16">
      {/* Footer Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Brand Section */}
        <div className="md:col-span-1">
          <div className="flex flex-col gap-4">
            <div className="h-16 w-auto bg-white rounded-lg p-2 flex items-center justify-center">
              <img src={logoUrl} alt="Cell PWR" className="h-full w-auto" />
            </div>
            <div>
              <p className="text-white text-sm font-bold">Cell PWR</p>
              <p className="text-gray-400 text-xs mt-1">Premium Wellness Products</p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">Quick Links</h4>
          <ul className="space-y-2.5">
            <li><a href="#home" className="text-gray-400 text-sm hover:text-white transition-colors duration-200">Home</a></li>
            <li><a href="#shop" className="text-gray-400 text-sm hover:text-white transition-colors duration-200">Shop</a></li>
            <li><a href="#about" className="text-gray-400 text-sm hover:text-white transition-colors duration-200">About</a></li>
            <li><a href="#contact" className="text-gray-400 text-sm hover:text-white transition-colors duration-200">Contact</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">Support</h4>
          <ul className="space-y-2.5">
            <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors duration-200">Terms & Conditions</a></li>
            <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors duration-200">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors duration-200">Contact Support</a></li>
            <li><a href="#contact" className="text-gray-400 text-sm hover:text-white transition-colors duration-200">FAQ</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">Contact</h4>
          <ul className="space-y-2.5 text-gray-400 text-sm">
            <li><a href="mailto:info@cellpwr.com" className="hover:text-white transition-colors duration-200">Email: info@cellpwr.com</a></li>
            <li><a href="tel:5551234567" className="hover:text-white transition-colors duration-200">Phone: (555) 123-4567</a></li>
            <li className="text-xs">7640 Hasentree Way<br />Wake Forest, NC 27587</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 pt-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © 2026 Cell PWR. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 text-xs hover:text-white transition-colors duration-200">Terms</a>
            <a href="#" className="text-gray-500 text-xs hover:text-white transition-colors duration-200">Privacy</a>
            <a href="#" className="text-gray-500 text-xs hover:text-white transition-colors duration-200">Cookies</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
