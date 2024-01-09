import "../components/scss/form.scss";
import "../components/scss/button.scss";

import { useState } from "react";
import { Nav } from "../components/Nav";

const Form = () => {
  const BASE_URL = "https://sophisticated-humane-dandelion.glitch.me/";
  const [imgValue, setImgValue] = useState("");
  const [titleValue, setTitleValue] = useState("");
  const [priceValue, setPriceValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputData = {
      image: imgValue,
      title: titleValue,
      price: priceValue,
    };

    if (imgValue && titleValue && priceValue) {
      fetch(BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputData),
      })
        .then((resp) => resp.json())
        .then((data) => {
          alert(data.msg);
          window.location.href = "/";
        })
        .catch((error) => console.log(error));
    } else {
      alert("Užpildykite visus laukelius");
    }
  };

  return (
    <>
      <Nav />
      <div className="container">
        <h1>Pridėti prekę</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="url"
            placeholder="img"
            value={imgValue}
            onChange={(e) => setImgValue(e.target.value)}
          />
          <input
            type="text"
            placeholder="title"
            value={titleValue}
            onChange={(e) => setTitleValue(e.target.value)}
          />
          <input
            type="number"
            step="0.01"
            placeholder="price"
            value={priceValue}
            onChange={(e) => setPriceValue(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Form;
