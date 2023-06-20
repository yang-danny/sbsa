import styles from './Support.module.scss'
import ndis from '../../assets/NDIS-logo.png'
import disability from '../../assets/disability.png'
import business from '../../assets/business.png'
import joinus from '../../assets/joinus.png'
import { motion } from "framer-motion";
import useLocalStorage from 'use-local-storage'
const Support = () => {
  const defaultTheme = window.matchMedia('(prefers-color-scheme: high)').matches;
  const theme = useLocalStorage('theme', defaultTheme ? 'high' : 'normal');
  return (
    <section data-theme={theme}>
<motion.div className={styles.support}
initial='hidden'
whileInView='visible'
viewport={{once:true,amount:0.5}}
transition={{duration:1}}
variants={{hidden: {opacity:0, x:50}, visible: {opacity:1, x:0}}}>
    <div className={styles.top}>
<h4>We're putting you first.</h4>
<p>Supporting you to live the life you want.</p>
    </div>
    <div className={styles.bottom}>
<div className={styles.ndis}>
<img src={ndis} alt="NDIS" />
<a href="/ndis">About the NDIS</a>
<p>At SBSA, we're here for the new world of disability support -- the NDIS.</p>
</div>
<div className={styles.disability}>
<img src={disability} alt="" />
<a href="/disablityRoyalCommission">Disability Services</a>
<p>SBSA is the Disability Royal Commission service provider who puts You. First. </p>
</div>
<div className={styles.business}>
<img src={business} alt="" />
<a href="/about">Our Business</a>
<p>Choose a SBSA service and find out just how great we can be. </p>
</div>
<div className={styles.joinus}>
<img src={joinus} alt="" />
<a href="/contact">Join Our Team</a>
<p>Get Involved! Enquiring about becoming an advocate, associate or crisis advocate. </p>
</div>
    </div>
</motion.div>
    </section>
  )
}

export default Support