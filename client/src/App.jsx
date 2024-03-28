import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./pages/SideBar";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SideBar />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
