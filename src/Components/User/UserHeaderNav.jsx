import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { UserContext } from '../../UserContext';
import Feed from '../../Assets/Feed.jsx'
import Adicionar from '../../Assets/Adicionar.jsx'
import Sair from '../../Assets/Sair.jsx'
import Estatisticas from '../../Assets/Estatisticas.jsx'
import styles from './UserHeaderNav.module.css'
import { useNavigate } from 'react-router-dom';
import useMedia from '../../Hooks/useMedia.jsx';

const UserHeaderNav = () => {

    const navigate = useNavigate();
    const {userLogout} = React.useContext(UserContext);
    const [mobileMenu, setMobileMenu] = React.useState(false)

    const mobile = useMedia('(max-width: 40rem)')
    
    const {pathname} = useLocation();
    React.useEffect(() => {
      setMobileMenu(false)
    },[pathname])

    function handleLogout(){
      userLogout();
      navigate('/login')
    }

  return (<>
    {mobile && <button 
    aria-label='Menu' 
    onClick={() => 
    setMobileMenu(!mobileMenu)}
    className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}
    ></button>}
    <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
      <NavLink to="/conta" end ><Feed/>{mobile && 'Minhas fotos'}</NavLink>
      <NavLink to="/conta/estatisticas"><Estatisticas/>{mobile && 'Estatisticas'}</NavLink>
      <NavLink to="/conta/postar"><Adicionar/>{mobile && 'Adicionar Fotos'}</NavLink>
      <button onClick={handleLogout}><Sair/>{mobile && 'Sair'}</button>
    </nav>
    </>
  )
}

export default UserHeaderNav
