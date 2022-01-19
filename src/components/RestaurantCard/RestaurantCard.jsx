import React from "react";
import "./RestaurantCard.scss";

const RestaurantCard = (props) => {
  const { name, address, phoneNumber, cuisine, priceRating, myRating } = props;

  return (
    <div className="restaurant-card">
      <div className="restaurant-card__section1">
        <h4 className="restaurant-card__name">Name : {name}</h4>
        <img src="" alt="" className="restaurant-card__image" />
      </div>
      <div className="restaurant-card__info">
        <p>Address: </p>
        <p>{address}</p>
        <p>Number: </p>
        <p>{phoneNumber}</p>
        <p>Cuisine: </p>
        <p>{cuisine}</p>
        <p>Price: </p>
        <p>{priceRating}</p>
        <p>My Rating: </p>
        <p>{myRating}/10</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
