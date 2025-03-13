import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Ragistration from "./pages/Ragistration";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Rootlayout from "./pages/RootLayout/Rootlayout";
import Messages from "./pages/Messages";
import Notification from "./pages/Notification";
import Settings from "./pages/Settings";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home to="/Home" />} />
        <Route index element={<Home />} />
        <Route path="/Ragistration" element={<Ragistration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Rootlayout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path="messages" element={<Messages/>}/>
          <Route path="notification" element={<Notification/>}/>
          <Route path="settings" element={<Settings/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
