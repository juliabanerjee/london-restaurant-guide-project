import React, { useEffect, useState } from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard";


const CardList = () =>{

  const [restaurantData, setRestaurantData] = useState([]);

  const fetchRestaurantData = () =>{ 
  const url = "localhost:8080/restaurants"

  fetch(url)
  .then((response) =>{
    return response.json();
  })
  .then((result) =>{
    restaurantData(result)
    console.log(restaurantData)
  })
  .catch((error) =>{
    console.log("There has been an error with this request")
  });

  }

  useEffect(()=>{
    fetchRestaurantData();
  }, []);

  const restaurantJsx = restaurantData.map((restaurant, index) =>{

  return <RestaurantCard key={index + "restaurant"} name={restaurantData.name} address={restaurantData.address} phoneNumber={restaurantData.phoneNumber} cuisine={restaurantData.cuisine} priceRating={restaurantData.priceRating} myRating={restaurantData.myRating}/>
  });


    return(
        <div>
          {restaurantJsx}
        </div>
          );
}

export default CardList;