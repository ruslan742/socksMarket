import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function Navigation({ user, logoutHandler }) {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">
          Hello,
          {user ? user.name : 'friend'}
          !
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Домашняя страница</Nav.Link>
          <Nav.Link as={Link} to="/generator">Конструктор носков</Nav.Link>
          {user ? (
            <>
             
              <Nav.Link as={Link} to="/favorites">Избранное</Nav.Link>
              <Nav.Link as={Link} to="/basket">Корзина</Nav.Link>
              <Button onClick={logoutHandler}>Выйти</Button>
            </>
          ) : (
            <>
              <Nav.Link as={Link} to="/signup">Зарегистрироваться</Nav.Link>
              <Nav.Link as={Link} to="/login">Войти</Nav.Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}
