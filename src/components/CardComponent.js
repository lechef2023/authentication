import React from 'react';
import { Card } from 'react-bootstrap';

const CardComponent = ({ user }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Información del usuario</Card.Title>
        <Card.Text>
          <strong>Nombre:</strong> {user.displayName}
        </Card.Text>
        <Card.Text>
          <strong>Email:</strong> {user.email}
        </Card.Text>
        <Card.Text>
          <strong>UID:</strong> {user.uid}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
