// import { gyro_backend } from "../../declarations/gyro_backend";

// document.querySelector("form").addEventListener("submit", async (e) => {
//   e.preventDefault();
//   const button = e.target.querySelector("button");

//   const name = document.getElementById("name").value.toString();

//   button.setAttribute("disabled", true);

//   // Interact with foo actor, calling the greet method
//   const greeting = await gyro_backend.greet(name);

//   button.removeAttribute("disabled");

//   document.getElementById("greeting").innerText = greeting;

//   return false;
// });

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const container = document?.getElementById("app");
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
