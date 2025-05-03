import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import AppRoutes from "@/routes/AppRoutes";

createRoot(document.getElementById("root")!).render(
  // Using ! to assert it will not be null
  <StrictMode>
    <AppRoutes />
  </StrictMode>
);
