import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { ShopProvider } from "./context/shop-context";
import { AvatarProvider } from "./context/avatar-context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/langthang-coffee">
      <ShopProvider>
        <AvatarProvider>
          <App />
        </AvatarProvider>
      </ShopProvider>
    </BrowserRouter>
  </React.StrictMode>
);
