import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import DesertsPage from "./components/DessertsPage/DessertsPage";

// import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <DesertsPage />
  </StrictMode>
);
