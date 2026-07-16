import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const FooterComponent = () => {
  return (
    <footer className="bg-green-950 text-gray-300">
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold text-green-400">
            Green<span className="text-white">Mart</span>
          </h2>

          <p className="mt-5 text-gray-400 leading-7">
            Fresh groceries delivered straight to your doorstep. We bring you
            quality fruits, vegetables, dairy products, beverages, and everyday
            essentials at affordable prices.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {[
              { icon: <FaFacebookF />, color: "hover:bg-blue-600" },
              { icon: <FaTwitter />, color: "hover:bg-sky-500" },
              { icon: <FaInstagram />, color: "hover:bg-pink-600" },
              { icon: <FaLinkedinIn />, color: "hover:bg-blue-700" },
            ].map((item, index) => (
              <a
                key={index}
                href="#"
                className={`w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center transition duration-300 ${item.color}`}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-5">Quick Links</h3>

          <ul className="space-y-3">
            {[
              "Home",
              "Shop",
              "Categories",
              "Offers",
              "About Us",
              "Contact",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-green-400 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-5">
            Customer Support
          </h3>

          <ul className="space-y-3">
            {[
              "My Account",
              "Track Order",
              "Wishlist",
              "Return Policy",
              "FAQs",
              "Privacy Policy",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-green-400 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-5">
            Stay Updated
          </h3>

          <p className="text-gray-400 mb-4">
            Subscribe to receive the latest offers and fresh arrivals.
          </p>

          <form className="space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-green-900 border border-green-800 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-green-500"
            />

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-green-900">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-sm text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} GreenMart. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-green-400">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-green-400">
              Privacy
            </a>
            <a href="#" className="hover:text-green-400">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
