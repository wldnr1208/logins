import React from "react";
import styled from "styled-components";
import NaverLogin from "./NaverLogin";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f6f7;
`;

const LoginBox = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Title = styled.h1`
  color: #333;
  margin-bottom: 2rem;
`;

const Login = () => {
  return (
    <LoginContainer>
      <LoginBox>
        <Title>소셜 로그인</Title>
        <NaverLogin />
      </LoginBox>
    </LoginContainer>
  );
};

export default Login;
