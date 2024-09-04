/* eslint-disable react/no-unescaped-entities */
export const RequeteApi = () => {
  return (
    <div className="pt-20">
      <h1>Les requêtes HTTP</h1>
      <h2>Rappel</h2>
      <p>
        <a href="https://developer.mozilla.org/fr/docs/Web/HTTP/Methods"></a>
      </p>
      <strong>En résumé: </strong>
      <ul>
        <li>
          <strong>GET: </strong> Sert à récupérer des données
        </li>
        <li>
          <strong>POST: </strong> Utilisé avec un 'body', très souvent du json
          (ou xml sur d'anciennes appli.) Très utilisé pour des 'create', en
          envoyant le nouvel objet en corp de requête
        </li>
        <li>
          <strong>PUT: </strong> Même logique que le post, à la différence que
          le type 'PUT' est utilisé pour mettre à jour une ressource existante
        </li>
        <li>
          <strong>DELETE:</strong> Utilisé pour supprimer une ressource
        </li>
      </ul>

      <h2>Les requêtes avec la bibliothèque 'axios'</h2>
      <a className="underline" href="https://axios-http.com/fr/docs/example">
        documentation axios
      </a>
    </div>
  );
};
