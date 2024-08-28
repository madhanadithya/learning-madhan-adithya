import React from 'react';
import { Typography, Container, Link } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ padding: '20px 0', textAlign: 'center', backgroundColor: '#004d00', color: 'white' }}>
      <Container maxWidth="md">
        <div style={{ marginTop: '10px' }}>
          <Link href="/about" style={{ color: 'white', margin: '0 10px' }}>About Us</Link>
          <Link href="/contact" style={{ color: 'white', margin: '0 10px' }}>Contact</Link>
          <Link href="/privacy" style={{ color: 'white', margin: '0 10px' }}>Privacy Policy</Link>
          <Link href="/terms" style={{ color: 'white', margin: '0 10px' }}>Terms of Service</Link>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
