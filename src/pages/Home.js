import React from "react";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from '../components/Product'

const Home = () => {
  const { products } = useContext(ProductContext);
  // console.log(products);

  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing" 
    );
  });
  console.log(filteredProducts);

  return (
    <div>
      <section>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] mx-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((product) => {
              return (
                // <div
                //   className="w-full h-[300px] bg-pink-200 mb-4"
                //   key={product.id}
                // >
                //   {product.title}
                // </div>
                <Product product={product} key={product.id}/>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
