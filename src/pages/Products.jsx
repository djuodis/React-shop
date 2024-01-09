import "../components/scss/products.scss";

import React, { useEffect, useState } from "react";
import { Nav } from "../components/Nav";

const BASE_URL = "https://sophisticated-humane-dandelion.glitch.me/";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(BASE_URL)
      .then((resp) => resp.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  };

  const deleteProduct = (id) => {
    fetch(BASE_URL + "/" + id, {
      method: "DELETE",
    })
      .then(() => {
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== id)
        );
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Nav />
      <section id="app" className="products">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.title} />
            <p>{product.title}</p>
            <p className="price">€{product.price}</p>
            <button
              className="button"
              onClick={() => deleteProduct(product.id)}
            >
              Ištrinti
            </button>
          </div>
        ))}
      </section>
    </>
  );
};

export default Products;
