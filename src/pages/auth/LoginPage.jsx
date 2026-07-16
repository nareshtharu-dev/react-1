import { useForm } from "react-hook-form";
import {
  FaEnvelope,
  FaFacebookF,
  FaGoogle,
  FaLeaf,
  FaLock,
} from "react-icons/fa";
import { Link } from "react-router";
import HeaderComponent from "../../components/HeaderComponent";
import Label from "../../components/ui/LabelComponent";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();

  const submitForm = (data) => {
    console.log("Form Submitted Data:", data);
    // api call
  };
  return (
    <>
      <section className="min-h-[calc(100vh-80px)] bg-linear-to-br from-green-50 via-white to-green-100 flex items-center py-12">
        <div className="container mx-auto px-4">
          <div className="grid overflow-hidden rounded-3xl bg-white shadow-2xl lg:grid-cols-2">
            {/* Left Side */}
            <div className="hidden lg:flex flex-col justify-center bg-linear-to-br from-green-600 to-green-800 p-12 text-white relative overflow-hidden">
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10"></div>
              <div className="absolute -bottom-20 -left-16 h-72 w-72 rounded-full bg-white/10"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-green-700">
                    <FaLeaf size={28} />
                  </div>

                  <div>
                    <h2 className="text-4xl font-bold">GreenMart</h2>
                    <p className="text-green-100">
                      Fresh Grocery & Organic Products
                    </p>
                  </div>
                </div>

                <h3 className="mt-16 text-4xl font-bold leading-tight">
                  Welcome Back!
                </h3>

                <p className="mt-5 text-lg leading-8 text-green-100">
                  Login to access your orders, wishlist, saved addresses and
                  continue shopping fresh groceries at the best prices.
                </p>

                <div className="mt-10 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-green-700">
                      ✓
                    </span>
                    <span>Fresh Organic Products</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-green-700">
                      ✓
                    </span>
                    <span>Fast & Secure Delivery</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-green-700">
                      ✓
                    </span>
                    <span>Exclusive Member Discounts</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="p-8 md:p-12">
              <div className="mx-auto max-w-md">
                <h2 className="text-3xl font-bold text-gray-800">Sign In</h2>

                <p className="mt-2 text-gray-500">
                  Login to your GreenMart account.
                </p>

                <form
                  onSubmit={handleSubmit(submitForm)}
                  className="mt-8 space-y-6"
                >
                  {/* Email */}
                  <div>
                    <Label htmlFor="username" title="Email Address" />

                    <div className="flex items-center rounded-xl border border-gray-300 px-4 focus-within:border-green-600 focus-within:ring-2 focus-within:ring-green-200">
                      <FaEnvelope className="text-gray-400" />

                      <input
                        {...register("username")}
                        id="username"
                        name="username"
                        type="email"
                        placeholder="Enter your email"
                        className="w-full bg-transparent px-3 py-4 outline-none"
                      />
                      {/* <span className="text-red-500 block">
                        {errors?.username?.message}
                      </span> */}
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <Label htmlFor={"password"} title={"Password"} />

                    <div className="flex items-center rounded-xl border border-gray-300 px-4 focus-within:border-green-600 focus-within:ring-2 focus-within:ring-green-200">
                      <FaLock className="text-gray-400" />

                      <input
                        {...register("password")}
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        className="w-full bg-transparent px-3 py-4 outline-none"
                      />
                    </div>
                  </div>

                  {/* Options */}
                  <div className="flex items-center justify-between">
                    {/* <label className="flex items-center gap-2 text-sm text-gray-600">
                      <input
                        type="checkbox"
                        className="h-4 w-4 accent-green-600"
                      />
                      Remember me
                    </label>

                    <Link
                      to="/forgot-password"
                      className="text-sm font-medium text-green-700 hover:underline"
                    >
                      Forgot Password?
                    </Link> */}
                  </div>

                  {/* Button */}
                  <button className="w-full rounded-xl bg-green-600 py-4 font-semibold text-white transition hover:bg-green-700">
                    Login
                  </button>

                  {/* Divider */}
                  <div className="relative text-center">
                    <div className="absolute left-0 top-1/2 w-full border-t"></div>

                    <span className="relative bg-white px-4 text-sm text-gray-500">
                      OR
                    </span>
                  </div>

                  {/* Social Login */}
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      className="flex items-center justify-center gap-2 rounded-xl border py-3 font-medium transition hover:bg-gray-100"
                    >
                      <FaGoogle className="text-red-500" />
                      Google
                    </button>

                    <button
                      type="button"
                      className="flex items-center justify-center gap-2 rounded-xl border py-3 font-medium transition hover:bg-gray-100"
                    >
                      <FaFacebookF className="text-blue-600" />
                      Facebook
                    </button>
                  </div>

                  {/* Register */}
                  <p className="text-center text-gray-600">
                    Don't have an account?{" "}
                    <Link
                      to="/register"
                      className="font-semibold text-green-700 hover:underline"
                    >
                      Create Account
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
