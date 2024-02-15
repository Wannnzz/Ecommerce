import React from "react";
import './footer.css'
import shop from './Assets/logo_big.png'

const Footer = () =>{
    return(
        <div className="footer-container">
            <div className="footer-one">
                <div className="footer">
                    <div>Return policy</div>
                    <div>Search our store</div>
                    <div>Blog</div>
                    <div>Contact us</div>
                    <div>About us</div>

                </div>

                <div className="footer">
                    <div><ion-icon name="logo-facebook"></ion-icon>    Facebook</div>
                    <div><ion-icon name="logo-twitter"></ion-icon> Twitter</div>
                    <div><ion-icon name="logo-instagram"></ion-icon> Instagram</div>
                    <div><ion-icon name="logo-youtube"></ion-icon> Youtube</div>
                    <div><ion-icon name="logo-google"></ion-icon> Google+</div>

                </div>

                <div>
                    <div>Powered my Mobrise</div>
                   

                </div>

            </div>

            <div className="footer-two">
                <img src={shop} alt=""/>
                <div>2024 All Right Reserved Terms of Use and Privacy Policy</div>
                <div className="contact-flex">
                    <div className="icon"><ion-icon  name="logo-facebook"></ion-icon> </div>
                    <div className="icon" ><ion-icon name="logo-twitter"></ion-icon> </div>
                    <div className="icon" ><ion-icon  name="logo-linkedin"></ion-icon></div>
                    <div className="icon" > <ion-icon  name="wifi-outline"></ion-icon></div>

                </div>
            </div>
            
        </div>
    );
}

export default Footer;