import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export const ExempleRequetes = () => {
  const url = "http://localhost:3001/products";

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(url)
        .then((response) => {
          console.log(response.data);
          setProducts(response.data);
        })
        .catch((err) => console.error(err.message))
        .finally(() => console.log("Requête terminée"));
    };

    fetchData();
  }, []);

  const addProduct = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const newProduct = {
      category: formData.get("category"),
      name: formData.get("name"),
      number: formData.get("number"),
      price: formData.get("price"),
    };

    axios
      .post(url, newProduct)
      // Axios en réponse retourne l'objet que l'on vient de rajouter
      //   donc response.data est égale au nouveau produit
      .then((response) =>
        setProducts((prevValue) => [...prevValue, response.data])
      )
      .catch((err) => console.error(err));
  };

  return (
    <>
      <h2>Exemple</h2>
      <div className="border m-5 p-5 w-fit">
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Prix</th>
              <th>Quantité</th>
              <th>Catégorie</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.number}</td>
                <td>{product.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* FORMULAIRE */}
      <div className="py-10 border">
        <form onSubmit={addProduct}>
          <div className="grid grid-cols-4 mb-5">
            <input
              type="text"
              placeholder="Nom du produit"
              name="name"
              className="flex"
            />
            <input
              type="number"
              placeholder="Prix"
              name="price"
              className="flex"
            />
            <input
              type="number"
              placeholder="Quantité"
              name="number"
              className="flex"
            />
            <input
              type="text"
              placeholder="Catégorie"
              name="category"
              className="flex"
            />
          </div>

          <button type="submit" className="btn">
            Ajouter
          </button>
        </form>
      </div>
    </>
  );
};
