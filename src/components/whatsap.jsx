import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { useColorModeValue, useEventListener } from '@chakra-ui/react';
import { animateScroll as scroll } from 'react-scroll';

const WhatsAppButton = () => {
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });

  const handleScroll = () => {
    const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    const buttonSize = 80;
    const buttonMargin = 20;
    const scrollPosition = window.scrollY || window.pageYOffset;

    let xPos = windowWidth - buttonSize - buttonMargin;
    let yPos = windowHeight - buttonSize - buttonMargin - scrollPosition;

    if (windowWidth <= 768) {
      xPos = windowWidth - buttonSize - buttonMargin;
      yPos = windowHeight - buttonSize - buttonMargin;
    }

    setButtonPosition({ x: xPos, y: yPos });
  };

  useEffect(() => {
    handleScroll();
  }, []);

  useEventListener('scroll', handleScroll);

  const handleButtonClick = () => {
    window.open('https://api.whatsapp.com/send?phone=3136426338', '_blank');
  };

  const buttonColor = useColorModeValue('green.500', 'green.300');

  return (
    <button
      onClick={handleButtonClick}
      className="whatsapp-button"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        borderRadius: '50%',
        width: '90px',
        height: '90px',
        backgroundColor: buttonColor,
        border: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.3)',
        cursor: 'pointer',
        zIndex: '9999',
      }}
    >
      <FaWhatsapp className="whatsapp-icon" color="green" size={40} />
    </button>
  );
};

export default WhatsAppButton;
