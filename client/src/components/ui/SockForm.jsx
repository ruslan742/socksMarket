import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function SockForm({ submitHandler }) {
  return (
    <Form className="d-flex justify-content-md-center align-items-md-center my-5" onSubmit={submitHandler}>
      <Form.Group>
        <Form.Control name="sockname" type="text" placeholder="Sock's name" />
      </Form.Group>
      <Form.Group>
        <Form.Control name="sockaddres" type="text" placeholder="Sock's addres" />
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
