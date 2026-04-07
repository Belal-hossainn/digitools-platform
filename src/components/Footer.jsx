const Footer = () => {
  return (
    <div className="bg-[#0B1120] text-gray-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-10">
        <div>
          <h2 className="text-white text-2xl font-bold">DigiTools</h2>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Product</h3>
          <ul className="space-y-2 text-sm">
            <li>Features</li>
            <li>Pricing</li>
            <li>Templates</li>
            <li>Integrations</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>Documentation</li>
            <li>Help Center</li>
            <li>Community</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Social Links</h3>

          <div className="flex gap-3">
            <div className="w-9 h-9 bg-white text-black rounded-full flex items-center justify-center">
              <img src="https://i.ibb.co.com/MHBPWsW/Facebook.png" alt="" />
            </div>
            <div className="w-9 h-9 bg-white text-black rounded-full flex items-center justify-center">
              <img src="https://i.ibb.co.com/TxX1ypv1/Instagram.png" alt="" />
            </div>
            <div className="w-9 h-9 bg-white text-black rounded-full flex items-center justify-center">
              <img src="https://i.ibb.co.com/ynqHsss5/Vector.png" alt="" />
            </div>
          </div>
        </div>

      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between text-sm text-gray-400">
        <p>© 2026 Digitools. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Cookies</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;