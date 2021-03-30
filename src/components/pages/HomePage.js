import React from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const HomePage = () => {
  const SliderImages = [
    {
      image:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_2x._CB432458382_.jpg",
    },
    {
      image:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_2x._CB432469748_.jpg",
    },
    {
      image:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_2x._CB431858162_.jpg",
    },
    {
      image:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_2x._CB429090087_.jpg",
    },
    {
      image:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_2x._CB429089928_.jpg",
    },
    {
      image:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2021/Marketing/EvergreenQ1/Gateway/US-EN_AMU_EvergreenQ1_DMUX-3799_JZ_OnS_GW_Hero_D_1500x600_1X_CV2._CB412009348_.jpg",
    },
  ];

  return (
    <div className="carousel-container">
      {SliderImages.map((slide) => (
        <div className="carousel-slide">
          <IoIosArrowForward className="right-arrow" />
          <IoIosArrowBack className="left-arrow" />

          <img className="main-image" src={slide.image} alt=""></img>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
