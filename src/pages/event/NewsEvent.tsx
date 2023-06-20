import styles from './NewsEvent.module.scss'
import useFetchCollection from '../../hooks/useFetchCollection';
import Loader from '../../components/loader/Loader';
import { Link } from 'react-router-dom';
import {AiOutlineCalendar} from "react-icons/ai";
import { motion } from "framer-motion";
import useLocalStorage from 'use-local-storage';
const NewsEvent = () => {
  const defaultTheme = window.matchMedia('(prefers-color-scheme: high)').matches;
  const theme = useLocalStorage('theme', defaultTheme ? 'high' : 'normal');

  const {data, isLoading} = useFetchCollection('news');
  const slicedNews=data.slice(0,6)
  const shortenText = (text:string, n:number) => {
    if (text.length > n) {
      const shortenedText = text.substring(0, n).concat("...");
      return shortenedText;
    }
    return text;
  };
  return (
    <>
    {isLoading && <Loader />}
             <motion.div data-theme={theme} className={styles.content}
             initial='hidden'
             whileInView='visible'
             viewport={{once:true,amount:0.5}}
             transition={{duration:1}}
             variants={{hidden: {opacity:0, x:-50}, visible: {opacity:1, x:0}}}>
               <h3> Latest News</h3>
               {slicedNews.length === 0 ? (
                 <p>No News found</p>
               ) : (
                <div className={styles.grid}>
                       {slicedNews.map((publish, index) => {
                        const {id, title, imageURL,createdAt} = publish;
                          return (
                            <div  className={styles.gridItem} key={id}>
                            <Link to={`/eventDetails/${id}`}>
                              <div className={styles.img}>
                                <img src={imageURL} alt={title} />
                              </div>
                            </Link>                         
                              <div className={styles.details}>
                                <h4 className={styles.calendar}>
                                  <AiOutlineCalendar size={22} color="#54008A" /> 
                                  {(createdAt as any).toDate().toString().split('G')[0]}
                                  </h4>
                                  </div>
                                <h4>{shortenText(title, 40)}</h4>   
                              <a
                              className={styles.readMore}
                              href={`/eventDetails/${id}`}
                              >
                                Read More...
                              </a>
                          </div>
                          ); })}
                </div>                     
  )}                 
            </motion.div>
    </>
  )
}

export default NewsEvent