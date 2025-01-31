import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Button, Card, Navbar, Container, Row, Col, Nav } from 'react-bootstrap';
import '../styles/Main.css';
import Login from './components/Login.js';
import AccountInfoList from './components/accountInfo-list.js';
import LoginOverlay from './components/LoginOverlay.js';
import SignUp from './components/SignUp';
import CppCourse from '../CppCourse/CppCourse'; // Correct import

import cplusplusLogo from '../img/cpp_logo.png';
import pythonLogo from '../img/python_logo.png';
import javaLogo from '../img/java_logo.png';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const navigate = useNavigate(); // Use navigate to programmatically switch routes

  const openSignUp = () => {
    setShowLogin(false);
    setShowSignUp(true);
  };

  const openLogin = () => {
    setShowSignUp(false);
    setShowLogin(true);
  };

  const closeAllModals = () => {
    setShowLogin(false);
    setShowSignUp(false);
  };

  return (
    <div className="Home">
      {/* Navbar */}
      <Navbar bg="dark" className="fixed-top">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">Dinobytes</Navbar.Brand>
          <Nav className="navbar-nav">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/lessons">Lessons</Nav.Link>
            <Nav.Link as={Link} to="/account">Account</Nav.Link>
            <Nav.Link onClick={() => setShowLogin(true)}>Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Modals */}
      {showLogin && <Login onClose={closeAllModals} onSwitchToSignUp={openSignUp} />}
      {showSignUp && <SignUp onClose={closeAllModals} />}

      {/* Routes */}
      <div className="d-flex justify-content-center main-content">
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <Container>
                <Row className="justify-content-center">
                  <Col md="auto" className="text-center">
                    <h1>Welcome to Dinobytes</h1>
                    <p>A site to learn programming and improve your skills.</p>
                  </Col>
                </Row>
                <Row className="justify-content-center">
                  <Col md="auto">
                    <Card style={{ width: '18rem', marginTop: '20px' }}>
                      <Card.Img variant="top" src={cplusplusLogo} className="card-img-top" />
                      <Card.Body>
                        <Card.Title>C++ Course</Card.Title>
                        <Card.Text>
                          C++ is a powerful general-purpose programming language. It is widely used in software development, game development, and real-time simulations.
                        </Card.Text>
                        <Button variant="primary" onClick={() => navigate('/cpp-course')}>
                          Go to Course
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md="auto">
                    <Card style={{ width: '18rem', marginTop: '20px' }}>
                      <Card.Img variant="top" src={pythonLogo} className="card-img-top" />
                      <Card.Body>
                        <Card.Title>Python Course</Card.Title>
                        <Card.Text>
                          Python is a versatile, high-level programming language known for its ease of use and readability.
                        </Card.Text>
                        <Button variant="primary">Go to Course</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md="auto">
                    <Card style={{ width: '18rem', marginTop: '20px' }}>
                      <Card.Img variant="top" src={javaLogo} className="card-img-top" />
                      <Card.Body>
                        <Card.Title>Java Course</Card.Title>
                        <Card.Text>
                          Java is a robust, object-oriented programming language used in many enterprise-level applications.
                        </Card.Text>
                        <Button variant="primary">Go to Course</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>
            }
          />

          {/* C++ Course Route */}
          <Route path="/cpp-course" element={<CppCourse />} />

          {/* Sign Up Route */}
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
