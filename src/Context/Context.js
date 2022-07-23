import React from 'react'
import { createContext, useContext, useReducer } from "react";
import FoodData from '../Utility/FoodData';
import { cartReducer } from "./Reducer";
const cartContext = createContext();
const initialState = {FoodData : FoodData,cart:[]}
const Context = ({children}) => {

  const [state, dispatch] = useReducer(cartReducer, initialState);
  console.log(initialState.FoodData)
  return (
    <cartContext.Provider value={{ ...state, dispatch}}>
      {children}
    </cartContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(cartContext);
};

export default Context