import styles from './PublishedNews.module.scss'
import Loader from '../../loader/Loader';
import {AiOutlineDelete, AiOutlineEdit} from "react-icons/ai";
import { useState } from 'react';
import useFetchCollection from '../../../hooks/useFetchCollection';
import Pagination from '../../pagination/Pagination';
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import Notiflix from "notiflix";
import { db, storage } from "../../../firebase/config";
import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import Search from '../../search/Search';
import { Link } from 'react-router-dom';
const PublishedNews = () => {
  const {data, isLoading} = useFetchCollection('news');
  const [search, setSearch] = useState("");
  const filterNews=data.filter((fn:any) => fn?.title.toLowerCase().includes(search.toLowerCase()))
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage] = useState(6);
  // Get Current News
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = filterNews.slice(
    indexOfFirstNews,
    indexOfLastNews
  );
  const deleteNews =async(id:string, imageURL:string)=>{
    try {
      await deleteDoc(doc(db, "news", id));
      const storageRef = ref(storage, imageURL);
      await deleteObject(storageRef);
     
    } catch (error:any) {
      toast.error(error.message)
    }
    }
    const confirmDelete = (id:string, imageURL:string) => {
      Notiflix.Confirm.show(
        "Delete News!!!",
        "You are about to delete this news",
        "Delete",
        "Cancel",
        function okCb() {
          deleteNews(id, imageURL);
        },
        function cancelCb() {},
        {
          width: "320px",
          borderRadius: "3px",
          titleColor: "#54008A",
          okButtonBackground: "#D22B2B",
          cssAnimationStyle: "zoom",
        }
      );
    };
  return (
    <>
    {isLoading && <Loader />}
    <motion.div  className={styles.PublishedNews}
    initial='hidden'
    whileInView='visible'
    viewport={{once:true,amount:0.5}}
    transition={{duration:1}}
    variants={{hidden: {opacity:0, x:50}, visible: {opacity:1, x:0}}}>
      <h2>All Published News</h2>
      <div className={styles.search}>
      <Search value={search || ''} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} /> 
        <p>
           <b>{filterNews.length}</b> News found 
        </p>
      </div>
      <div className={styles.table}>
      <table>
              <thead>
                <tr>
                  <th>s/n</th>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                  {currentNews.map((news, index) => {
                    const {
                      id, title, imageURL, createdAt
                    } = news;
                    return (
                      <tr key={id} >
                        <td>{index + 1}</td>
                        <td>
                        <img
                          src={imageURL}
                          alt={title}
                          style={{ width: "100px" }}
                        />
                        </td>
                        <td>{title}</td>
                      <td>{(createdAt as any ).toDate().toString().split('G')[0]}</td>
                      <td className={styles.icons}>
                        <Link to={`/admin/editNews/${id}`} >
                        <AiOutlineEdit size={24} color="green" />
                        </Link>
                        <AiOutlineDelete
                          size={24}
                          color="red"
                    onClick={() => confirmDelete(id, imageURL)}
                        />
                      </td>
                      </tr>
                    );
                  })}
                </tbody>
            </table>
            </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        productsPerPage={newsPerPage}
        totalProducts={data.length}
      />
    </motion.div>
  </>
  )
}

export default PublishedNews