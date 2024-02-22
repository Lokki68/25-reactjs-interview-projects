import styles from './userStyles.module.css'

export default function User({user}) {
  const {
    avatar_url, 
    login,
    name,
    followers,
    following,
    public_repos,
    html_url,
    created_at
  } = user

  const createdDate = new Date(created_at).toLocaleString('fr-FR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  })

  return (
    <div className={styles.user} >
      <div>
        <img src={avatar_url} className={styles.avatar} alt={login} />
      </div>
      <div className={styles.nameContainer} >
        <a 
        href={html_url} 
        target='_blank' 
        rel='noreferrer' 
        >
          {name || login}
        </a>
        <p>
          User joined on {createdDate}
        </p>
      </div>
      <div className={styles.profilInfos} >
        <div>
          <p>Public Repos : <span>{public_repos}</span></p>
        </div>
        <div>
          <p>Followers : <span>{followers}</span></p>
        </div>
        <div>
          <p>Following : <span>{following}</span></p>
        </div>
      </div>

    </div>
  )
}
