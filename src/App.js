import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import LandingPage from './components/LandingPage';
import Authentication from './components/Authentication'; // Import the Authentication component

const App = () => {
  const [user, setUser] = useState(null);

  // Función para verificar si el usuario está autenticado
  firebase.auth().onAuthStateChanged((user) => {
    setUser(user);
  });

  return (
    <Router>
      <div>
        <h1>Ejemplo de autenticación con Firebase</h1>
        <Routes>
          <Route path="/" element={user ? <LandingPage /> : <Authentication />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

