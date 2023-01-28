import {useEffect, useState} from 'react'

const Dropdown = ({handleSelection, selectedUser}) => {

  const [users, setUsers] = useState([])


  useEffect( () => {
    async function getUsers() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users")
      const body = await res.json()
      setUsers(body)
    }
    getUsers()
  }, [])

  const createOptions = () => {
    return users.map( u => <option key={u.id} value={u.id}>{u.name}</option>)
  }


  return(
    <>
      <h2>dropdown</h2>
      <label>Select Users
        <select value={selectedUser} onChange={handleSelection}>
        <option key="asdf" value={0}></option>
          {createOptions()}
        </select>
      </label>
      
    </>
  )
}

export default Dropdown