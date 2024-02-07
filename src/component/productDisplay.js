import React, { useContext } from "react";
import './productDisplay.css'
import star_icon from "./Assets/star_icon.png";
import star_dull_icon from "./Assets/star_dull_icon.png";
import { ShopContext } from "../Context/ShopContext";


const ProductDisplay =(props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
    return(
        <div className="productDisplay ">
            <div className="productdisplay-left">
                <div className="list-img">
                    <img src={product.image} alt=""/>
                    <img src={product.image} alt=""/>
                    <img src={product.image} alt=""/>
                    <img src={product.image} alt=""/>
                </div>

                <div className="productdisplay-img">
                    <img className="main-img" src={product.image} alt=""/>
                </div>

            </div>

            <div className="productdisplay-right"> 
               <h1>{product.name}</h1>
                 <div className="productdisplay-right-star">
                    <img src={star_icon} alt=""/>
                    <img src={star_icon} alt=""/>
                    <img src={star_icon} alt=""/>
                    <img src={star_icon} alt=""/>
                    <img src={star_dull_icon} alt=""/>
                    <p>(122)</p>
                    
                 </div>
                 
                 <div className="productdisplay-right-price" >
                    <div className="productdisplay-right-price-old">${product.old_price}</div>
                    <div className="productdisplay-right-price-new">${product.new_price}</div>
                 </div>

                 <div className="productdisplay-right-descript">
                 Lore ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                 </div>

                 <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXl</div>
                    </div>
                 </div>

                 <button onClick={() => {addToCart(product.id)}}>ADD TO CART</button>
                 <p className="productdisplay-right-category"><span>Cataegory: </span> {product.category} , T-Shirt , Crop Top</p>
                 <p className="productdisplay-right-category"><span>Tags: </span>Modern , Lastest</p>

            </div>

        </div>
    );
}

export default ProductDisplay