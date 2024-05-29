import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function LoginPage({ loginHandler }) {
  return (
    <Form className="d-flex justify-content-md-center align-items-md-center my-5" onSubmit={loginHandler}>
      <Form.Group>
        <Form.Control name="email" type="email" placeholder="Your email" />
      </Form.Group>
      <Form.Group>
        <Form.Control name="password" type="password" placeholder="Your password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
