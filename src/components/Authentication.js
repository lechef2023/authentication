import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import firebase from 'firebase/compat/app'; // Cambiamos la importación aquí
import 'firebase/compat/auth'; // Cambiamos la importación aquí

const Authentication = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log('Inicio de sesión exitoso:', userCredential.user);
      })
      .catch((error) => {
        console.error('Error de inicio de sesión:', error);
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log('Registro exitoso:', userCredential.user);
      })
      .catch((error) => {
        console.error('Error de registro:', error);
      });
  };

  
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col xs={6}>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa tu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleLogin}>
              Iniciar sesión
            </Button>

            <Button variant="secondary" type="submit" onClick={handleRegister}>
              Registrarse
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Authentication;

