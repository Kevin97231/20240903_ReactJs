/* eslint-disable react/prop-types */
export const Table = ({ data = [], removeFunction }) => {
  let cles = [];

  if (data.length > 0) {
    // Object.keys(data[0]) --> renvoie l'ensmeble des attributs du premier objet de data
    cles = Object.keys(data[0]);
  }

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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
