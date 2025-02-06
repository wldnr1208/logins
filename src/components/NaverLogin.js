import React, { useEffect } from "react";
import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

function NaverLogin() {
  useEffect(() => {
    const naverLogin = () => {
      window.location.href =
        "http://15.164.91.27:8080/oauth2/authorization/naver";
    };

    const btnNaverLogin = document.getElementById("naverIdLogin");
    if (btnNaverLogin) {
      btnNaverLogin.addEventListener("click", naverLogin);
    }

    return () => {
      if (btnNaverLogin) {
        btnNaverLogin.removeEventListener("click", naverLogin);
      }
    };
  }, []);

  return (
    <LoginContainer>
      <LoginBox>
        <button
          id="naverIdLogin"
          style={{
            backgroundColor: "#03C75A",
            color: "white",
            padding: "12px 20px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            width: "100%",
            fontSize: "16px",
            fontWeight: "500",
          }}
        >
          네이버 로그인
        </button>
      </LoginBox>
    </LoginContainer>
  );
}

export default NaverLogin;
