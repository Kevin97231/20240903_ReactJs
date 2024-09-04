/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import { useState } from "react";

export const HookUseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effet secondaire délenché");
    document.title = `count: ${count}`;
  }, [count]);

  return (
    <div className="pt-20">
      <h1>use Effect</h1>
      <ul>
        Le hook useEffect est utilisé :
        <li>Pour gérer des effets secondaires</li>
        <li>
          Pour effectuer des opérations après le rendu du composant ( comme des
          appels aux API, gestion d'abonnements etc .. )
        </li>
        <p>
          Très souvent, on utilise le hook useEffect() en conjonction avec un
          useState() pour gérer des effets secondaires à un changement d'état
        </p>
      </ul>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </div>
  );
};
