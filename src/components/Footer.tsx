import React from 'react';
import { Container } from 'react-bootstrap';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white mt-5 py-3">
      <Container className="text-center">
        <p>Contatti: info@shopease.com | +39 123 456 789</p>
        <p>&copy; {currentYear} ShopEase. Tutti i diritti riservati.</p>
      </Container>
    </footer>
  );
};

export default Footer;
