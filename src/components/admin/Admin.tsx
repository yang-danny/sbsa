import { Route, Routes, useNavigate } from "react-router-dom";
import styles from "./Admin.module.scss";
import { useEffect, useState } from "react";
import Navbar from "./navbar/Navbar";
import { motion } from "framer-motion";
import AddNews from "./addNews/AddNews";
import PublishedNews from "./publishedNews/PublishedNews";
import EditNews from "./editNews/EditNews";
const Admin = () => {
  const [userEmail, setUserEmail] = useState<string>('');
  const navigate = useNavigate();
  useEffect(() => {
    const userString = localStorage.getItem('user');
    if (!userString) {
     navigate('/login') 
    } else
    setUserEmail(userString);
  }, []);
  const logout =()=>{
    localStorage.clear();
    navigate('/login') 
  }
    return (
<div className={styles.admin}>
      <motion.div  className={styles.navbar}
      initial='hidden'
      whileInView='visible'
      viewport={{once:true,amount:0.5}}
      transition={{duration:1}}
      variants={{hidden: {opacity:0, x:-50}, visible: {opacity:1, x:0}}}
      >
        <Navbar userEmail={userEmail}/>
      </motion.div  >
      <motion.div   className={styles.content}
      initial='hidden'
      whileInView='visible'
      viewport={{once:true,amount:0.5}}
      transition={{duration:1}}
      variants={{hidden: {opacity:0, x:50}, visible: {opacity:1, x:0}}}
     >
        <Routes>
        <Route path="addNews" element={<AddNews />} />
        <Route path="editNews/:id" element={<EditNews />} />
        <Route path="publishedNews" element={<PublishedNews />} />
        </Routes>
      </motion.div>
    </div>
    );
  };
  
  export default Admin;