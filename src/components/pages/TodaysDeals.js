import React from "react";
import Stars from '../ui/Stars'
import {nanoid} from 'nanoid'

const TodaysDeals = () => {
  const TODAY_DEALS = [
    {
      id: nanoid(),
      image:
        "https://images-na.ssl-images-amazon.com/images/I/31bVXyQep%2BL._AC_.jpg",
      price: 21.99,
      text: "Boao 4 Pieces Basic Crop Tank Tops Sleeveless Racerback Crop",
      stars: 4,
    },
    {
      id: nanoid(),
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81Ml3RraKBL._AC_SX466_.jpg",
      price: 18.98,
      text:
        "MINGER LED Strip Lights Kit 32.8ft, RGB Color Changing LED Lights ",
      stars: 2.1,
    },
    {
      id: nanoid(),
      image: "https://m.media-amazon.com/images/I/81Gt8zHOTML._AC_SX466_.jpg",
      price: 25.59,
      text: "Art3d Peel and Stick Bathroom/Kitchen Backsplash Tiles, 6 Tiles",
      stars: 4.0,
    },
    {
      id: nanoid(),
      image: "https://www.amazon.co.jp/images/I/81cV9Pxp3FL._AC_SS450_.jpg",
      price: 23.59,
      text: "ComfiLife Gel Enhanced Seat Cushion - Non-Slip Orthopedic Gel" ,
      stars: 4.9,
    },
    {
      id: nanoid(),
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81UmnSK9xiL._AC_SY450_.jpg",
      price: 39.99,
      text: "Save on Tribit bluetooth speakers and wireless earbuds",
      stars: 3.5,
    },
    {
      id: nanoid(),
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61NZPCYSeVL._AC_SY355_.jpg",
      price: 49.99,
      text: "BENGOO G9000 Stereo Gaming Headset ",
      stars: 4.7,
    },
    {
      id: nanoid(),
      image:
        "https://images-na.ssl-images-amazon.com/images/I/91OU0fTgnwL._AC_UX522_.jpg",
      price: 12.99,
      text: "PAPLUS Ankle Compression Sock for Men and Women",
      stars: 3.1,
    },

    {
      id: nanoid(),
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81BuiiawBZL._AC_SX425_.jpg",
      price: 20.98,
      text: "Beetles 20 Pcs Gel Nail Polish Kit Fall Winter Gel Nail Polish",
      stars: 4.5,
    },
  ];
  const deals = TODAY_DEALS.map((deal) => (
      <div className="grid-col" key={deal.id}>
        <img className="deal-image" src={deal.image} alt="" />
    <div className="card-data">

        <div className="deal-label"><span>Deal of the day</span></div>
        <span className="deal-price">${deal.price}</span>
        <span className="deal-text">{deal.text}</span>
        <Stars value={parseFloat(deal.stars)}/>
        <button className="deal-btn" type="button">
          Add to Cart
        </button>
      </div>
    </div>
  ));
  return (
    <div className="deal-container">
      <h2>Deals and Promotions</h2>
      <span>
        Shop Today's Deals, Lightening Deals, and limited-time discounts
      </span>
      <div className="row-deal">{deals}</div>
    </div>
  );
};

export default TodaysDeals;
