import React from "react";
import TodaysDeals from "../src/components/pages/TodaysDeals";

const ProductList = ({ products }) => {
  // const productsL = [...productList]
  return (
    <div className="deal-container">
      <h2>Deals and Promotions</h2>
      <span>
        Shop Today's Deals, Lightening Deals, and limited-time discounts
      </span>
      <div className='row-deal'>
        {products.map((product) => (
          <div key={product.id} className='grid-col'>
            <TodaysDeals {...product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
