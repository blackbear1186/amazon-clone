import React, { useContext } from "react";
import { AppContext } from "../../AppContext";
import CheckOut from './CheckOut'

const CheckOutPage = () => {
  const { products, dispatch } = useContext(AppContext);
  const product = products.map(product => ({...product}));
  return (
    <div className="check-container">
      <section className="section">
        <div className="checkout-product">
          <div>
            <h1 className="shop-header">Shopping Cart</h1>
          </div>
          <div className='cart-container'>
              {products.map((product) => (
                <CheckOut 
                {...product}
                />                 
              ))}
          </div>
          <div className='cart-subtotal'>
            <span>Subtotal (1 item): $0</span>
          </div>
        </div>
      </section>
      <aside className="aside">
        <div>
        <span className='sub-span'>Subtotal (1 item): $0 </span>

        </div>
        <div>
        <button type="button" className='proceed-button'>Proceed to Checkout</button>

        </div>
      </aside>
    </div>
  );
};

export default CheckOutPage;

//1. import useContext and AppContext
//2. destructure products and dispatch set equal to useContext of AppContext
