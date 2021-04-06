import React from "react";
import { Link } from "react-router-dom";

const HomeGrid = () => {
  const amazonbasics = [
    {
      image:
        "https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg",
    },
    {
      image:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_2x._SY608_CB431800964_.jpg",
    },
    {
      image:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_260x260._SY608_CB442725065_.jpg",
    },
    {
      image:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__2x._SY608_CB403084762_.jpg",
    },
    {
      image:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_2x._SY608_CB432774344_.jpg",
    },
    {
      image:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_2x._CB418309979_.jpg",
    },
    {
      image:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY608_CB432517900_.jpg",
    },
    {
      image:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Returns_2x._SY608_CB432774709_.jpg",
    },
  ];
  return (
    <>
      <div className="card">
        <div className="card-content">
          <h2>Get fit at home</h2>
          <img src={amazonbasics[0].image} alt="" />

          <div className="card-link">
            <Link style={{ textDecoration: "none" }} to="/">
              <span>Explore now</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <h2>Computers & Accessories</h2>
          <img src={amazonbasics[1].image} alt="" />
          <div className="card-link">
            <Link style={{ textDecoration: "none" }} to="/">
              <span className="card-link">Shop now</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <h2>AmazonBasics</h2>
          <img src={amazonbasics[2].image} alt="" />
          <div className="card-link">
            <Link style={{ textDecoration: "none" }} to="/">
              <span>See more</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-content">
          <h2>Shop top categories</h2>
          <img src={amazonbasics[3].image} alt="" />
          <div className="card-link">
            <Link style={{ textDecoration: "none" }} to="/">
              <span className="card-link">See more</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <h2>Beauty picks</h2>
          <img src={amazonbasics[4].image} alt="" />
          <div className="card-link">
            <Link style={{ textDecoration: "none" }} to="/">
              <span className="card-link">Shop now</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="cardAd">
        <div className="card-contentAd">
          <img style={{ height: "250px" }} src={amazonbasics[5].image} alt="" />
          <div className="card-sign-in">
            <h2>Sign in for the best experience</h2>
            <Link to="/login">
              <div>
                <button type='button' className="login-button">Sign in securely</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <h2>Shop by Category</h2>
          <div className="card-link">
            <Link style={{ textDecoration: "none" }} to="/">
              <span className="card-link">Shop now</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-content">
          <h2>Find your ideal Tv</h2>
          <img src={amazonbasics[6].image} alt="" />
          <div className="card-link">
            <Link style={{ textDecoration: "none" }} to="/">
              <span className="card-link">See more</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <h2>Easy Returns</h2>
          <img src={amazonbasics[7].image} alt="" />
          <div className="card-link">
            <Link style={{ textDecoration: "none" }} to="/">
              <span className="card-link">See more</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeGrid;
