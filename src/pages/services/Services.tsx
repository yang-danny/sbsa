import SimpleImageSlider from "react-simple-image-slider";
import styles from './Services.module.scss'
import citizenAdvocate from '../../assets/citizen-advocacy.jpg'
import individualAdvocacy from '../../assets/individual-advocacy.jpg'
import ndis from '../../assets/ndis.jpeg'
import disablityRoyalCommission from '../../assets/Disability-Royal-Commission.jpg'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const images = [
  { url: citizenAdvocate },
  { url: individualAdvocacy },
  { url: ndis },
  { url: disablityRoyalCommission },

];
const Services = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 800;
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
  const navigate= useNavigate()
  const goToServicesBox=()=>{
navigate('/services')
  }
  return (
    <section>
<h3>How can we assist you to live your life to the fullest?</h3>
<div className={styles.slider}>
  {width < breakpoint ? (<SimpleImageSlider
        width={500}
        height={350}
        images={images}
        showBullets={true}
        showNavs={true}
        loop={true}
        autoPlay={true}
        autoPlayDelay={3}
        slideDuration={1}
      />) : (<SimpleImageSlider
        width={1000}
        height={500}
        images={images}
        showBullets={true}
        showNavs={true}
        loop={true}
        autoPlay={true}
        autoPlayDelay={3}
        slideDuration={1}
      />)}
      </div>
      <button onClick={goToServicesBox}>Explore Services We Can Provide... </button>
    </section>
  )
}

export default Services