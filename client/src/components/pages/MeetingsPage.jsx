import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import axiosInstance from '../../axiosInstance';
import OneMeeting from '../ui/OneMeeting';
import MeetingForm from '../ui/MeetingForm';
import MeetingsList from '../ui/MeetingsList';

export default function MeetingsPage({user}) {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    axiosInstance('/meetings').then(({ data }) => setMeetings(data));
  }, []);
console.log(meetings)
  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    const { data } = await axiosInstance.post('/meetings', formData);
    setMeetings((prev) => [data, ...prev]);
  };


  const joinHandler = async (id) => {
    try {
      console.log(id)
      const response = await axiosInstance.post(`/meetings/${id}/add`);
      // console.log(req.params);
      // console.log(res.locals);
      // if (response.status === 200) {
      //   setMeetings((prev) => prev.filter((el) => el.id !== id));
      // }
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (
    <Row className="justify-content-md-center">
   <Row>
  <MeetingForm submitHandler={submitHandler} />
</Row>
<Row>
        <MeetingsList meetings={meetings}  joinHandler={joinHandler} user={user} />
      </Row>
    </Row>
  );
}
