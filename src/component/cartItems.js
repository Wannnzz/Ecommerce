import React from "react";
import './cartItems.css'
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import remove_icon from "./Assets/cart_cross_icon.png"

const CartItems = () => {

    const {getTotalCartAmount,all_product,cartItems,removeFromCart} = useContext(ShopContext);
    return(
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>

            </div>
            <hr/>

            {all_product.map((e)=>{
                if (cartItems[e.id]>0)
                {
                    return <div>
                          
                        <div className="cartitems-format cartitems-format-main">
                            <img src={e.image} alt="" className="cartion-product-icon "/>
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className="cartitems-quantity">{cartItems[e.id]}</button>
                            <p>${e.new_price*cartItems[e.id]}</p>
                            <img className="cartitems-remove-icon" src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt=""/>
                        </div>
                        <hr/>
                 
                    </div>
                      
                    
                }
                return null; // Return null for items not meeting the condition
            })}

            <div className="cartTotal">  
                <h1>Cart Total</h1>
                <div className="total-show">
                    <div>Subtotal</div>
                    <div>${getTotalCartAmount()}</div>
                </div>
                <hr/>
                <div className="total-show">
                    <div>Shipping Fee</div>
                    <div>Free</div>
                </div>
                <hr/>
                <div className="total-show total">
                    <div>Total</div>
                    <div>${getTotalCartAmount()}</div>
                </div>
                <hr/>
            </div>
        


        </div>
    );
}

export default CartItems;