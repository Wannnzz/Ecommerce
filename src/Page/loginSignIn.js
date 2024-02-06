import React from "react";
import './CSS/login.css'


const LogIn = () => {
    return(
     <div className="login">
        
        <div className="login-container">
            
           <div className="login-wrapper">
                 <div className="sign">Sign Up</div>
 
                <input type="text" id="InputName"  placeholder="Your Name"></input>
                <input type="text" id="InputEmail"  placeholder="Email Address"></input>
                <input type="password" id="InputPassword"  placeholder="Password"></input>

                <button>Continue</button>

                <div >
                    Already have an account? 
                    <span>Login here</span>
                 </div>    
               
                <div  className="checkbox"><input type="checkbox" value="value1"></input>
                By continueing, I agree to the tearms of use & privacy policy.</div>
               
     
           </div>
        </div>
     </div>
       
    );
}

export default LogIn;