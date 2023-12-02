import React from 'react';
import './NearbyPharmacies.css'
import {NavBar} from "../Home/NavBar"
import phar1 from "../assets/img/ph1.jpeg"
import phar2 from "../assets/img/ph2.jpg"
import phar3 from "../assets/img/ph3.jpg"
import phar4 from "../assets/img/ph4.jpg"
import phar5 from "../assets/img/ph5.jpeg"
import phar6 from "../assets/img/ph6.jpg"

const Card = ({imgUrl, title,distance, description, btnText}) => {
  return (
    <div className="card">
      <div className="card__image-holder">
        <img className="card__image" src={imgUrl} />
      </div>
      <div className="card-title">
        <a href="#" className="toggle-info btn">
          <span className="left"></span>
          <span className="right"></span>
        </a>
        <h2>
          {title}
        </h2>
        <p>{distance}</p>
      </div>
      <div>
        <div className="card-description">
          {description}
        </div>
        <div className="card-flap flap2">
          <div className="card-actions">
            <a href="https://www.google.com/maps/place/Pharmacy/@35.8935371,10.5917836,17z/data=!3m1!4b1!4m6!3m5!1s0x12fd89b9d3adf417:0x791ee4a19aab772a!8m2!3d35.8935329!4d10.5966545!16s%2Fg%2F11fm4mft6t" target='_blank' className="btn">{btnText}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Cards = () => {
  return (
    <div className='Container'>
        <NavBar/>
    <div className="cards">
      <Card
        imgUrl={phar1}
        title="pharmacy A"
        distance=" distance : 500 m"
        description="price : 10 TND "
        btnText="open in maps"
      />
      <Card
        imgUrl={phar2}
        title="pharmacy B"
        distance="distance : 600 m"
        description="price : 10 TND"
        btnText="open in maps"
      />
      <Card
        imgUrl={phar3}
        title="pharmacy C"
        distance="distance : 800 m"
        description="price : 10 TND"
        btnText="open in maps"
      />
      <Card
        imgUrl={phar4}
        title="pharmacy D"
        distance="distance :  1km"
        description="price : 10 TND"
        btnText="open in maps"
      />
      <Card
        imgUrl={phar5}
        title="pharmacy E"
        distance="distance : 1.5km"
        description="price : 10 TND"
        btnText="open in maps"
      />
      <Card
        imgUrl={phar6}
        title="pharmacy F"
        distance="distance : 2km"
        description="not in stock but can be available"
        btnText="open in maps"
      />
    </div>
    </div>
  );
};

export default Cards;
