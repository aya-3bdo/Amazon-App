import React from "react";
import { Rating } from "react-simple-star-rating";
import "../styling/colors.css";

function RatingStars({customIcons,initialValue, readonly, allowFraction}) {
 
  return (
    // Every array in custom Icons represents the size, number and the status of every star [status: whether it's solid star or void or half solid].
    <Rating customIcons={customIcons}
      //  Represents the shape of the rating but in a gray-shaped without any colors.
      initialValue={initialValue}
      //  Not allowed to interact with it.
      readonly={readonly}
      // allow half solid/void stars.
      allowFraction={allowFraction}
    />
  );
}
export default RatingStars;
