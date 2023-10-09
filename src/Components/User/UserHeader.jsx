import UserHeaderNav from './UserHeaderNav'
import styles from './UserHeader.module.css'
import { useLocation } from 'react-router-dom'

const titleByLocation = (pathname) => {
  const location = pathname.split('/')[2]
  switch (location) {
    case 'stats':
      return 'Estatísticas'
    case 'postar':
      return 'Adicionar Foto'
    default:
      return 'Minhas Fotos'
  }
}

const UserHeader = () => {
  const location = useLocation()

  return (
    <header className={styles.header}>
      <h1 className="title">{titleByLocation(location.pathname)}</h1>
      <UserHeaderNav />
    </header>
  )
}

export default UserHeader
