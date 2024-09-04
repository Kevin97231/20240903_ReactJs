import { useEffect, useState } from "react";
import { Consigne } from "../components/exerciceAPI/Consigne";
import axios from "axios";
import { Table } from "../components/exerciceAPI/Table";

export const ExerciceApi = () => {
  const [products, setProducts] = useState([]);

  const url = "http://localhost:3001/products";

  useEffect(() => {
    console.log("requete en cours");
    axios.get(url).then((response) => setProducts(response.data));
  }, []);

  const deleteProduct = (product) => {
    const removeUrl = `${url}/${product.id}`;
    axios
      .delete(removeUrl)
      // On passe dans le .then --> le produit s'est bien supprimé
      .then(() => {
        setProducts((prevProducts) =>
          prevProducts.filter(
            (productFilter) => product.id !== productFilter.id
          )
        ).catch((err) => console.error(err.message));
      });
  };

  const updateProduct = (updateProduct, id) => {
    const removeUrl = `${url}/${id}`;
    axios
      .put(removeUrl, updateProduct)
      .then((response) =>
        setProducts((prevProduct) =>
          prevProduct.map((productMap) =>
            productMap.id === response.data.id
              ? { ...response.data }
              : productMap
          )
        )
      );
  };

  return (
    <div className="pt-20">
      <h1>Exercie API</h1>;
      <Consigne />
      <Table
        data={products}
        removeFunction={deleteProduct}
        updateFunction={updateProduct}
      />
    </div>
  );
};
