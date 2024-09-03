/* eslint-disable react/no-unescaped-entities */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import JsxTheorie from "./view/JsxTheorie";
import HookUseState from "./view/HookUseState";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<JsxTheorie />} />
          <Route path="/hook-use-state" element={<HookUseState />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
