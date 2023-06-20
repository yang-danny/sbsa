import styles from './About.module.scss'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.scss';
import vision from '../../assets/vision.png'
import purpose from '../../assets/purpose.png'
import value from '../../assets/values.png'
import board from '../../assets/board.png'
import staff from '../../assets/staff.png'
import staffphoto from '../../assets/staff-photo.jpg'
import { motion } from "framer-motion";
import useLocalStorage from 'use-local-storage';
const AboutUs = () => {
  const defaultTheme = window.matchMedia('(prefers-color-scheme: high)').matches;
  const theme= useLocalStorage('theme', defaultTheme ? 'high' : 'normal');

  return (
    <section data-theme={theme} >
      <h3>About Side By Side Advocacy</h3> 
      <p>Side By Side Advocacy has a particular focus and expertise in providing advocacy for people with intellectual disability.</p>
       <motion.div className={styles.video}
       initial='hidden'
       whileInView='visible'
       viewport={{once:true,amount:0.5}}
       transition={{duration:1}}
       variants={{hidden: {opacity:0, x:-50}, visible: {opacity:1, x:0}}}>
      <iframe width="800" height="400" src="https://www.youtube.com/embed/j7rpcnpH7-s">
      </iframe>
      <a href="https://www.youtube.com/@SideBySideAdvocacy/about">
      Side By Side Advocacy Youtube</a>
      </motion.div> 
      <p>Side By Side was founded in April 1990 in response to unmet fundamental needs of people with intellectual disability in the Ryde and Hunter’s Hill local government areas. We were originally known as Citizen Advocacy Ryde-Hunter’s Hill.</p>
      <p>We established a Citizen Advocacy program to identify people with intellectual disability who were at risk of neglect, abuse or isolation. We then matched them with carefully chosen and trained volunteers, who became Citizen Advocates.</p>
      <p>In July 2007 Side By Side Advocacy expanded its operation to include Individual Advocacy in addition to our Citizen Advocacy program. Individual Advocacy is provided by our professional staff and is available to people with intellectual disability in the northern part of Sydney.</p>  
      <p>Over time, we have increased the way we support people with disability including NDIS Appeals and Individual Advocacy for people with disability affected by the Disability Royal Commission.</p>
      <p>We have also started a project researching inclusive governance. This project will investigate a range of governance models, structures, policies and procedures that are used in community organisations.</p>
    <motion.div className={styles.tabs}
    initial='hidden'
    whileInView='visible'
    viewport={{once:true,amount:0.5}}
    transition={{duration:1}}
    variants={{hidden: {opacity:0, x:50}, visible: {opacity:1, x:0}}}>
    <div className={styles.tabFrame}>
    <Tabs >
    <TabList>
      <Tab>Our Vision</Tab>
      <Tab>Our Purpose</Tab>
      <Tab>Our Values</Tab>
      <Tab>Our Board</Tab>
      <Tab>Our Staff</Tab>
    </TabList>
    <TabPanel>
      <div className={styles.panelContents}>
     <img src={vision} alt='Our Vision'/>
    <p>We envisage a world where people with disability are equal and valued; where diversity is celebrated, needs are fulfilled and opportunities realised.</p>
   </div>
    </TabPanel>
    <TabPanel>
    <div className={styles.panelContents}>
     <img src={purpose} alt='Our Purpose'/>
    <p>Side By Side Advocacy promotes and upholds the rights, needs and interests of people with intellectual disability to enable full and meaningful participation in the community.</p>
   </div>
    </TabPanel>
    <TabPanel>
    <div className={styles.panelContents}>
     <img src={value} alt='Our Values'/>
      <ul>
        <li> Each person’s life is of equal and inherent value and worth.</li>
        <li>People with disability have the right to advocacy and to protection from devaluation, neglect, abuse and the denial of human rights.</li>
        <li>People with disability have the right to be treated as individuals, and not in terms of their disability.</li>
        <li>All people are entitled to comprehensive and appropriate support to ensure full inclusion into the community.</li>
        <li>All people have the right to make decisions about their own lives.</li>
        <li>All people have the right to make decisions about their own lives.</li>
        <li>All people should be treated with dignity and respect.</li>
        <li>All people have the right to be safe, valued and accepted.</li>
        <li>All people have the potential to grow and develop and should be provided with opportunities to do so.</li>
        <li>All people regardless of gender, age, ethnicity, sexuality or religion have the same human and legal rights.</li>
        <li>People with disability are to be treated in accordance with the UN Convention on the Rights of Persons with Disability.</li>
      </ul>
      </div>
    </TabPanel>
    <TabPanel>
    <div className={styles.panelContents}>
     <img src={board} alt='Our Board'/>
   <p>A voluntary Board of Management oversees the legal and financial operation of the organisation. Board members are elected annually and contribute at every level to ensure the ongoing success of Side By Side Advocacy. The Board also has various sub-committees that are created as needed to assist and support the work of our organisation.</p> 
    </div>
    </TabPanel>
    <TabPanel>
    <div className={styles.panelContents}>
     <img src={staff} alt='Our Staff'/>
    <p>A committed, specialist team works to promote and upholds the rights, needs and interests of people with intellectual disability to enable full and meaningful participation in the community.</p>
    <div className={styles.grid}>
      <div className={styles.gridItem}>
      <div className={styles.img}>
      <img src={staffphoto} alt='Staff Photo' />
    </div>
    <h5>Kim Roots</h5>  
    <h6>Executive Officer</h6>  
   </div> 
   <div className={styles.gridItem}>
      <div className={styles.img}>
      <img src={staffphoto} alt='Staff Photo' />
    </div>
    <h5>Preeti Thadani</h5>  
    <h6>Senior Advocate </h6>  
   </div> 
   <div className={styles.gridItem}>
      <div className={styles.img}>
      <img src={staffphoto} alt='Staff Photo' />
    </div>
    <h5>Deb Maio</h5>  
    <h6>Citizen Advocacy Coordinator </h6>  
   </div> 
   <div className={styles.gridItem}>
      <div className={styles.img}>
      <img src={staffphoto} alt='Staff Photo' />
    </div>
    <h5> Cathy Milne</h5>  
    <h6>Disability Royal Commission Advocate</h6>  
   </div> 
   <div className={styles.gridItem}>
      <div className={styles.img}>
      <img src={staffphoto} alt='Staff Photo' />
    </div>
    <h5> Dr Bernadette Curryer</h5>  
    <h6>Project Research Officer</h6>  
   </div> 
   <div className={styles.gridItem}>
      <div className={styles.img}>
      <img src={staffphoto} alt='Staff Photo' />
    </div>
    <h5> Katrina Sneath</h5>  
    <h6>Project Co-researcher</h6>  
   </div>
   <div className={styles.gridItem}>
      <div className={styles.img}>
      <img src={staffphoto} alt='Staff Photo' />
    </div>
    <h5> Will Harding</h5>  
    <h6>Project Co-researcher</h6>  
   </div>
   <div className={styles.gridItem}>
      <div className={styles.img}>
      <img src={staffphoto} alt='Staff Photo' />
    </div>
    <h5>Karen Reyes</h5>  
    <h6>Communications and Engagement</h6>  
   </div>
   <div className={styles.gridItem}>
      <div className={styles.img}>
      <img src={staffphoto} alt='Staff Photo' />
    </div>
    <h5>Kay Jones </h5>  
    <h6>Accounts</h6>  
   </div>
</div>
</div>
    </TabPanel>
  </Tabs>
  </div>
  </motion.div>
    </section>
  )
}

export default AboutUs