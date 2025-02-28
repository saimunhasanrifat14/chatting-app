import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Ragistration from "./pages/Ragistration";
import Login from "./pages/Login";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Ragistration" element={<Ragistration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
