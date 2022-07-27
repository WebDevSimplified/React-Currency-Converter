import React from "react";
import { createRoot } from "react-dom/client";
import App from "components/Window";
import "styles/index.css";

/*
    Application entry point
*/

// In react >= 18, first tell where is the root of the app
const root = createRoot(document.getElementById("root"));

// Render the app
root.render(<App />);