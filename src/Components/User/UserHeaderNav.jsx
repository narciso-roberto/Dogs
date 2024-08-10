import React from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../../UserContext';
import Feed from '../../Assets/Feed.jsx'
import Adicionar from '../../Assets/Adicionar.jsx'
import Sair from '../../Assets/Sair.jsx'
import Estatisticas from '../../Assets/Estatisticas.jsx'
import styles from './UserHeaderNav.module.css'
import { useNavigate } from 'react-router-dom';

const UserHeaderNav = () => {

    const navigate = useNavigate();
    const [mobile,setMobile] = React.useState(null);
    const {userLogout} = React.useContext(UserContext);

    function handleLogout(){
      userLogout();
      navigate('/login')
    }

  return (
    <nav className={styles.nav}>
      <NavLink to="/conta" end ><Feed/>{mobile && 'Minhas fotos'}</NavLink>
      <NavLink to="/conta/estatisticas"><Estatisticas/>{mobile && 'Estatisticas'}</NavLink>
      <NavLink to="/conta/postar"><Adicionar/>{mobile && 'Adicionar Fotos'}</NavLink>
      <button onClick={handleLogout}><Sair/>{mobile && 'Sair'}</button>
    </nav>
  )
}

export default UserHeaderNav
