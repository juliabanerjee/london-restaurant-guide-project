import React, { useEffect, useState } from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import "./CardList.scss";

const CardList = () => {
  const [restaurantData, setRestaurantData] = useState([]);

  const fetchRestaurantData = () => {
    const url = "http://localhost:8080/restaurants";

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setRestaurantData(result);
        console.log(result);
      })
      .catch((error) => {
        console.log("There has been an error with this request");
      });
  };

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const restaurantJsx = () => {
    return restaurantData.map((restaurant, index) => {
      return (
        <RestaurantCard
          key={index + "restaurant"}
          name={restaurant.name}
          address={restaurant.address}
          phoneNumber={restaurant.phoneNumber}
          cuisine={restaurant.cuisine}
          priceRating={restaurant.priceRating}
          myRating={restaurant.myRating}
        />
      );
    });
  };

  return <div className="card-list">{restaurantData && restaurantJsx()}</div>;
};

export default CardList;
