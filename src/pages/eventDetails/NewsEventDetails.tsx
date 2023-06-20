import { useEffect, useState } from 'react'
import Loader from '../../components/loader/Loader'
import styles from './NewsEventDetails.module.scss';
import { useParams } from 'react-router-dom';
import useFetchNews from '../../hooks/useFetchNews';
import spinnerImg from '../../assets/loader.gif'
const NewsEventDetails = () => {
  const {id}  = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [selectNews, setSelectNews] = useState(null);
  const {news}=useFetchNews(id)
  useEffect(() => {
    setSelectNews(news)
    setIsLoading(true)
   }, [news])
 
  return (
    <>
    {isLoading===false ? <Loader />:(
      <section>
    <div className={`container ${styles.newsDetails}`}>
          <div className={styles.details}>  
            {selectNews === null ? (
        <img src={spinnerImg} alt="Loading" style={{ width: "50px" }} />
      ) : (
        <>
            <h3>{(selectNews as any).title}</h3>
        <div className={styles.img}>
              <img src={(selectNews as any).imageURL} alt={(selectNews as any).title} />
            </div>
            <div className={styles.content}
            dangerouslySetInnerHTML={{ __html: (selectNews as any).newsText }}
            >
              </div> 
              </>
             )}
            </div> 
    </div>
  </section>
    )}  
  </>
  )
}

export default NewsEventDetails