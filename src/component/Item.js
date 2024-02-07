import React, { useContext } from "react";
import './Item.css'
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";



const Item = (props) => {
   
    const {addToCart} = useContext(ShopContext);

    return(
        <div className="item-container"> 
           <Link to={`/product/${props.id}`}> <img onClick={window.scrollTo(0,0)} src={props.image} alt=""/></Link>
            <p>{props.name}</p>
            <button className='item-btn' onClick={()=>{addToCart(props.id)}}><ion-icon style={{ color:'white',fontSize:'22px' }} name="cart"></ion-icon></button>
            <div className="item-price">
           
                <div className="item-price-new">${props.new_price}</div>
                <div className="item-price-old">${props.old_price}</div>
            </div>
        </div>
    );
}

export default Item;