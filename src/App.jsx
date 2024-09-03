/* eslint-disable react/no-unescaped-entities */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import JsxTheorie from "./view/JsxTheorie";
import HookUseState from "./view/HookUseState";
import { Navbar } from "./components/Navbar";
import { Formulaire } from "./view/Formulaire";
import { Flux } from "./view/Flux";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<JsxTheorie />} />
          <Route path="/hook-use-state" element={<HookUseState />} />
          <Route path="formulaire" element={<Formulaire />} />
          <Route path="flux" element={<Flux />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
