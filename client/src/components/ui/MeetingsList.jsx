import React from 'react';
import { Col } from 'react-bootstrap';
import OneMeeting from './OneMeeting';

export default function MeetingsList({ meetings, user ,joinHandler,isJoined,deleteHandler}) {
  return meetings.map((meeting) => (
    <Col xs={4} key={meeting.id}>
      <OneMeeting Meeting={meeting} deleteHandler={deleteHandler} joinHandler={joinHandler} user={user} isJoined={isJoined} />
    </Col>
  ));
}
