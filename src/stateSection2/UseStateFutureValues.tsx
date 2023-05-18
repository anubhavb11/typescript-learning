import React, { useState } from 'react'
type User = {
    name: string,
    email: string
}

export default function UseStateFutureValues() {
 // if value is coming on some event we can set 2 types for that hook 
  const [user, setUser] = useState<null |User>(null);

  const handleClick = () => {
    setUser(
        {
            name: "ANubhva",
            email: "anubhavb@gmail.com"
        }
    )
  }

  return (
    <div onClick={handleClick} >UseStateFutureValues {user?.email} {user?.name}</div>
  )
}
