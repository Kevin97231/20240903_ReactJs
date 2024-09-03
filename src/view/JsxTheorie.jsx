/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
function JsxTheorie() {
  const title =
    "Bonjour <strong>tout le monde</strong> , bienvenue sur notre appli !";

  const img = "../src/assets/react.svg";

  const user = {
    firstName: "John",
    lastName: "Doe",
  };

  // const user = undefined;

  const formatName = (user) => user.firstName + " " + user.lastName;

  const style = { color: "red", backgroundColor: "gray" };

  const handleClick = (e) => {
    console.log(e);
    alert("J'ai clické !");
  };

  const fruits = ["banane", "pomme", "abricot", "poire"];

  return (
    <>
      <h1>Mon appli React</h1>
      <h1>{title}</h1>

      <p id="monId" className="myClass">
        Mon paragraphe !
      </p>

      {/* En JSX les balises sont automatiquement échappées */}
      {/* Déonseillé, à utiliser dans des cas particuliers */}
      <p dangerouslySetInnerHTML={{ __html: title }}></p>

      <div>
        <img src={img} alt="" />
      </div>

      {/* Affichage conditionnel */}

      {user ? <h2>Bonjour {formatName(user)}</h2> : <h2>Bonjour !</h2>}

      {user && <h2>Bonjour {formatName(user)}</h2>}

      <h1 style={style}>Titre en rouge !</h1>

      <button onClick={handleClick}>Cliquez !</button>
      <button onClick={() => alert("j'ai encore cliqué !")}>Cliquez !</button>

      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
      <Children color="red" id="myId" className="MyClassName">
        Je suis le texte 'children'
      </Children>
    </>
  );
}
const Children = ({ color = "blue", children, ...props }) => {
  // const props = {
  //   id: "myId",
  //   className: "myClass",
  // };

  return (
    <>
      <p>Je suis le composant enfant !</p>
      <p>{children}</p>
      <h2 style={{ color: color }} {...props}>
        Texte en style !
      </h2>
    </>
  );
};

const exo = () => {
  return (
    <>
      <div className="intro">
        ​<h1>Welcome to my website!</h1>​
      </div>
      <p className="summary">
        You can find my thoughts here.​
        <br />
        <b>
          And <i>pictures</i>
        </b>
        of scientists!​
      </p>
    </>
  );
};
export default JsxTheorie;
