// src/components/MainPage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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

function MainPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // 로그아웃 처리
    navigate("/");
  };

  return (
    <MainContainer>
      <h1>메인 페이지</h1>
      <p>로그인에 성공하셨습니다!</p>
      <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
    </MainContainer>
  );
}

export default MainPage;
