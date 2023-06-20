import bannerImg from "../../assets/SBSA-banner.jpg"
import styles from "./Banner.module.scss";
import { motion } from "framer-motion";

const Banner = () => {
  return (
        <section className={styles.section}>
            <motion.div  initial='hidden'
              whileInView='visible'
              viewport={{once:true,amount:0.5}}
              transition={{duration:1}}
              variants={{hidden: {opacity:0, x:50}, visible: {opacity:1, x:0}}}>
            <img src={bannerImg} alt="banner img" />
             </motion.div>
        </section>
  )
}
export default Banner