/* eslint-disable react/prop-types */
export const ListProduct = ({
  products = [],
  title = "",
  afficherHorsStock = true,
  userSearch = "",
}) => {
  return (
    <>
      <h2>{title}</h2>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prix</th>
            <th>Quantité</th>
          </tr>
        </thead>
        <tbody>
          {products
            .filter(
              (product) =>
                (afficherHorsStock ? true : product.number > 0) &&
                product.name.toLowerCase().includes(userSearch.toLowerCase())
            )
            .map((product) => (
              <tr key={product.name}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.number}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};
