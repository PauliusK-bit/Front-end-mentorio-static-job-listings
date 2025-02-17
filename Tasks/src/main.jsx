import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";

import Counter from "./components/CounterPage/Counter.jsx";
import Cities from "./components/CitiesPage/Cities.jsx";
import Cars from "./components/CarsPage/Cars.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="basics">
        <Route index element={<h1>Basics</h1>} />

        <Route path="counter" element={<Counter />} />
        <Route path="cities" element={<Cities />} />
        <Route path="cars" element={<Cars />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
