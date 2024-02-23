import { useState } from 'react'
import styles from './styles.module.css'
import { useEffect } from 'react'
import Suggestions from './suggestions'

export default function SearchAutocomplete() {
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [users, setUsers] = useState([])
  const [searchParams, setSearchParams] = useState('')
  const [showDropDown, setShowDropDown] = useState(false)
  const [filteredUser, setFilteredUser] = useState([])
  const [selectedUser, setSelectedUser] = useState('')

  const fetchListOfUsers = async () => {
    try {
      setLoading(true)

      const response = await fetch('https://dummyjson.com/users')
      const data = await response.json()

      if(data && data.users && data.users.length > 0) {
        setUsers(data.users.map(user => user.firstName))
        setLoading(false)
        setErrorMsg('')
      }
    } catch (error) {
      setLoading(false)
      setErrorMsg(error.message)
    }
  } 

  useEffect(() => {
    fetchListOfUsers()
  }, [])

  if(loading) {
    return <div>Loading...</div>
  }

  if(errorMsg) {
    return <div>{errorMsg}</div>
  }

  const handleChange = (e) => {
    setSelectedUser('')
    const query = e.target.value.toLowerCase()
    setSearchParams(query)

    if(query.length > 1) {
      const filteredData = users && users.length 
      ? users.filter(user => user.toLowerCase().includes(query))
      : []

      setFilteredUser(filteredData)
      setShowDropDown(true)
    }
  }

  const handleSelectUser = (e) => {
    setSelectedUser(e.target.innerText)
    setShowDropDown(false)
    setSearchParams('')
  }

  return (
    <div className={styles.container} >
      <input 
        type="text" 
        name="search-user" 
        id="search-user" 
        placeholder='Search Users here ...' 
        value={searchParams} 
        onChange={handleChange}
      />
      {
        showDropDown
        ? <Suggestions users={filteredUser} onClick={handleSelectUser} />
        : null
      }
      {
        selectedUser
        ? <p>user selected: {selectedUser}</p>
        : null
      }
    </div>
  )
}
