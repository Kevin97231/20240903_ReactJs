import { useState } from "react";
import { Modal } from "./Modal";
import { FormProductAvecVerif } from "./FormProductAvecVerif";

/* eslint-disable react/prop-types */
export const Table = ({ data = [], removeFunction, updateFunction }) => {
  let cles = [];

  if (data.length > 0) {
    // Object.keys(data[0]) --> renvoie l'ensmeble des attributs du premier objet de data
    cles = Object.keys(data[0]);
  }

  const [productToModify, setProductToModify] = useState({});

  const handleUpdate = (product) => {
    const modal = document.getElementById("my_modal");
    if (modal) modal.showModal();
    setProductToModify(product);
  };

  const closeModal = () => {
    const modal = document.getElementById("my_modal");
    if (modal) modal.close();
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            {/* Parcourir notre tableau de clés _ pour déterminer le nom des colonnes */}
            {cles.map((cle) => (
              <th key={cle}>{cle}</th>
            ))}
            <th>Supprimer</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product) => (
            <tr key={product.id}>
              {cles.map((cle) => (
                <td key={cle}>{product[cle]}</td>
              ))}
              <td>
                <button className="btn" onClick={() => removeFunction(product)}>
                  Supprimer
                </button>
                <button onClick={() => handleUpdate(product)}>Modifier</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        content={
          <FormProductAvecVerif
            submitMethod={updateFunction}
            productToModify={productToModify}
            closeModal={closeModal}
          />
        }
      />
      {/* <Modal
        content={
          <FormProductAvecVerif
            submitMethod={updateFunction}
            productToModify={productToModify}
          />
        }
      /> */}
    </div>
  );
};
