import Dropdown from "./Dropdown";
import UserDetail from "./UserDetail";
import {useState} from "react"

function UserDisplay() {


  const [selectedUser, setSelectedUser] = useState()

  const handleSelection = (e) => {
    setSelectedUser(e.target.value)
  }

  return ( 
    <>
      <Dropdown handleSelection={handleSelection} selectedUser={selectedUser}/>
      {selectedUser && <UserDetail selectedUser={selectedUser}/>}
    </>
   );
}

export default UserDisplay;