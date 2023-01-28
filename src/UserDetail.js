import {useEffect, useState} from 'react'

function UserDetail({selectedUser}) {

  const [userDetails, setUserDetails] = useState()

  useEffect( () => {
    async function getUserDetail() {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${selectedUser}`)
      const body = await res.json()
      setUserDetails(body)
    }
    getUserDetail()
  }, [selectedUser])

  const createUserDetails = () => {

    return(
      <>
        <h3>{userDetails.name}</h3>
        <h3>{userDetails.email}</h3>
      </>
    )
  }


  return ( 
    <>
      <h2>User Detail</h2>
      {userDetails && createUserDetails()}
    </>
   );
}

export default UserDetail;