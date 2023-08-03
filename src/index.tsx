import { createRoot } from "react-dom/client";
import App from "./App";
import React, { StrictMode } from "react";

const element = document.getElementById("root") as HTMLDivElement;

const root = createRoot(element);
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
