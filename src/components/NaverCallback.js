import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NAVER_CLIENT_ID, NAVER_CALLBACK_URL } from "../config/socialConfig";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NaverCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    const state = searchParams.get("state");

    if (code && state) {
      sessionStorage.setItem("naverToken", code);
      navigate("/main");
    } else {
      navigate("/");
    }
  }, [navigate]);

  return <div>로그인 처리중...</div>;
}

export default NaverCallback;
