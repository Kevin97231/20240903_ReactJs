/* eslint-disable react/prop-types */

import { useState } from "react";

export const FormProduct = ({ submitMethod, productToModify }) => {
  const [name, setName] = useState(productToModify.name);
  const [price, setPrice] = useState(productToModify.price);
  const [number, setNumber] = useState(productToModify.number);
  const [category, setCategory] = useState(productToModify.category);

  //   const [name, setName] = useState("Test");
  //   const [price, setPrice] = useState(8);
  //   const [number, setNumber] = useState(2);
  //   const [category, setCategory] = useState("test");

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "price":
        setPrice(value);
        break;
      case "number":
        setNumber(value);
        break;
      case "category":
        setCategory(value);
        break;
    }
  };

  return (
    <>
      {productToModify ? (
        <form onSubmit={submitMethod}>
          <div className="grid grid-cols-4 mb-5">
            <input
              type="text"
              value={name}
              name="name"
              className="flex"
              onChange={handleChange}
            />
            <input
              type="number"
              value={price}
              name="price"
              className="flex"
              onChange={handleChange}
            />
            <input
              type="number"
              value={number}
              name="number"
              className="flex"
              onChange={handleChange}
            />
            <input
              type="text"
              value={category}
              name="category"
              className="flex"
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn">
            Valider
          </button>
        </form>
      ) : null}
    </>
  );
};
