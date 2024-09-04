import { useIncrement } from "../hooks/useIncrement";
import { useToggle } from "../hooks/useToggle";

export const HookPersonnalise = () => {
  const [checked, toggleChecked] = useToggle();

  const {
    count,
    incrementFunction,
    decrement: decrementFunction,
  } = useIncrement({
    max: 5,
    initialValue: 5,
  });

  return (
    <div className="pt-20 px-5">
      <h1>Les hooks personnalisés</h1>
      <p className="pb-2">
        <strong>
          <a href="https://usehooks.com/"></a>
        </strong>
      </p>

      <h2>Cas de figure n°1</h2>
      <p>
        Dans une appli react, on peut souvent avoir besoin de faire varier une
        valeur entre vrai et fait (par exemple pour afficher / masquer une
        valeur). Pour cela, on peut mettre en place un hook personnalisé (et
        ainsi factoriser du code)
      </p>

      <input type="checkbox" checked={checked} onChange={toggleChecked} />
      <p>{checked && "Je suis coché !"}</p>
      <h2>Cas de figure n°2</h2>
      <p>Je veux créer un hook perso. pour gére un compteur</p>
      {count}
      <button onClick={incrementFunction}>+</button>
      <button onClick={decrementFunction}>-</button>
    </div>
  );
};
