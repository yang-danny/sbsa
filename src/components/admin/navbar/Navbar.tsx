import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.scss";
import {AiOutlineUser, AiOutlineLogout,AiOutlineFileAdd,AiOutlineSolution } from "react-icons/ai";

const activeLink = ({ isActive }:any) => (isActive ? `${styles.active}` : "");
type Props={
    userEmail: string;
}
const Navbar = ({userEmail}:Props) => {
    const navigate = useNavigate();
    const userName= userEmail.replace(/"/g,'').substring(0, userEmail.indexOf('@')-1);
    const logout =()=>{
    localStorage.clear();
    navigate('/login') 
  }
  return (
    <div className={styles.navbar}>
      <div className={styles.user}>
        <AiOutlineUser size={40} color="#fff" />
        <h4>Welcome, {userName}</h4>
        <NavLink to="/login" onClick={logout} className={styles.logout}> 
        <AiOutlineLogout size={35} color="#fff"/>
        </NavLink>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/admin/addNews" className={activeLink}>
             <AiOutlineFileAdd size={25} /> Add News
            </NavLink>
            </li>
            <li>
            <NavLink to="/admin/publishedNews" className={activeLink}>
             <AiOutlineSolution size={25}  /> Published News
            </NavLink>   
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar