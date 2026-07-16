import { Link } from "react-router";
import { FaLeaf, FaHome, FaShoppingBasket } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center shadow-lg">
            <FaLeaf className="text-5xl text-green-600" />
          </div>
        </div>

        {/* 404 */}
        <h1 className="text-8xl md:text-9xl font-extrabold text-green-600">
          404
        </h1>

        {/* Heading */}
        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-800">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-5 text-gray-600 text-lg leading-8 max-w-2xl mx-auto">
          The page you're looking for doesn't exist or may have been moved.
          Don't worry—you can return to GreenMart and continue shopping for
          fresh groceries and daily essentials.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold transition duration-300 shadow-md"
          >
            <FaHome />
            Back to Home
          </Link>

          <Link
            to="#"
            className="inline-flex items-center justify-center gap-2 border-2 border-green-600 text-green-700 hover:bg-green-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition duration-300"
          >
            <FaShoppingBasket />
            Continue Shopping
          </Link>
        </div>

        {/* Decorative Card */}
        <div className="mt-14 bg-white rounded-2xl shadow-lg border border-green-100 p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Looking for something?
          </h3>

          <p className="text-gray-600">
            Browse our fresh fruits, vegetables, organic products, beverages,
            and household essentials—all delivered to your doorstep.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
