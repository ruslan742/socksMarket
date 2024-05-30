import React from 'react';
import { Col } from 'react-bootstrap';
import OneFavorite from './OneFavorite';

export default function SocksList({ favorites, user ,joinHandler,isJoined,deleteHandler}) {
  return favorites.map((favorite) => (
    <Col xs={4} key={favorite.id}>
      <OneFavorite Favorite={favorite} deleteHandler={deleteHandler} joinHandler={joinHandler} user={user} isJoined={isJoined} />
    </Col>
  ));
}
