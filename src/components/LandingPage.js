import React from 'react';
import { Button } from 'react-bootstrap';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    firebase.auth().signOut().then(() => {
      console.log('Cierre de sesión exitoso');
      navigate('/Authentication'); // Redirigimos a la página de autenticación después de cerrar sesión
    }).catch((error) => {
      console.error('Error al cerrar sesión:', error);
    });
  };

  return (
    <div>
      <h2>Página de inicio</h2>
      <p>Bienvenido/a a la página de inicio después del inicio de sesión.</p>
      {/* Puedes agregar más contenido aquí */}
      <Button variant="primary" onClick={handleLogout}>
        Cerrar sesión
      </Button>
    </div>
  );
};

export default LandingPage;
