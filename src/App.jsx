import "./components/scss/global.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Products from "./pages/Products";
import Form from "./pages/Form";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
