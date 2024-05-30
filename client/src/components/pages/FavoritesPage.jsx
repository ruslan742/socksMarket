import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import axiosInstance from '../../axiosInstance';
import FvoriteForm from '../ui/FavoriteForm';

export default function FavoritesPage({user}) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    axiosInstance('/favorites').then(({ data }) => setFavorites(data));
  }, []);
console.log(favorites)
  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    const { data } = await axiosInstance.post('/favorites', formData);
    setFavorites((prev) => [data, ...prev]);
  };


  const joinHandler = async (id) => {
    try {
      console.log(id)
      const response = await axiosInstance.post(`/favorites/${id}/add`);
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
    <div>Hello</div>
//     <Row className="justify-content-md-center">
//    <Row>
//   <MeetingForm submitHandler={submitHandler} />
// </Row>
// <Row>
//         <FavoriteList favorites={favorites}  joinHandler={joinHandler} user={user} />
//       </Row>
//     </Row>
  );
}
