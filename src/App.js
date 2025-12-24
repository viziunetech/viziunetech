import * as React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Convert from './pages/Convert';
import View from './pages/View';
import Services from './pages/ServicesOffered';
import Pricing from './pages/Pricing';
import Projects from './pages/Projects';
import ContactUs from './pages/ContactUs';

export default function App() {
  return (
    <Router>
      <Box
        sx={{
          backgroundColor: '#f4f4f4',
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '100vw',
          maxHeight: '99vh',
          overflowX: 'hidden'

        }}
      >
        <Header />

        <Container sx={{ flex: 1, py: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<ContactUs />} />

          </Routes>
        </Container>

        <Footer />
      </Box>
    </Router>
  );
}
