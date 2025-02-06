import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const MainContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const LogoutButton = styled.button`
  background-color: #f44336;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: #d32f2f;
  }
`;

const MainPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 토큰이 없으면 로그인 페이지로 리다이렉트
    const token = localStorage.getItem("accessToken");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/");
  };

  return (
    <MainContainer>
      <h1>메인 페이지</h1>
      <p>로그인에 성공하셨습니다!</p>
      <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
    </MainContainer>
  );
};

export default MainPage;
