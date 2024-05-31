import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import axiosInstance from '../../axiosInstance';
import FavoritesList from '../ui/FavoriteList';


export default function FavoritesPage() {
  return (
    <div className="card">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
        className="card-img-top"
        alt="Fissure in Sandstone"
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#!" className="btn btn-primary" data-mdb-ripple-init>
          Button
        </a>
      </div>
    </div>
  );
}
