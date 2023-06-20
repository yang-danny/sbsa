import { useEffect, useState} from 'react'
import styles from './Header.module.scss'
import { Link, NavLink,} from 'react-router-dom'
import sbsaLogo from "../../assets/logo.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi"
import { BsZoomIn, BsZoomOut } from "react-icons/bs";
import useLocalStorage from 'use-local-storage';
import { ImContrast } from "react-icons/im";

declare global {
  interface Window {
    google?: any;
    googleTranslateElementInit:any;
    style:CSSStyleDeclaration;
  }
}
const Header = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false)
    const [scrollPage, setScrollPage] = useState<boolean>(false)  
    const googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false,
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };
    useEffect(() => {
      const addScript = document.createElement("script");
      addScript.setAttribute(
        "src",
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      );
      document.body.appendChild(addScript);
      window.googleTranslateElementInit = googleTranslateElementInit;
    }, []);
    const logo=(
        <div className={styles.logo}>
        <Link to='/'><img src={sbsaLogo} alt='Logo' /></Link>
        </div>
      )
      const toggleMenu = () => {
        setShowMenu(!showMenu);
      };
      const hideMenu = () => {
        setShowMenu(false);
      };
    const fixNavbar=()=>{
      if (window.scrollY>50) {
        setScrollPage(true);
      } else {
         setScrollPage(false)
      }
    }
    window.addEventListener("scroll", fixNavbar)
    const [fontSize, setFontSize] = useState<number>(16); 
    useEffect(() => {
    updateRootFontSize(`${fontSize}px`);
    }, [fontSize]);
    const updateRootFontSize = (fontSize: string): void => {
      document.documentElement.style.setProperty('--base-font-size', fontSize);
    };
    const handleIncrement = () => {
      if(fontSize>=20)
      setFontSize(20)
      else
      setFontSize(fontSize + 1);
    };
    const handleDecrement = () => {
      if (fontSize<=16)
      setFontSize(16)
      else
      setFontSize(fontSize - 1);
    };
    const defaultTheme = window.matchMedia('(prefers-color-scheme: high)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultTheme ? 'high' : 'normal');

    const switchTheme = () => {
      const newTheme = theme === 'normal' ? 'high' : 'normal';
      setTheme(newTheme);
    }
  return (
    <header className={scrollPage? `${styles.fixed}`: ''}>
      <div data-theme={theme} className={styles.header}>
{logo}
<nav  className={
              showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`
            }>
              <div className={
                showMenu
                  ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}`
                  : `${styles["nav-wrapper"]}`
              }
           onClick={hideMenu}
            >
</div>     
  <ul onClick={hideMenu}>  
  <li><NavLink to="/" > Home </NavLink></li>
  <li><NavLink to="/services" >  Services </NavLink></li>
  <li><NavLink to="/event" >  News & Events</NavLink></li>
  <li><NavLink to="/about" >  About Us</NavLink></li>
  <li><NavLink to="/contact" >  Contact Us</NavLink></li>
  </ul>
   <div className={styles['header-right']} onClick={hideMenu}>
                  <Link to="/admin"><button >Admin</button></Link>
                  <Link to="/donate"><button >Donate Now</button></Link>
                  <div id="google_translate_element" className={styles.googleTranslate}></div>
                  <div className={styles.fontDiv}>
                  <button className={styles.fontChange}
                  onClick={handleDecrement}><BsZoomOut size={20} /></button>
                  <input
                  type="range"
                  min="16"
                  max="20"
                  value={fontSize}
                  onChange={(e) => setFontSize(Number(e.target.value))}
                  />
      <button className={styles.fontChange}
      onClick={handleIncrement}>
        <BsZoomIn size={25}/></button>
        <button onClick={switchTheme}>
        <ImContrast /> High Contrast
      </button>
        </div>
  </div>
</nav>
<div className={styles["menu-icon"]}>
            <HiOutlineMenuAlt3 size={28} onClick={toggleMenu} />
          </div>
      </div>
    </header>
  )
}

export default Header