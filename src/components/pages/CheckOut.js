import React from 'react'

const CheckOut = ({id, image, text, price, stars}) => {
  return (
    <div className='cart-container'>
      <div className='card-cart'>
      <div>
      <img className='deal-image' src={image} alt=''/>
      </div>
      <div>
        <div>
        <span>{text}</span>

        </div>
        <button className='delete-button' type='button'>Delete</button>
      </div>
      <div><span>${price}</span></div>
      </div>
    </div>
  )
}

export default CheckOut
