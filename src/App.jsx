import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Ragistration from "./pages/Ragistration";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home to="/Home" />} />
        <Route index element={<Home />} />
        <Route path="/Ragistration" element={<Ragistration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
