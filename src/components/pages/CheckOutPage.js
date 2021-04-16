import React, { useContext } from "react";
import { AppContext } from "../../AppContext";
import CheckOut from './CheckOut'

const CheckOutPage = () => {
  const { products, dispatch } = useContext(AppContext);
  const emptyImage = 'https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg';

  const totalAmount = products.reduce((total, product) => {
    return (
      total += parseFloat(product.price)
    )
  }, 0)
  const totalCart = products.length;  
  const emptyCart = (
    <div className='empty-cart-container'>
      <img style={{height: '150px'}}src={emptyImage} alt=''/>
      <div>
      <h1>Your Amazon Cart is empty</h1>
      </div>
    </div>
    
  )
  const fullCart = (
    <div className="check-container">
    <section className="section">
        <div className="checkout-product">
          <div className='shopping-cart'>
            <h1 className="shop-header">Shopping Cart</h1>
          </div>
              {products.map((product) => (
                <CheckOut 
                {...product}
                />                 
              ))}
          <div className='cart-subtotal'>
            <span>Subtotal : ${totalAmount}</span>
          </div>
        </div>
      </section>
      <aside className="aside">
        <div>
        <span className='sub-span'>Subtotal ({totalCart} item): ${totalAmount} </span>

        </div>
        <div>
        <button type="button" className='proceed-button'>Proceed to Checkout</button>

        </div>
      </aside>
    </div>

  )
  return <>{products.length === 0 ? emptyCart : fullCart} </>
};

export default CheckOutPage;

//1. import useContext and AppContext
//2. destructure products and dispatch set equal to useContext of AppContext
