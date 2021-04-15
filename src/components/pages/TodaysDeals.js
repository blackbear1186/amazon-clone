import React, { useContext } from "react";
import Stars from "../ui/Stars";
import { AppContext } from "../../AppContext";

const TodaysDeals = ({ id, image, price, text, stars }) => {
  //1.
  const { dispatch } = useContext(AppContext);

  const handleAddProduct = () => {
    const product = {
      id: id,
      image: image,
      price: price,
      text: text,
      stars: stars,
    };
    dispatch({
      type: "ADD_PRODUCTS",
      payload: product,
    });
  };

  return (
    <>
      <img className="deal-image" src={image} alt="" />
      <div className="card-data">
        <div className="deal-label">
          <span>Deal of the day</span>
        </div>
        <span className="deal-price">${price}</span>
        <span className="deal-text">{text}</span>
        <span>
        <Stars value={stars} />
        </span>
        <button className="deal-btn" type="button" onClick={handleAddProduct}>
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default TodaysDeals;
