import React from "react";
import HomeGrid from "../ui/HomeGrid";

const HomePage = () => {

  return (
    <div className="carousel-container">
      <div className="page-container">
        <div className="second-bx">
          <span className="second-box">
            You are on amazon.com. You can also shop on Amazon Japan for
            millions of products with fast local delivery.
          </span>
        </div>

        <div className="card-container">
          <HomeGrid />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
