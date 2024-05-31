import React from "react";
import { Row } from "react-bootstrap";
import SockGenerator from "../ui/SockGenerator";
import Home from "../ui/Home";
import Carousel from "react-bootstrap/Carousel";

export default function HomePage() {
  return (
    <Carousel
      interval={3000}
      controls={true}
      indicators={true}
      wrap={true}
      className="mb-5"
    >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://catherineasquithgallery.com/uploads/posts/2023-01/1674281339_catherineasquithgallery-com-p-fon-saita-serii-foto-8.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="d-flex flex-column justify-content-center h-100 mb-5">
          <h1>Самые крутые носки в мире</h1>
          <p>Они такие классные, что тебе захочется надеть их на руки.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://catherineasquithgallery.com/uploads/posts/2023-01/1674281339_catherineasquithgallery-com-p-fon-saita-serii-foto-8.jpg"
          alt="Second slide"
        />
        <Carousel.Caption className="d-flex flex-column justify-content-center h-100 mb-5">
          <h1>Носки, которые заставят тебя искать работу в NASA</h1>{" "}
          <p>
            Эти носки буквально выведут тебя на орбиту. Надевай их и будь готов
            к любым космическим приключениям.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://catherineasquithgallery.com/uploads/posts/2023-01/1674281339_catherineasquithgallery-com-p-fon-saita-serii-foto-8.jpg"
          alt="Third slide"
        />
        <Carousel.Caption className="d-flex flex-column justify-content-center h-100 mb-5">
          <h1>Носки, которые телепортируют тебя в другую реальность</h1>{" "}
          <p>
            Эти носки обладают невероятной силой - стоит их надеть, как ты тут
            же окажешься в совершенно другом мире! Будь готов к путешествиям
            сквозь пространство и время, потому что в этих носках возможно всё.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
