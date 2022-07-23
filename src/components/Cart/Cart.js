import React, { useEffect,useState } from 'react'
import { useGlobalContext } from '../../Context/Context'
import '../../Styles/Cart/Cart.css'
import { AiFillPlusSquare,AiFillMinusSquare } from "react-icons/ai";

import { BsTrashFill } from "react-icons/bs";

const Cart = () => {
  const {cart,dispatch} = useGlobalContext();
  console.log(cart)

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <div className='Cart-section'>
      <h2 className='heading'>Your Cart</h2>
      <div className='cart-list'>
        {
          cart.map((item)=>{
            const {id,name,price,qty,imgurl} = item;
            return(
          //     <article key={id} className='cart-item'>
          //       <div className='block-1'>
          //       <img src={imgurl} alt={name} className="item-img"/>
          //       <div className='item-info'>
          //         <h6>{name} </h6>
          //         <p>Rs.{price}/-</p>
          //       </div>
          //       </div>
          //       <div className='block-2'> 
          //       <div className='qty-control'>
          //         <button onClick={()=>{
          //           dispatch({type : "DECREMENT_QTY", payload: id})
          //         }} ><AiFillMinusSquare className='qty-icon'/></button>
          //         <span>{qty}</span>
          //         <button onClick={()=>{
          //           dispatch({type: "INCREMENT_QTY", payload: id})
          //         }}><AiFillPlusSquare className='qty-icon'/></button>
          //       </div>

          //       <div className='block-3'>
          //       <div className='item-total'>
          //         <p>Rs.{price * qty}</p>
          //       </div>
          //       <button
          //   // style={{ backgroundColor: "red" }}
          //   onClick={() => {
          //     dispatch({ type: "REMOVE_FROM_CART", payload: item.id });
          //   }}
          // >
          //   <BsTrashFill className='trash-icon'/>
          // </button>

          // </div>
          // </div>
          //     </article>  
          <div className='cart-item-wrapper'>
            <div className="cart-item-content">
                <div className="cart-item-image-and-details">
                    <div className="cart-item-image-wrapper">
                        <img src={imgurl} alt={name} />
                    </div>
                    <div className="cart-item-details">
                        <h2>{name} <span>x{qty}</span></h2>
                    </div>
                </div>
                <div className="actions">
                    <div className="price">
                        <h3>Rs. {price}</h3>
                    </div>
                    <div className="quantity">
                    <button
            // style={{ backgroundColor: "red" }}
            onClick={() => {
              dispatch({ type: "REMOVE_FROM_CART", payload: item.id });
            }}
          >
            <BsTrashFill className='trash-icon'/>
          </button>
                    <button onClick={()=>{
                    dispatch({type : "DECREMENT_QTY", payload: id})
                  }} ><AiFillMinusSquare className='qty-icon'/></button>
                  <span>{qty}</span>
                  <button onClick={()=>{
                    dispatch({type: "INCREMENT_QTY", payload: id})
                  }}><AiFillPlusSquare className='qty-icon'/></button>
                  
                    </div>
                </div>
            </div>
            <hr />
        </div>
            )
          })
        }
        {
          cart.length > 0 ? (
            <>
          <h3 className='grand-total'> Total:- Rs.{total}/-</h3>
          <button className='ClaerCart-btn' onClick={()=>{dispatch({type: "CLEAR_CART"})}}>Clear Cart</button>
          </>
          ): (<h3 style={{textAlign : "center", color: "red", margin: "2rem auto"}} >CART IS EMPTY</h3>)
        }
      </div>
    </div>
  )
}

export default Cart