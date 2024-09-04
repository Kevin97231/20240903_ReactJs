import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const CycleDeVie = () => {
  const [count, setCount] = useState(0);

  console.log("test");

  useEffect(() => {
    // Sera exécuté au montage du composant
    // SI je laisse le tableau de dépendance vie, sera exécuté UNIQUEMENT au montage du composant
    console.log("composant monté");

    return () => {
      console.log("return du useEffect (exécuté au démontage du composant)");
    };
  }, []);

  return (
    <div className="pt-20">
      <h1>Cycle de vie</h1>
      <p>count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Incrémenter</button>
      <br />
      <br />
      <Link to={"/cycle-de-vie/class"} className="underline">
        Exemple avec composant class:{" "}
      </Link>
    </div>
  );
};
