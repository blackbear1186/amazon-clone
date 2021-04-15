import { nanoid } from "nanoid";
import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Stars = ({ value, color = "orange" }) => {
  
  const Star = [
    <span>
      {value >= 1 ? <FaStar color={color} /> : value >= .5 ? <FaStarHalfAlt color={color}/> : <FaRegStar color={color} />}
    </span>,

    <span>
      {value >= 2 ? <FaStar color={color} /> : value >= 1.5 ? <FaStarHalfAlt color={color}/> : <FaRegStar color={color} />}
    </span>,
    <span>
      {value >= 3 ? <FaStar color={color} /> : value >= 2.5 ? <FaStarHalfAlt color={color}/> : <FaRegStar color={color} />}
    </span>,
    <span>
      {value >= 4 ? <FaStar color={color} /> : value >= 3.5 ? <FaStarHalfAlt color={color}/> : <FaRegStar color={color} />}
    </span>,
    <span>
      {value >= 5 ? <FaStar color={color} /> : value >= 4.5 ? <FaStarHalfAlt color={color}/> : <FaRegStar color={color} />}
    </span>,
  ];


  return (
    <div  className='rating'>
      {Star}
    </div>
  )
};

export default Stars;
