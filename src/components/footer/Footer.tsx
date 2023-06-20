import styles from './Footer.module.scss'
import acnc from '../../assets/acnc.png'
import drc from '../../assets/DRC.png'
import ndis from '../../assets/ndis.png'
import { NavLink } from 'react-router-dom'
import { MdOutlineFacebook } from "react-icons/md";
import { AiFillYoutube,AiFillInstagram,AiFillTwitterCircle } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import useLocalStorage from 'use-local-storage'

const Footer = () => {
  const defaultTheme = window.matchMedia('(prefers-color-scheme: high)').matches;
  const theme = useLocalStorage('theme', defaultTheme ? 'high' : 'normal');

  return (
<footer data-theme={theme}>
<div  className={styles.footer}>
  <div className={styles.footerTop}>
<div className={styles.logos}>
<img src={acnc} alt="ACNC" />
<img src={drc} alt="Disability Royal Commission" />
<img src={ndis} alt="NDIS" />
</div>
<div className={styles.quickLinks}>
<h4>Quick Links</h4>
<ul>  
  <li><NavLink to="/" > Home </NavLink></li>
  <li><NavLink to="/services" >  Services </NavLink></li>
  <li><NavLink to="/event" >  News & Events</NavLink></li>
  <li><NavLink to="/about" >  About Us</NavLink></li>
  <li><NavLink to="/contact" >  Contact Us</NavLink></li>
  </ul>
  <div className={styles.social}>
    <div className={styles.socialIcon}>
  <a href="https://www.facebook.com/sidebyside.advocacy" > <MdOutlineFacebook size={40}/></a>
  </div>
  <div className={styles.socialIcon}>
  <a href="https://www.youtube.com/@SideBySideAdvocacy/about" > <AiFillYoutube size={40}/></a>
  </div>
  <div className={styles.socialIcon}>
  <a href="" > <AiFillInstagram size={40}/></a>
  </div>
  <div className={styles.socialIcon}>
  <a href="" > <AiFillTwitterCircle size={40}/></a>
  </div>
  </div>
</div>
<div className={styles.newsLetter}>
			<h4 >Stay in the loop</h4>	
      <p>Subscribe to our newsletter and stay up-to-date with the latest news on Side By Side Advocacy’s work.</p>						
	<form >
								<input  type="text" name="" id=""  placeholder="Enter your name" required aria-required="true" />
								<input  type="email" name="" id="" placeholder="Email Address" required aria-required="true" />
                <button type="submit" ><FiSend size={20}/>Subscribe	</button>
	</form>
  </div>
  </div>
</div>
<div className={styles.footerBottom}> Copyright © 2023 Side By Side Advocacy(ABN: 83 395 894 577) - All Rights Reserved</div>
   </footer>
  )
}

export default Footer