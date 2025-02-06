// src/components/GoogleLogin.js
import React, { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { GOOGLE_CLIENT_ID } from "../config/socialConfig";

const GoogleButtonContainer = styled.div`
  margin: 10px 0;
  min-height: 40px;
`;

function GoogleLogin() {
  const navigate = useNavigate();

  const handleCredentialResponse = useCallback(
    (response) => {
      console.log("Google 로그인 성공:", response);
      navigate("/main");
    },
    [navigate]
  );

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;

    script.onload = () => {
      if (window.google && GOOGLE_CLIENT_ID) {
        window.google.accounts.id.initialize({
          client_id: GOOGLE_CLIENT_ID,
          callback: handleCredentialResponse,
        });

        window.google.accounts.id.renderButton(
          document.getElementById("googleButtonDiv"),
          { theme: "outline", size: "large", width: 250 }
        );
      }
    };

    document.head.appendChild(script);
    return () => {
      script.remove();
    };
  }, [handleCredentialResponse]);

  return <GoogleButtonContainer id="googleButtonDiv" />;
}

export default GoogleLogin;
