import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from "react-router";

const HeaderComponent = () => {
  const [cat, setCat] = useState([]);
  const navLinkClass = ({ isActive }) =>
    `relative px-2 py-1 font-medium transition-all duration-300
    ${
      isActive
        ? "text-green-600 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-green-600"
        : "text-gray-700 hover:text-green-600"
    }`;
  // https://fakestoreapi.com/products/categories

  // API
  // REST API
  // get, post, put/patch, delete
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/categories",
        );
        const cat = await response.json();
        setCat(cat);
      } catch (exception) {
        console.log(exception);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {}, []);



  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-5">
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}

          <Link to="/" className="flex items-center gap-3">
            <img
              src="/images/logo/logo.png"
              alt="GreenMart"
              className="h-11 w-auto"
            />
          </Link>

          {/* Navigation */}

          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              <li>
                <NavLink to="/" className={navLinkClass}>
                  Home
                </NavLink>
              </li>

              {cat.map((item, index) => (
                <li key={index}>
                  <NavLink to={`/products`} className={navLinkClass}>
                    {item}
                  </NavLink>
                </li>
              ))}

              <li>
                <NavLink to="/about" className={navLinkClass}>
                  About
                </NavLink>
              </li>

              <li>
                <NavLink to="/contact" className={navLinkClass}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Right Section */}

          <div className="flex items-center gap-4">
            <NavLink
              to="/login"
              className="font-medium text-gray-700 hover:text-green-600 transition"
            >
              Login
            </NavLink>

            <Link
              to="/register"
              className="rounded-full bg-green-600 px-6 py-2.5 text-white font-medium shadow-md transition-all duration-300 hover:bg-green-700 hover:shadow-lg"
            >
              Register
            </Link>

            <NavLink
              to="/cart"
              className="relative flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-xl text-gray-700 transition hover:bg-green-600 hover:text-white"
            >
              <FaShoppingCart />

              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                2
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
