import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NAVER_CLIENT_ID, NAVER_CALLBACK_URL } from "../config/socialConfig";

const NaverButton = styled.div`
  cursor: pointer;
  background-color: #03c75a;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;

const NaverLogin = () => {
  const [naverLogin, setNaverLogin] = useState(null);

  useEffect(() => {
    const loadNaverScript = () => {
      return new Promise((resolve, reject) => {
        if (document.getElementById("naver-login-sdk")) {
          resolve();
          return;
        }
        const script = document.createElement("script");
        script.id = "naver-login-sdk";
        script.src =
          "https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js";
        script.onload = () => resolve();
        script.onerror = (error) => reject(error);
        document.head.appendChild(script);
      });
    };

    const initializeNaverLogin = () => {
      try {
        const loginInstance = new window.naver.LoginWithNaverId({
          clientId: NAVER_CLIENT_ID,
          callbackUrl: NAVER_CALLBACK_URL,
          isPopup: false,
          loginButton: { color: "green", type: 3, height: 60 },
        });
        loginInstance.init();
        setNaverLogin(loginInstance);
      } catch (err) {
        console.error("네이버 로그인 초기화 실패:", err);
      }
    };

    const initialize = async () => {
      try {
        await loadNaverScript();
        initializeNaverLogin();
      } catch (err) {
        console.error("네이버 로그인 스크립트 로드 실패:", err);
      }
    };

    initialize();

    return () => {
      const script = document.getElementById("naver-login-sdk");
      if (script) {
        script.remove();
      }
    };
  }, []);

  const handleNaverLogin = () => {
    if (naverLogin) {
      naverLogin.getLoginStatus((status) => {
        if (status) {
          // 이미 로그인된 상태
          console.log("이미 로그인된 상태입니다.");
        } else {
          // 로그인 진행
          document.getElementById("naverIdLogin_loginButton")?.click();
        }
      });
    } else {
      console.log("네이버 로그인이 아직 초기화되지 않았습니다.");
    }
  };

  return (
    <>
      <div id="naverIdLogin" />
      <NaverButton onClick={handleNaverLogin}>네이버 로그인</NaverButton>
    </>
  );
};

export default NaverLogin;
