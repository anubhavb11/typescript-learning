// usestate is built in typescript when we setstate intially it take that as an defauft type 

import React, { useState } from 'react'

export default function LoggedIn() {
    // here it take isLogged in as n noolean type now in code we cant use it as anything else 
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const changeStatte = () =>{
    setIsLoggedIn((prv)=>
    !prv
    )
  }
  return (
    <div onClick= {changeStatte} > {isLoggedIn ? "Loggin" : "not loog innn"} </div>
  )
}
