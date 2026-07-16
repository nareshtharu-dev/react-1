import { useForm } from "react-hook-form";
import { FaEnvelope, FaLeaf, FaLock, FaPhone, FaUser } from "react-icons/fa";
import { Link } from "react-router";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const formSubmit = (data) => {
    console.log("REgsiter data", data);
  };
  return (
    <>
      <section className="min-h-[calc(100vh-80px)] bg-linear-to-br from-green-50 via-white to-green-100 flex items-center py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 shadow-2xl rounded-3xl overflow-hidden bg-white">
            {/* Left Side */}
            <div className="hidden lg:flex flex-col justify-center bg-green-600 text-white p-12 relative">
              <div className="absolute top-0 left-0 w-64 h-64 bg-green-400 rounded-full opacity-20 -translate-x-20 -translate-y-20"></div>

              <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-400 rounded-full opacity-20 translate-x-20 translate-y-20"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <FaLeaf size={40} />
                  <h2 className="text-4xl font-bold">GreenMart</h2>
                </div>

                <h3 className="text-3xl font-bold leading-tight mb-5">
                  Fresh Grocery Delivered
                  <br />
                  To Your Doorstep
                </h3>

                <p className="text-green-100 leading-8">
                  Join thousands of happy customers shopping fresh vegetables,
                  fruits, organic foods and daily essentials at the best prices.
                </p>

                <div className="mt-10 space-y-4">
                  <div className="flex items-center gap-3">
                    ✅ Fresh Organic Products
                  </div>

                  <div className="flex items-center gap-3">
                    ✅ Free Delivery Available
                  </div>

                  <div className="flex items-center gap-3">
                    ✅ Secure Online Payment
                  </div>

                  <div className="flex items-center gap-3">
                    ✅ 24/7 Customer Support
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side */}

            <div className="p-8 lg:p-14">
              <div className="max-w-md mx-auto">
                <h2 className="text-4xl font-bold text-gray-800">
                  Create Account
                </h2>

                <p className="text-gray-500 mt-2 mb-8">
                  Register to start shopping at GreenMart.
                </p>

                <form onSubmit={handleSubmit(formSubmit)} className="space-y-5">
                  {/* Full Name */}

                  <div>
                    <label className="font-medium text-gray-700">
                      Full Name
                    </label>

                    <div className="relative mt-2">
                      <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                      <input
                        type="text"
                        name="fullname"
                        {...register("fullname")}
                        placeholder="Enter your full name"
                        className="w-full border rounded-xl pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                      />
                    </div>
                  </div>

                  {/* Email */}

                  <div>
                    <label className="font-medium text-gray-700">
                      Email Address
                    </label>

                    <div className="relative mt-2">
                      <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                      <input
                        type="email"
                        name="email"
                        {...register("email")}
                        placeholder="Enter your email"
                        className="w-full border rounded-xl pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                      />
                    </div>
                  </div>

                  {/* Mobile */}

                  <div>
                    <label className="font-medium text-gray-700">
                      Mobile Number
                    </label>

                    <div className="relative mt-2">
                      <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                      <input
                        type="tel"
                        placeholder="98XXXXXXXX"
                        name="mobile"
                        {...register("mobile")}
                        className="w-full border rounded-xl pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                      />
                    </div>
                  </div>

                  {/* Password */}

                  <div>
                    <label className="font-medium text-gray-700">
                      Password
                    </label>

                    <div className="relative mt-2">
                      <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                      <input
                        type="password"
                        name="password"
                        {...register("password")}
                        placeholder="Create password"
                        className="w-full border rounded-xl pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                      />
                    </div>
                  </div>

                  {/* Confirm Password */}

                  <div>
                    <label className="font-medium text-gray-700">
                      Confirm Password
                    </label>

                    <div className="relative mt-2">
                      <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                      <input
                        type="password"
                        name="confirmPassword"
                        {...register("confirmPassword")}
                        placeholder="Confirm password"
                        className="w-full border rounded-xl pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                      />
                    </div>
                  </div>

                  {/* Checkbox */}

                  <div className="flex items-start gap-3">
                    {/* <input type="checkbox" className="mt-1 accent-green-600" /> */}

                    <p className="text-sm text-gray-600 leading-6">
                      I agree to the{" "}
                      <span className="text-green-600 font-semibold cursor-pointer">
                        Terms & Conditions
                      </span>{" "}
                      and{" "}
                      <span className="text-green-600 font-semibold cursor-pointer">
                        Privacy Policy
                      </span>
                    </p>
                  </div>

                  {/* Button */}

                  <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold text-lg transition duration-300 shadow-lg hover:shadow-green-300">
                    Create Account
                  </button>
                </form>

                <p className="text-center mt-8 text-gray-600">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-green-600 font-semibold hover:underline"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterPage;
