import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

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

  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        console.log('Inicio de sesión con Google exitoso:', result.user);
      })
      .catch((error) => {
        console.error('Error de inicio de sesión con Google:', error);
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

            <Button variant="success" type="button" onClick={handleGoogleSignIn}>
              Iniciar sesión con Google
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Authentication;

