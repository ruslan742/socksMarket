import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import axiosInstance from '../../axiosInstance';
import FavoritesList from '../ui/FavoriteList';

export default function FavoritesPage() {
  const [myFavorites, setMyFavorites] = useState([]);
const isJoined=true
  useEffect(() => {
    axiosInstance('/favorites/account').then(({ data }) => setMyFavorites(data));
  }, []);

  const deleteHandler = async (id) => {
    try {
      console.log('eee',id)
      const response = await axiosInstance.delete(`/favorites/account/${id}/delete`);
      if (response.status === 200) {
        setMyFavorites((prev) => prev.filter((el) => el.id !== id));
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  }

  return (
    <Row className="justify-content-md-center">
      <FavoritesList favorites={myFavorites} isJoined={isJoined} deleteHandler={deleteHandler} />
    </Row>
  );
}
