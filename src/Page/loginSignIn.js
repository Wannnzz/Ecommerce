import React from "react";
import { useState } from "react";
import { useNavigate} from "react-router-dom";
import './CSS/login.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'




const LogIn = () => {
   const [inputs,setInputs] = useState({});
   const MySwal = withReactContent(Swal);
   const Navigate = useNavigate();

   const inputText =(e) =>{
      const name = e.target.name;
      const value = e.target.value;
      setInputs ((prev) => ({...prev, [name]:value})) //email:inputs,password:inputs

   }

   const onSubmit = (e) => {
      e.preventDefault();//protect web refresh

      //Fetch to Postman
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      
      var raw = JSON.stringify({
        "username": inputs.username,
        "password": inputs.password,
        "expiresIn": 60000
      });
      
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
      fetch("https://www.melivecode.com/api/login", requestOptions)
        .then(response => response.json())
        .then(result => {
         console.log(result)
         
         //alert when login
         if (result.status === 'ok'){
            MySwal.fire({
               title: <i>{result.message}</i>,
               icon: "success"
             }).then((value) =>{
               localStorage.setItem('token',result.accessToken)
               Navigate('/profile')
             })
         }else{
            MySwal.fire({
               title: <i>{result.message}</i>,
               icon: "error"
             });
         }
      
      
      })
        .catch(error => console.log('error', error));
      console.log(inputs);

   }



    return(
     <div className="login">
       <form onSubmit={onSubmit}>
       <div className="login-container">
            
            <div className="login-wrapper">
                  <div className="sign">Sign Up</div>
  
                 {/* <input type="text" id="InputName"  placeholder="Your Name"></input> */}

                 <input type="text"
                  id="InputEmail"  
                  placeholder="Email Address" 
                  name ="username"
                  value={inputs.email}
                  onChange={inputText}
                  >

                 </input>

                 <input type="password" 
                 id="InputPassword"  
                 placeholder="Password"
                 name ="password"
                 value={inputs.pass}
                 onChange={inputText}>
                  

                 </input>
 
                 <button type="submit">Continue</button>
 
                 <div >
                     Already have an account? 
                     <span>Login here</span>
                  </div>    
                
                 <div  className="checkbox"><input type="checkbox" value="value1"></input>
                 By continueing, I agree to the tearms of use & privacy policy.</div>
                
      
            </div>
         </div>
         </form> 
       
     </div>
       
    );
}

export default LogIn;