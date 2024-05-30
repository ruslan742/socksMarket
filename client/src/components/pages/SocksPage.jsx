import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import axiosInstance from '../../axiosInstance';
import OneSock from '../ui/OneSock';
import SockForm from '../ui/SockForm';
import SocksList from '../ui/SocksList';

export default function SocksPage({user}) {
  const [socks, setSocks] = useState([]);

  useEffect(() => {
    axiosInstance('/socks').then(({ data }) => setSocks(data));
  }, []);
console.log(socks)
  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    const { data } = await axiosInstance.post('/socks', formData);
    setSocks((prev) => [data, ...prev]);
  };


  const joinHandler = async (id) => {
    try {
      console.log(id)
      const response = await axiosInstance.post(`/socks/${id}/add`);
      // console.log(req.params);
      // console.log(res.locals);
      // if (response.status === 200) {
      //   setSocks((prev) => prev.filter((el) => el.id !== id));
      // }
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (
    <Row className="justify-content-md-center">
   <Row>
  <SockForm submitHandler={submitHandler} />
</Row>
<Row>
        <SocksList socks={socks}  joinHandler={joinHandler} user={user} />
      </Row>
    </Row>
  );
}
