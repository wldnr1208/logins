import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import MainPage from "./components/MainPage";
import NaverLogin from "./components/NaverLogin";
import NaverCallback from "./components/NaverCallback";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/oauth2/authorization/naver" element={<NaverCallback />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
