import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Container, CssBaseline } from '@mui/material';
import Home from './components/Home';
//import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';

function App() {
  return (
    <Router>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Link to="/" style={{ color: 'white', marginRight: '20px', textDecoration: 'none' }}>
            Home
          </Link>
          <Link to="/projects" style={{ color: 'white', marginRight: '20px', textDecoration: 'none' }}>
            Projects
          </Link>
          <Link to="/skills" style={{ color: 'white', marginRight: '20px', textDecoration: 'none' }}>
            Skills
          </Link>
          <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>
            About
          </Link>
        </Toolbar>
      </AppBar>
      
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
         {/* <Route path="/projects" element={<Projects />} />*/}
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
