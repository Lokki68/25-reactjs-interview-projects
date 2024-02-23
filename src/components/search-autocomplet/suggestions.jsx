
export default function Suggestions({users, onClick}) {
  return (
    <ul>
      {
        users && users.length > 0
          ? users.map((user, index) => <li onClick={onClick} key={index}>{user}</li>)
          : null
      }
    </ul>
  )
}
