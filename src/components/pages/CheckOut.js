import React from 'react'

const CheckOut = ({id, image, text, price, stars}) => {
  return (
    <>
      <div>
      <img className='deal-image' src={image} alt=''/>
      </div>
      <div>
        <span>{text}</span>
      </div>
      <div><span>${price}</span></div>
    </>
  )
}

export default CheckOut
