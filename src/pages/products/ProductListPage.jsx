import { useEffect, useState } from "react";
import { Link } from "react-router";

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  // https://fakestoreapi.com/products
  const getAllProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (exception) {
      console.log("Product", exception);
    }
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <>
      <section className="py-5">
        <h1>All Products</h1>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 items-center gap-2">
          {products.map((item) => (
            <Link to={`/products/${item.id}`}>
              <div className="border p-3 rounded-3xl">
                <figure>
                  <img
                    className="w-full h-[300px] object-contain"
                    src={item.image}
                    alt=""
                  />
                </figure>
                <h4>{item.title}</h4>
                <p>Rs.{item.price}</p>
                <button className="border p-2 rounded-2xl w-full bg-green-600 text-white">
                  Add to Cart
                </button>
              </div>
             </Link>
          ))}
        </div>
      </section>
    </>
  );
};
export default ProductListPage;
