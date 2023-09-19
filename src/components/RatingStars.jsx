import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import "../styling/colors.css";

function RatingStars({customIcons,initialValue, readonly, allowFraction}) {
 
  return (
    <Rating customIcons={customIcons}
      initialValue={initialValue}
      readonly={readonly}
      allowFraction={allowFraction}
    />
  );
}
export default RatingStars;
