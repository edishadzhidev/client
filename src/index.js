import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Form from "./components/Form.js";
import List from "./components/List.js";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/add" element={<Form />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
