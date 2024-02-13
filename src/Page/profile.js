import React from 'react'
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const Profile = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  useEffect(() => {
    const token = localStorage.getItem('token')
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

  var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://www.melivecode.com/api/auth/user", requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result)
    if (result.status === 'ok' ){
      setUser(result.user)
      setIsLoaded(false)
    }else if(result.status === 'forbidden'){
      MySwal.fire({
        title: <i>{result.message}</i>,
        icon: "error"
      }).then((value) => {
        navigate('/login')
      })
    }
  })
  .catch(error => console.log('error', error));
  }, [])

  if (isLoaded) return (<div>Loading</div>)
  else{
    return (
      <div>
        <div>{user.id}</div>
        <div>{user.fname}</div>
        <div>{user.lname}</div>
        <div>{user.email}</div>
        <img src={user.avatar} alt={user.id} width={100} />
      </div>
    )

  }

}

export default Profile