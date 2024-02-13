import React from 'react'
import { useState } from 'react';
import './CSS/login.css'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useNavigate} from "react-router-dom";

const Register = () => {
    const [inputs,setInputs] = useState ({});
    const MySwal = withReactContent(Swal);
    const Navigate = useNavigate();

    const inputText = (e) => {
        const name = e.target.name
        const value = e.target.value
        setInputs((prev)=>({...prev, [name]:value}))

    }

    const onSubmit = (e) =>{
        e.preventDefault();
        console.log(inputs);
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
          "fname": inputs.fname,
          "lname": inputs.lname,
          "username": inputs.username,
          "password": inputs.password,
          "email": inputs.email,
          "avatar": inputs.avatar
        });
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("https://www.melivecode.com/api/users/create", requestOptions)
          .then(response => response.json())
          .then(result => {
            if(result.status === 'ok'){
                 MySwal.fire({
               title: <i>{result.message}</i>,
               icon: "success"
             }).then((value) =>{
               Navigate('/login')
             
             })
             }else{
            MySwal.fire({
               title: <i>Try again</i>,
               icon: "error"
             });
            }
            })
          .catch(error => console.log('error', error));
        
    }


  return ( 
  <div className="login">
  <form onSubmit={onSubmit}>
  <div className="register-container">
       
       <div className="register-wrapper">
             <div className="sign">Sign Up</div>

            
            <input type="text"
             id="InputFirst"  
             placeholder="First Name" 
             name ="fname"
             value={inputs.fname}
             onChange={inputText}
             >

            </input>

            <input type="text" 
            id="InputLast"  
            placeholder="Last Name"
            name ="lname"
            value={inputs.lname}
            onChange={inputText}
            >
             
            </input>

            <input type="text"
             id="UserName"  
             placeholder="User Name" 
             name ="username"
             value={inputs.username}
             onChange={inputText}
             >

            </input>

            <input type="text"
             id="InputPassword"  
             placeholder="Password" 
             name ="password"
             value={inputs.password}
             onChange={inputText}
             >

            </input>

            <input type="text"
             id="InputEmail"  
             placeholder="Email Address" 
             name ="email"
             value={inputs.email}
             onChange={inputText}
             >

            </input>

            <input type="text"
             id="InputAvatar"  
             placeholder="Avater" 
             name ="avatar"
             value={inputs.avatar}
             onChange={inputText}
             >

            </input>

            <button type="submit">Continue</button>

          
 
       </div>
    </div>
    </form> 
  
</div>
  
);
}

export default Register