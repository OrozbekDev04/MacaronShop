import React, { useState } from 'react';
import styled from 'styled-components';
import mac from "../../assets/img/Ayana/mac.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';


const FloatingButton = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background-color: #f0c674;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SocialIcons = styled.div`
  position: absolute;
  bottom: 60px;
  display: ${({ show }) => (show ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  animation: fadeIn 0.5s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  a {
    margin: 5px 0;
    color: black;
    font-size: 24px;
    transition: color 0.3s;

    &:hover {
      color: #0073e6;
    }
  }
`;

const MacaroniComponent = () => {
  const [showIcons, setShowIcons] = useState(false);

  const toggleIcons = () => {
    setShowIcons(!showIcons);
  };

  return (
    <FloatingButton onClick={toggleIcons}>
      <img style={{ width: "85px", height: "55px"}} src={mac} alt="" />
      <SocialIcons show={showIcons ? 1 : 0}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </SocialIcons>
    </FloatingButton>
  );
};

export default MacaroniComponent;
