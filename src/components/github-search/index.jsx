
import { useState } from 'react'
import styles from './styles.module.css'
import { useEffect } from 'react'
import User from './user'

const GithubSearch = () => {
  const [username, setUsername] = useState('Lokki68')
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchGithubUserData = async () => {
    setLoading(true)

    const res = await fetch(`https://api.github.com/users/${username}`)
    const data = await res.json()
    

    if (data){
      setUserData(data)
      setLoading(false)
      setUsername('')
    }
  }

  const handleSubmit = () => {
    fetchGithubUserData()
    setUsername('')
  }
  

  if (loading) {
    return <div>loading...</div>
  }
  

  return (
    <div className={styles.container} >
      <div className={styles.inputWrapper} >
        <input 
          type="text" 
          name="search-by-username" 
          id="search-by-username" 
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder='Search Github Username' 
          />
          <button
            onClick={handleSubmit}
          >Search</button>
      </div>

      {
        userData
          ? <User user={userData} />
          : null
      }
    </div>
  )
}

export default GithubSearch
