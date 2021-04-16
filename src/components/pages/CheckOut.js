import React, {useContext} from 'react'
import {AppContext} from '../../AppContext'

const CheckOut = ({id, image, text, price, stars}) => {
  //1.
  const {dispatch} = useContext(AppContext)
  //2. 
  const handleDelete = () => {

    dispatch({
      type: 'DELETE_PRODUCT',
      payload: id
    })
  }
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
        <button className='delete-button' onClick={handleDelete} type='button'>Delete</button>
      </div>
      <div><span>${price}</span></div>
      </div>
    </div>
  )
}

export default CheckOut
