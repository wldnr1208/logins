import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Login from "./components/Login";
import MainPage from "./components/MainPage";

// NaverCallback 컴포넌트 추가
const NaverCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = new URL(window.location.href).searchParams.get("token");
    if (token) {
      localStorage.setItem("accessToken", token);
      navigate("/main");
    } else {
      navigate("/");
    }
  }, [navigate]);

  return <div>처리중...</div>;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/callback/naver" element={<NaverCallback />} />
      </Routes>
    </Router>
  );
}

export default App;
