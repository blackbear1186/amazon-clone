import React, {createContext, useReducer} from 'react'

//4.
export const AppReducer = (state, action) => {
  switch(action.type){
    case "ADD_PRODUCTS":

      return {
        ...state,
        products: [...state.products, action.payload],
      }
    case 'DELETE_PRODUCT':
        return {
          ...state,
          products: state.products.filter(product => product.id !== action.payload)
        }
      default:
        return state;
  }
}

//1.
const initialstate = {
  products: []
}
//2.
export const AppContext = createContext(initialstate);

//3.
export const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialstate)

  return (
    <AppContext.Provider
      value={{
        products: state.products,
        dispatch,
      }}>
        {children}
    </AppContext.Provider>
  )
}

