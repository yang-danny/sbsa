import {  Link } from 'react-router-dom';
import styles from './ServiceBox.module.scss'
import citizenAdvocate from '../../assets/citizen-advocacy.jpg'
import individualAdvocacy from '../../assets/individual-advocacy.jpg'
import ndis from '../../assets/ndis.jpeg'
import disablityRoyalCommission from '../../assets/Disability-Royal-Commission.jpg'
import { motion } from "framer-motion";
import useLocalStorage from 'use-local-storage';

const ServiceBox = () => {
  const defaultTheme = window.matchMedia('(prefers-color-scheme: high)').matches;
  const theme = useLocalStorage('theme', defaultTheme ? 'high' : 'normal');
  return (
    <section data-theme={theme} >
         <h3> We do this through advocacy</h3>
        <p>Advocacy is being ‘side by side’ with someone when they are facing challenging situations, dealing with uncertainty or being treated unfairly.

Side By Side Advocacy may help with:</p>

  <div data-theme={theme} className={styles.grid}>
  <motion.div  data-theme={theme} className={styles.gridItem} initial='hidden'
              whileInView='visible'
              viewport={{once:true,amount:0.5}}
              transition={{duration:1}}
              variants={{hidden: {opacity:0, x:-50}, visible: {opacity:1, x:0}}}>
  <Link to={'/citizenAdvocacy'}>
    <div className={styles.img}>
      <img src={citizenAdvocate} alt='Citizen Advocacy' />
    </div>
  </Link>
    <h5>Citizen Advocacy</h5>  
  <p className={styles.desc}>Citizen Advocacy promotes and protects the rights, needs and interests of
people with intellectual disability by connecting them in one-to-one, freely
given relationships with local citizens.</p>                 
  <a href={'/citizenAdvocacy'}> Read More...</a>                     
  </motion.div>
  <motion.div  className={styles.gridItem} initial='hidden'
              whileInView='visible'
              viewport={{once:true,amount:0.5}}
              transition={{duration:1}}
              variants={{hidden: {opacity:0, x:50}, visible: {opacity:1, x:0}}}>
  <Link to={'/individualAdvocacy'}>
    <div className={styles.img}>
      <img src={individualAdvocacy} alt='IndividualAdvocacy' />
    </div>
  </Link>
    <h5>Individual Advocacy</h5>  
  <p className={styles.desc}>An Individual Advocate can help you take action if you think something is
unfair or someone is treating you badly and you would like to change this.</p>                 
  <a href={'/individualAdvocacy'}> Read More...</a>                     
  </motion.div>
  <motion.div  className={styles.gridItem} initial='hidden'
              whileInView='visible'
              viewport={{once:true,amount:0.5}}
              transition={{duration:1}}
              variants={{hidden: {opacity:0, x:-50}, visible: {opacity:1, x:0}}}>
  <Link to={'/ndis'}>
    <div className={styles.img}>
      <img src={ndis} alt='NDIS' />
    </div>
  </Link>
    <h5>National Disability Insurance Scheme (NDIS) Appeals</h5>  
  <p className={styles.desc}>The National Disability Insurance Scheme (NDIS) provides funding for eligible
people with disability so they can access support. The National Disability
Insurance Agency (NDIA) runs the NDIS.</p>                 
  <a href={'/ndis'}> Read More...</a>                     
  </motion.div>
  <motion.div  className={styles.gridItem} initial='hidden'
              whileInView='visible'
              viewport={{once:true,amount:0.5}}
              transition={{duration:1}}
              variants={{hidden: {opacity:0, x:50}, visible: {opacity:1, x:0}}}>
  <Link to={'/disablityRoyalCommission'}>
    <div className={styles.img}>
      <img src={disablityRoyalCommission} alt='DisabilityRoyalCommission' />
    </div>
  </Link>
    <h5>Disability Royal Commission</h5>  
  <p className={styles.desc}>The Disability Royal Commission wants to hear from people with disability
about their experiences and about how things can be improved. These stories
can be about things that happened recently or a long time ago. </p>                 
  <a href={'/disablityRoyalCommission'}> Read More...</a>                     
  </motion.div>
  </div>
  
    </section>
 
  )
}

export default ServiceBox