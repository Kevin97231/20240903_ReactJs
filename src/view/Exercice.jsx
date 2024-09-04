// To do : Créer la route + le bouton dans la navBar

import { useState } from "react";
import { Consigne } from "../components/exercice_fruits/Consigne";
import { ListProduct } from "../components/exercice_fruits/ListProduct";

export const Exercice = () => {
  const products = [
    { category: "Fruits", price: "$1", number: 0, name: "Banana" },
    { category: "Fruits", price: "$1", number: 2, name: "Mango" },
    { category: "Fruits", price: "$2", number: 0, name: "Pineapple" },
    { category: "Vegetables", price: "$2", number: 4, name: "Broccoli" },
    { category: "Vegetables", price: "$4", number: 0, name: "Carrot" },
    { category: "Vegetables", price: "$1", number: 6, name: "Zucchini" },
  ];

  const fruits = products.filter((product) => product.category === "Fruits");
  const vegetables = products.filter(
    (product) => product.category === "Vegetables"
  );

  const [checked, setChecked] = useState(false);

  const [search, setSearch] = useState("");

  return (
    <>
      <Consigne />
      <label>Afficher hors stock: </label>
      <input
        type="checkbox"
        value={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ListProduct
        products={fruits}
        title={"tableau des fruits"}
        afficherHorsStock={checked}
        userSearch={search}
      />
      <ListProduct
        products={vegetables}
        title={"Tableau des légumes"}
        afficherHorsStock={checked}
        userSearch={search}
      />
    </>
  );
};
