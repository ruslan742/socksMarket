import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function SignUpPage({ signUpHandler }) {
  return (
    <Form className="d-flex justify-content-md-center align-items-md-center my-5" onSubmit={signUpHandler}>
      <Form.Group>
        <Form.Control name="name" type="text" placeholder="Your name" />
      </Form.Group>
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
