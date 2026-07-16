import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

const CategoryPage = () => {
  const [cat, setCat] = useState();
  const { catId } = useParams();

  const getAllCategoryProduct = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setCat(data);
    } catch (error) {
      console.log("category fetch", error);
    }
  };
  useEffect(() => {
    getAllCategoryProduct();
  }, []);

  const products = cat?.filter((catProduct) => catProduct.category === catId);
  return (
    <>
      <section className="py-5">
        <h1>All Products</h1>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 items-center gap-2">
          {products?.map((item) => (
            <Link to="#">
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
export default CategoryPage;
