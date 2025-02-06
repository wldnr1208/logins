import React from "react";
import styled from "styled-components";
import NaverLogin from "./NaverLogin";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
`;

const LoginBox = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
`;

const Title = styled.h1`
  color: #333;
  margin-bottom: 2rem;
  font-size: 2rem;
`;

const Divider = styled.div`
  margin: 1.5rem 0;
  display: flex;
  align-items: center;
  text-align: center;
  &::before,
  &::after {
    content: "";
    flex: 1;
    border-bottom: 1px solid #eee;
  }
  span {
    padding: 0 10px;
    color: #666;
    font-size: 0.9rem;
  }
`;

function Login() {
  return (
    <LoginContainer>
      <LoginBox>
        <Title>Welcome</Title>
        <NaverLogin />
        <Divider>
          <span>또는</span>
        </Divider>
        {/* 다른 로그인 옵션들을 여기에 추가할 수 있습니다 */}
      </LoginBox>
    </LoginContainer>
  );
}

export default Login;
