import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyles } from "style/GlobalStyles";
import { Providers } from "providers";

import "react-datepicker/dist/react-datepicker.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Providers>
      <GlobalStyles />
      <App />
    </Providers>
  </React.StrictMode>
);

reportWebVitals();
