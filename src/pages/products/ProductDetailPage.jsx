import { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductDetailPage = () => {
  const { prodId } = useParams();
  const [singleProduct, setSingleProducts] = useState();
  // fetch('https://fakestoreapi.com/products/1')
  const fetchSingleProduct = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${prodId}`,
      );
      const data = await response.json();
      setSingleProducts(data);
    } catch (exception) {
      console.log(exception);
    }
  };
  useEffect(() => {
    fetchSingleProduct();
  }, []);
  console.log("product is", singleProduct);
  return (
    <>
      <section className="bg-slate-100 min-h-screen py-10">
        <div className="max-w-7xl mx-auto px-4">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-500 mb-8">
            Home
            <span className="mx-2">/</span>
            {singleProduct?.category}
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">
              {singleProduct?.title}
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Product Image */}
            <div className="bg-white rounded-3xl shadow-sm border p-10 flex items-center justify-center">
              <img
                src={singleProduct?.image}
                alt={singleProduct?.title}
                className="h-[500px] object-contain hover:scale-105 transition duration-300"
              />
            </div>

            {/* Product Details */}
            <div className="bg-white rounded-3xl shadow-sm border p-8">
              {/* Category */}
              <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium capitalize">
                {singleProduct?.category}
              </span>

              {/* Title */}
              <h1 className="text-4xl font-bold text-gray-800 mt-5">
                {singleProduct?.title}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mt-4">
                <div className="flex text-yellow-400 text-xl">
                  {"★".repeat(Math.round(singleProduct?.rating?.rate))}
                  {"☆".repeat(5 - Math.round(singleProduct?.rating?.rate))}
                </div>

                <span className="text-gray-700 font-medium">
                  {singleProduct?.rating?.rate}
                </span>

                <span className="text-gray-500">
                  ({singleProduct?.rating?.count} Reviews)
                </span>
              </div>

              {/* Price */}
              <div className="mt-6">
                <h2 className="text-5xl font-bold text-emerald-600">
                  ${singleProduct?.price}
                </h2>
              </div>

              {/* Description */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-2">Description</h3>

                <p className="text-gray-600 leading-7">
                  {singleProduct?.description}
                </p>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-10">
                <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-xl font-semibold transition">
                  Add to Cart
                </button>

                <button className="flex-1 border border-indigo-600 text-indigo-600 hover:bg-indigo-50 py-4 rounded-xl font-semibold transition">
                  Buy Now
                </button>
              </div>

              {/* singleProduct Info */}
              <div className="mt-10 border-t pt-8">
                <h3 className="text-lg font-semibold mb-5">
                  singleProduct Information
                </h3>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-500">singleProduct ID</span>
                    <span className="font-medium">{singleProduct?.id}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-500">Category</span>
                    <span className="capitalize font-medium">
                      {singleProduct?.category}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-500">Rating</span>
                    <span className="font-medium">
                      {singleProduct?.rating?.rate}/5
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-500">Reviews</span>
                    <span className="font-medium">
                      {singleProduct?.rating?.count}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Extra Description */}
          <div className="bg-white rounded-3xl shadow-sm border p-8 mt-10">
            <h2 className="text-2xl font-bold mb-5">Product Details</h2>

            <p className="text-gray-600 leading-8">
              {singleProduct?.description}
            </p>
          </div>
        </div>
      </section>
    </>
  
  );
};
export default ProductDetailPage;
