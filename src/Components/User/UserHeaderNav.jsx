import { useContext, useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import { ReactComponent as MinhasFotos } from '../../Assets/feed.svg'
import { ReactComponent as Estatisticas } from '../../Assets/estatisticas.svg'
import { ReactComponent as AdicionarFoto } from '../../Assets/adicionar.svg'
import { ReactComponent as Sair } from '../../Assets/sair.svg'
import styles from './UserHeaderNav.module.css'
import useMedia from '../../Hooks/useMedia'

const UserHeaderNav = () => {
  const isMobile = useMedia('(max-width: 40rem)')
  const [isMobileMenuActive, setIsMobileMenuActive] = useState()
  const { userLogout } = useContext(UserContext)

  const { pathname } = useLocation()
  useEffect(() => {
    setIsMobileMenuActive(false)
  }, [pathname])

  return (
    <>
      {isMobile && (
        <button
          aria-label="Menu"
          onClick={() =>
            setIsMobileMenuActive((isMobileMenuActive) => !isMobileMenuActive)
          }
          className={`${styles.mobileButton} ${
            isMobileMenuActive && styles.mobileButtonActive
          }`}
        ></button>
      )}
      <nav
        className={`${isMobile ? styles.navMobile : styles.nav} ${
          isMobileMenuActive && styles.navMobileActive
        }`}
      >
        <NavLink to={'/conta'} end>
          <MinhasFotos />
          {isMobile && 'Minhas Fotos'}
        </NavLink>
        <NavLink to={'/conta/stats'}>
          <Estatisticas />
          {isMobile && 'Estatísticas'}
        </NavLink>
        <NavLink to={'/conta/postar'}>
          <AdicionarFoto />
          {isMobile && 'Adicionar Foto'}
        </NavLink>
        <button onClick={userLogout}>
          <Sair />
          {isMobile && 'Sair'}
        </button>
      </nav>
    </>
  )
}

export default UserHeaderNav
