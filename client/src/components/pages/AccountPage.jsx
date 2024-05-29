import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import axiosInstance from '../../axiosInstance';
import MeetingsList from '../ui/MeetingsList';

export default function AccountPage() {
  const [myMeetings, setMyMeetings] = useState([]);
const isJoined=true
  useEffect(() => {
    axiosInstance('/meetings/account').then(({ data }) => setMyMeetings(data));
  }, []);

  const deleteHandler = async (id) => {
    try {
      console.log('eee',id)
      const response = await axiosInstance.delete(`/meetings/account/${id}/delete`);
      if (response.status === 200) {
        setMyMeetings((prev) => prev.filter((el) => el.id !== id));
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  }

  return (
    <Row className="justify-content-md-center">
      <MeetingsList meetings={myMeetings} isJoined={isJoined} deleteHandler={deleteHandler} />
    </Row>
  );
}
