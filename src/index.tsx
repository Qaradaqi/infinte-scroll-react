import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "./routes";
import { GlobalStyle } from "./globalStyle";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <GlobalStyle />
    <Router />
  </>
);
