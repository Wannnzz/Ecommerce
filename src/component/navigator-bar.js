import { Link } from 'react-router-dom';
import './web-page.css';
import {useState,useEffect} from "react";

const NavigatorBar = () => {
// ---------------click menu
  const [menu,setMenu] = useState("home");


     // ---------------scrolled
  const [scrolled,setScrolled] = useState(false);
  useEffect(()=>{
    const handleScroll = () =>{
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled)
    };

    window.addEventListener('scroll',handleScroll);

    return () =>{
      window.removeEventListener('scroll',handleScroll);
    };
  },[]);


    return(
       <>
        <div className={`navigation-container ${scrolled ? 'scrolled' :''}`}>
        <div className="container-nav-bar">
            <div className="logo">
                  <a href="/">LOGO</a>
            </div>

            <ul className="navigation">
              <li onClick={() => {setMenu("home")}} >
                <Link to='/' style={{ fontWeight: 'bold', textDecoration:'none',color:'black' }}>HOME</Link>{menu === "home" ? <div/>:<></>}
                </li>
              <li onClick={() => {setMenu("women")}}>
              <Link to='/women' style={{ textDecoration:'none',color:'black' }}>WOMEN <span className="down-outline"><ion-icon  name="chevron-down-outline" ></ion-icon></span></Link>{menu === "women" ? <div/>:<></>} 
                </li>
              <li onClick={() => {setMenu("men")}}>
              <Link to='/men' style={{ textDecoration:'none',color:'black' }}> MEN <span className="down-outline"><ion-icon  name="chevron-down-outline" ></ion-icon></span> </Link>{menu === "men" ? <div/>:<></>}
                </li>
              <li onClick={() => {setMenu("kid")}}>
              <Link to='/kid' style={{ textDecoration:'none',color:'black' }}>KID <span className="down-outline"><ion-icon  name="chevron-down-outline" ></ion-icon></span></Link>{menu === "kid" ? <div/>:<></>} 
                </li>

              <li>
                <Link to='/cart' style={{ textDecoration:'none',color:'black' }}><span className="cart"><ion-icon name="cart"></ion-icon></span></Link>
                </li>
              <li >
                <Link to='/login'style={{ textDecoration:'none' ,color:'black'}}><span className="log-in">Log in  <ion-icon name="person-sharp"></ion-icon></span></Link>
                </li>
       
            </ul>
    </div>

    </div>
       </>
    );

}

export default NavigatorBar;