import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function SockGenerator({addToCartHandler,isAdded}) {
  const [backgroundColor, setBackgroundColor] = useState('black');
  const [selectedImage, setSelectedImage] = useState();

  const handleColorChange = (event) => {
    setBackgroundColor(event.target.value);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const galleryImages = [
    'https://img.razrisyika.ru/kart/46/181925-yabloko-kartinka-dlya-detey-37.jpg',
    'https://babyimages.ru/kartinki/mashina-kartinka-07.jpg',
    '/sock2.png',
    '/sock3.png',
    // Добавьте сюда другие изображения
  ];

  return (
    <Container>
      <Row style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
      }}>
        <Col xs={6} md={4}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <div style={{ position: 'relative', width: '500px' }}>
              <Image
                src='/socksfinal.png'
                style={{
                  backgroundColor: backgroundColor,
                  width: '100%',
                  height: 'auto',
                  border: '5px solid #ddd',
                  borderRadius: '10px'
                }}
              />
              {selectedImage && (
                <Image
                  src={selectedImage}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
  //                  transform: 'translate(-50%, -50%)',
                    width: '100px',
                    height: 'auto',

                  }}
                />
              )}
            </div>
            {(isAdded&&<Button style={{
              width: 'auto',
              marginTop: '10px',
              fontSize: '22px',
              whiteSpace: 'nowrap'
            }} 
            onClick={() => window.location.href = '/cart'} >
              { 'Перейти в корзину' }
            </Button>)}
            {(!isAdded&&<Button style={{
              width: 'auto',
              marginTop: '10px',
              fontSize: '22px',
              whiteSpace: 'nowrap'
            }} onClick={addToCartHandler} >
              { 'Добавить в корзину'}
            </Button>)}
          </div>
        </Col>
        <Col xs={6} md={4} style={{
          marginLeft: '50px' // Добавляем небольшой отступ слева
        }}>
          <Form.Group controlId="colorSelect">
            <Form.Label>Выберите цвет</Form.Label>
            <Form.Control as="select" value={backgroundColor} onChange={handleColorChange}>
              <option>Выберите цвет</option>
              <option value="red">Красный</option>
              <option value="blue">Синий</option>
              <option value="green">Зеленый</option>
              <option value="black">Черный</option>
              <option value="white">Белый</option>
              <option value="yellow">Желтый</option>
              <option value="orange">Оранжевый</option>
              <option value="purple">Фиолетовый</option>
              <option value="pink">Розовый</option>
              <option value="gray">Серый</option>
              <option value="beige">Бежевый</option>
              <option value="brown">Коричневый</option>
            </Form.Control>
          </Form.Group>
          <div style={{
            display: 'flex',
            overflowX: 'scroll',
            whiteSpace: 'nowrap',
            border: '1px solid #ddd',
            padding: '10px',
            borderRadius: '10px'
          }}>
            {galleryImages.map((image, index) => (
              <Image
                key={index}
                src={image}
                style={{
                  width: '100px',
                  height: 'auto',
                  margin: '0 10px',
                  cursor: 'pointer',
                  border: selectedImage === image ? '2px solid #000' : '2px solid transparent'
                }}
                onClick={() => handleImageClick(image)}
              />
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default SockGenerator;