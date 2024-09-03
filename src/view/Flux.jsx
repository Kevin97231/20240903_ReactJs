/* eslint-disable react/prop-types */
import { useState } from "react";

/* eslint-disable react/no-unescaped-entities */
export const Flux = () => {
  const data = [
    { id: 1, nom: "Produit 1", prix: 20.99, quantite: 5 },
    { id: 2, nom: "Produit 2", prix: 15.45, quantite: 10 },
    { id: 3, nom: "Produit 3", prix: 75.32, quantite: 58 },
    { id: 4, nom: "Produit 4", prix: 30.0, quantite: 25 },
    { id: 5, nom: "Produit 5", prix: 26.0, quantite: 16 },
  ];

  const [checked, setChecked] = useState(false);

  return (
    <>
      <h1>Les flux de données</h1>
      <h2>De parents vers enfants</h2>
      <p>
        Pour faire passer des données d'un composant parent vers le composant
        enfant, Nous devons utiliser les 'props'
      </p>
      <ComposantEnfant data={data} />

      <h2>De l'enfant vers son parent</h2>
      <p>
        En react, pour faire passer les données d'un composant enfant vers son
        parent, il est courant d'utiliser des fonctions de rappels (callback
        functions) passées en tant que props. On les utilise ensuite dans le
        composant enfant pour transmettre les données vers son parent
      </p>

      <CheckBoxEnfant checked={checked} onCheck={setChecked} />
      <br />

      {checked ? "case cochée" : "case non cochée"}
    </>
  );
};

function ComposantEnfant({ text = "passe moi tes données !", data = [] }) {
  return (
    <div className="m-5 border w-fit">
      <h1>Je suis le composant enfant</h1>
      <p>{text}</p>

      {data.map((produit) => (
        <div key={produit.id}>
          <p>nom: {produit.nom}</p>
          <p>prix: {produit.prix}</p>
          <p>quantite: {produit.quantite}</p>
        </div>
      ))}
    </div>
  );
}

function CheckBoxEnfant({ checked, onCheck }) {
  const handleClick = (e) => {
    onCheck(e.target.checked);
  };

  return (
    <>
      <input type="checkbox" onChange={handleClick} checked={checked} />
    </>
  );
}
