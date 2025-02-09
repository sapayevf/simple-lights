import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Header/Header.jsx";
import Section1 from "./components/Section1/Section1.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Section1 />
  </StrictMode>
);
