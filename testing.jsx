import React from "react";
import { createRoot } from "react-dom/client";
import "./lib/styles.css";

createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <p className="text-4xl">Hello</p>
    </React.StrictMode>
);
