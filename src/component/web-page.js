
import './web-page.css';
import {useState} from "react";
import { Link } from 'react-router-dom';
// import elegantImage from '/images/Elegant.jpg';



const WebPage = () =>{


 // ---------------slide pictures
 const ImageSlider = () =>{
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images =[
    '/images/A1.jpg',
    '/images/A2.jpg',
    '/images/A3.jpg'
  ];

  const handleNextClick = () =>{
    setCurrentImageIndex((prevIndex) => (prevIndex +1) % images.length);
  };

  const handlePrevClick = () =>{
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  return(
    <div className='slider-container'>
      <button onClick={handlePrevClick}  className='prevBtn'> <ion-icon name="chevron-back-outline" style={{ color:'white',fontSize: '18px' }} ></ion-icon></button>
        <div className='accessories-container'>
        <img src={images[currentImageIndex]} alt="" className='slider-image' />
        
        </div>

       <button  onClick={handleNextClick} className='nextBtn'><ion-icon name="chevron-forward-outline" style={{ color:'white',fontSize: '18px' }} ></ion-icon></button>


    </div>

  );
 };

 

    return(
 // -------navigation bar-----------
  <div className="container">
    {/* <div className={`navigation-container ${scrolled ? 'scrolled' :''}`}>
        <div className="container-nav-bar">
            <div className="logo">
                  <a href="/">LOGO</a>
            </div>

            <div className="navigation">
              <a href="/" style={{ fontWeight: 'bold' }}>HOME</a>
              <a href="/">WOMEN <span className="down-outline"><ion-icon  name="chevron-down-outline" ></ion-icon></span></a>
              <a href="/">ACCESSORIES <span className="down-outline"><ion-icon  name="chevron-down-outline" ></ion-icon></span></a>
              <a href="/">SHOE <span className="down-outline"><ion-icon  name="chevron-down-outline" ></ion-icon></span></a>
              <a href="/"><span className="cart"><ion-icon name="cart"></ion-icon></span></a>
              <a href="/" ><span className="log-in">Log in  <ion-icon name="person-sharp"></ion-icon></span></a>
       
            </div>
    </div>

    </div> */}

    {/* ----------annouce--------------- */}
        <div className="container-annouce container-nav-bar">
        
             <img className="background-image" src="/images/Elegant.jpg" alt=""/>
             
            <div className="annouce-content">
            
                <p>New, Amazing Stuff Is Here</p>
                <div>Shop today and get  <span>20% discount</span></div>
                <Link to = '/women' ><button>Shop Now</button></Link>
             
            </div>
            <div className="imgbox">
              <img  src="/images/fashion.png" alt=""/>
            </div>
        </div>
   {/* ----------shipping context--------------- */}
        <div className="next-ship-container container-nav-bar">
          <div className="next-ship">
            <div className="icon-ship"><ion-icon name="car-outline"></ion-icon><span> NEXT DAY SHIPPING</span> </div>
           
            <p>Lorem ipsum dolor sit amet, consectetur elit. Nulla sem libero, dignissim sit amet consequa</p>

          </div>

          <div className="next-ship">
            <div className="icon-ship"><ion-icon name="repeat-outline"></ion-icon><span>FREE 20 DAY RETURNS</span> </div>
           
            <p>Lorem ipsum dolor sit amet, consectetur elit. Nulla sem libero, dignissim sit amet consequa</p>

          </div>
          <div className="next-ship">
            <div className="icon-ship"><ion-icon name="lock-closed-outline"></ion-icon><span>SECURE CHECKOUT</span> </div>
           
            <p>Lorem ipsum dolor sit amet, consectetur elit. Nulla sem libero, dignissim sit amet consequa</p>

          </div>

        </div>

   {/* ----------New arrival--------------- */}
   <div className='new-arrival-container-gird container-nav-bar'>
       <div className='new-arrival-name'>
          <div className='arrival-name'>New Arrival</div>
          <div>Minimal girl</div>
       </div>

       <div className='new-arrival-box'>
            <div className='new-arrival'>
                 <div className='image-container'>
                      <img src='/images/w1.jpg' className='image 'alt=""/>
                       <img src='/images/w1-2.jpg' className='second-image'alt=""/>
      
                   </div>
                       <div className='name-shirt'>Name shirt</div>
                       <div className='type'>Type</div>
                       <p>______________________________<button className='arrival-btn'><ion-icon style={{ color:'white' }} name="cart"></ion-icon></button></p>
                      <div className='price'>price</div>
            </div>

            <div className='new-arrival'>
                 <div className='image-container'>
                      <img src='/images/w2.jpg' className='image 'alt=""/>
                       <img src='/images/w2-2.jpg' className='second-image'alt=""/>
      
                   </div>
                       <div className='name-shirt'>Name shirt</div>
                       <div className='type'>Type</div>
                       <p>______________________________<button className='arrival-btn'><ion-icon style={{ color:'white' }} name="cart"></ion-icon></button></p>
                      <div className='price'>price</div>
            </div>

            <div className='new-arrival'>
                 <div className='image-container'>
                      <img src='/images/w3.jpg' className='image 'alt=""/>
                       <img src='/images/w3-2.jpg' className='second-image'alt=""/>
      
                   </div>
                       <div className='name-shirt'>Name shirt</div>
                       <div className='type'>Type</div>
                       <p>__________________________<button className='arrival-btn'><ion-icon style={{ color:'white' }} name="cart"></ion-icon></button></p>
                      <div className='price'>price</div>
            </div>

        </div>

   </div>
   {/* ----------Accessories--------------- */}
   
   <div className='accessory-container container-nav-bar'>

      <img src='/images/accessory.jpg' className='accessory-back ' alt=""/>
      <div className='accessory-box'>
      
        <div>This Season</div>
        <p>BE READY TO CHANCE</p>
        <button>Shop Accessorise</button>
          
     
      </div>
      {ImageSlider()}

      {/* <div className='slider-container'>
        <div className='slide-images'>
        <img src='/images/w3.jpg' className='slide-img' alt=""/>
        <img src='/images/w3-2.jpg' className='slide-imge'alt=""/>
        <img src='/images/w1-2.jpg' className='sslide-img'alt=""/>
        </div>

        <button className='preBtn'> <ion-icon name="chevron-back-outline"></ion-icon></button>
        <button className='nextBtn'><ion-icon name="chevron-forward-outline"></ion-icon></button>


    </div> */}

   </div>


     
        
  </div>

       
 );
}

export default WebPage; 