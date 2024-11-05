import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <div className="max-w-screen-xl mx-auto">
        <RouterProvider router={router} />
      </div>
    </HelmetProvider>
  </StrictMode>
);
