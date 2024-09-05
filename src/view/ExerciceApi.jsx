import { useEffect, useState } from "react";
import { Consigne } from "../components/exerciceAPI/Consigne";
import { Table } from "../components/exerciceAPI/Table";
import { useAxios } from "../hooks/useAxios";

export const ExerciceApi = () => {
  const [products, setProducts] = useState([]);

  const { get, put, remove } = useAxios();

  // const url = "http://localhost:3001/products";

  useEffect(() => {
    console.log("requete en cours");
    get().then((response) => setProducts(response));

    // Sans le hook perso.:
    // axios.get(url).then((response) => setProducts(response.data));
  }, []);

  const deleteProduct = (product) => {
    remove("", product.id).then(() => {
      setProducts((prevProducts) =>
        prevProducts.filter((productFilter) => product.id !== productFilter.id)
      ).catch((err) => console.error(err.message));
    });

    // SANS LE HOOK PERSO:
    // const removeUrl = `${url}/${product.id}`;
    // axios
    //   .delete(removeUrl)
    //   // On passe dans le .then --> le produit s'est bien supprimé
    //   .then(() => {
    //     setProducts((prevProducts) =>
    //       prevProducts.filter(
    //         (productFilter) => product.id !== productFilter.id
    //       )
    //     ).catch((err) => console.error(err.message));
    //   });
  };

  const updateProduct = (updateProduct, id) => {
    put("", id, updateProduct).then((response) =>
      setProducts((prevProduct) =>
        prevProduct.map((productMap) =>
          productMap.id === response.id ? { ...response } : productMap
        )
      )
    );

    // SANS LE HOOK PERSO:
    // const removeUrl = `${url}/${id}`;
    // axios
    //   .put(removeUrl, updateProduct)
    //   .then((response) =>
    //     setProducts((prevProduct) =>
    //       prevProduct.map((productMap) =>
    //         productMap.id === response.data.id
    //           ? { ...response.data }
    //           : productMap
    //       )
    //     )
    //   );
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
