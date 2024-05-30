import React from 'react';
import { Col } from 'react-bootstrap';
import OneSock from './OneSock';

export default function SocksList({ socks, user ,joinHandler,isJoined,deleteHandler}) {
  return socks.map((sock) => (
    <Col xs={4} key={sock.id}>
      <OneSock Sock={sock} deleteHandler={deleteHandler} joinHandler={joinHandler} user={user} isJoined={isJoined} />
    </Col>
  ));
}
