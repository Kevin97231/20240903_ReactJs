import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import JsxTheorie from "./view/JsxTheorie";
import HookUseState from "./view/HookUseState";
import { Navbar } from "./components/Navbar";
import { Formulaire } from "./view/Formulaire";
import { Flux } from "./view/Flux";
import { Exercice } from "./view/Exercice";
import { HookUseEffect } from "./view/HookUseEffect";
import { CycleDeVie } from "./view/CycleDeVie";
import { ComposantClass } from "./view/ComposantClass";
import { RequeteApi } from "./view/RequeteApi";
import { ExerciceApi } from "./view/ExerciceApi";
import { HookPersonnalise } from "./view/HookPersonnalise";
import { HookUseMemo } from "./view/HookUseMemo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<JsxTheorie />} />
          <Route path="hook-use-state" element={<HookUseState />} />
          <Route path="formulaire" element={<Formulaire />} />
          <Route path="flux" element={<Flux />} />
          <Route path="exercice" element={<Exercice />} />
          <Route path="use-effect" element={<HookUseEffect />} />
          <Route path="cycle-de-vie" element={<CycleDeVie />} />
          <Route path="cycle-de-vie/class" element={<ComposantClass />} />
          <Route path="requete-api" element={<RequeteApi />} />
          <Route path="exercice-api" element={<ExerciceApi />} />
          <Route path="hook-perso" element={<HookPersonnalise />} />
          <Route path="hook-use-memo" element={<HookUseMemo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import JsxTheorie from "./view/JsxTheorie";
// import { Navbar } from "./components/Navbar";
// function App() {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Root />,
//       errorElement: <>Attention, élément non chargé</>,
//       children: [
//         {
//           path: "",
//           element: <>Page d'accueil</>,
//         },
//         {
//           path: "/jsx",
//           element: <JsxTheorie />,
//         },
//         {
//           path: "*",
//           element: <>Erreur 404</>,
//         },
//       ],
//     },
//   ]);

//   function Root() {
//     return (
//       <>
//         <Navbar />
//         <Outlet />;
//       </>
//     );
//   }

//   return (
//     <>
//       <RouterProvider router={router} />
//     </>
//   );
// }

// export default App;
