import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//src="https://cdn2.tu-tu.ru/image/pagetree_node_data/1/c5338ccdf94843a66ed3a41772dc6120/"
export default function OneSock({ Sock, deleteHandler, user,joinHandler,isJoined }) {
  return (
    <Card style={{ width: '25rem', marginBottom: 20 }}>
      <Card.Header>{Sock.name}</Card.Header>
      <Card.Body>
        <Card.Img variant="top"    />
        <Card.Text>
          Адрес:
          {' '}
          {Sock.sockaddres}
        </Card.Text>
        <Card.Text>
          Количество участников:
          {' '}
          {Sock.counter}
        </Card.Text>
        <Card.Text>
         Максимальная вместимость:
          {' '}
          {Sock.capacity}
        </Card.Text>
       {isJoined || <Button variant="primary" onClick={() => joinHandler(Sock.id)}>Я пойду!</Button>}
        {!isJoined|| <Button variant="danger" onClick={() => deleteHandler(Sock.id)}>Delete</Button>}
      </Card.Body>
    </Card>
  );
}
//Sock.userId === user?.id &&