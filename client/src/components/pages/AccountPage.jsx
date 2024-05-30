import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import axiosInstance from '../../axiosInstance';
import SocksList from '../ui/SocksList';

export default function AccountPage() {
  const [mySocks, setMySocks] = useState([]);
const isJoined=true
  useEffect(() => {
    axiosInstance('/socks/account').then(({ data }) => setMySocks(data));
  }, []);

  const deleteHandler = async (id) => {
    try {
      console.log('eee',id)
      const response = await axiosInstance.delete(`/socks/account/${id}/delete`);
      if (response.status === 200) {
        setMySocks((prev) => prev.filter((el) => el.id !== id));
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  }

  return (
    <Row className="justify-content-md-center">
      <SocksList socks={mySocks} isJoined={isJoined} deleteHandler={deleteHandler} />
    </Row>
  );
}
