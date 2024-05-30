import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SockGenerator from '../ui/SockGenerator';


export default function GeneratorPage() {
    const [isAdded, setisAdded] = useState(false);
    const addToCartHandler = async (e) => {
       // e.preventDefault();
       console.log(isAdded)
       // const formData = Object.fromEntries(new FormData(e.target));
        //const { data } = await axiosInstance.post('/meetings', formData);
        setisAdded((prev) =>(prev===false&& true));
        console.log(isAdded)
      };
  return (
    <>
    <Row className='mt-3'>
      <h1>Выберите дизайн</h1>
    </Row>
        <Row className='mt-3'>
        <SockGenerator addToCartHandler={addToCartHandler} isAdded={isAdded} />
      </Row>
      </>
  );
}
