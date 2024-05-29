import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function MeetingForm({ submitHandler }) {
  return (
    <Form className="d-flex justify-content-md-center align-items-md-center my-5" onSubmit={submitHandler}>
      <Form.Group>
        <Form.Control name="meetingname" type="text" placeholder="Meeting's name" />
      </Form.Group>
      <Form.Group>
        <Form.Control name="meetingaddres" type="text" placeholder="Meeting's addres" />
      </Form.Group>
      <Form.Group>
        <Form.Control name="capacity" type="text" placeholder="Вместимость" />
      </Form.Group>
      <Form.Group>
        <Form.Control name="counter" type="text" placeholder="Количество участников" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Добавить встречу
      </Button>
    </Form>
  );
}
