import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function FavoriteForm({ submitHandler }) {
  return (
    <Form className="d-flex justify-content-md-center align-items-md-center my-5" onSubmit={submitHandler}>
      <Form.Group>
        <Form.Control name="price" type="number" placeholder="The Best Socks in Favorites" />
      </Form.Group>
      <Form.Group>
        <Form.Control name="sockaddres" type="text" placeholder="Sock's addres" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Добавить в корзину
      </Button>
    </Form>
  );
}
