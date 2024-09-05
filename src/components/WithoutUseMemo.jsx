import { useState } from "react";

export const WithoutUseMemo = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  const [inputValue, setInputValue] = useState("");

  const sum = numbers.reduce((total, currentValue) => total + currentValue);

  console.log("Chargement du composant qui n'utilise pas useMemo");

  const addNumbers = () => {
    setNumbers((prev) => [...prev, Math.random() * 10]);
  };

  return (
    <div className="m-5">
      <h2>Composant sans useMemo</h2>
      <p>Somme: {sum}</p>
      <button onClick={addNumbers}>Ajouter un chiffre</button>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="mt-2 input input-bordered"
        />
        {inputValue}
      </div>
    </div>
  );
};
