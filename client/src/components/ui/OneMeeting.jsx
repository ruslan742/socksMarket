import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//src="https://cdn2.tu-tu.ru/image/pagetree_node_data/1/c5338ccdf94843a66ed3a41772dc6120/"
export default function OneMeeting({ Meeting, deleteHandler, user,joinHandler,isJoined }) {
  return (
    <Card style={{ width: '25rem', marginBottom: 20 }}>
      <Card.Header>{Meeting.name}</Card.Header>
      <Card.Body>
        <Card.Img variant="top"    />
        <Card.Text>
          Адрес:
          {' '}
          {Meeting.meetingaddres}
        </Card.Text>
        <Card.Text>
          Количество участников:
          {' '}
          {Meeting.counter}
        </Card.Text>
        <Card.Text>
         Максимальная вместимость:
          {' '}
          {Meeting.capacity}
        </Card.Text>
       {isJoined || <Button variant="primary" onClick={() => joinHandler(Meeting.id)}>Я пойду!</Button>}
        {!isJoined|| <Button variant="danger" onClick={() => deleteHandler(Meeting.id)}>Delete</Button>}
      </Card.Body>
    </Card>
  );
}
//Meeting.userId === user?.id &&