import { useState, useRef, useEffect} from 'react'
import Loader from '../../loader/Loader';
import styles from "../addNews/AddNews.module.scss";
import { Editor } from '@tinymce/tinymce-react';
import { motion } from "framer-motion";
import { useNavigate, useParams} from 'react-router-dom';
import {
    getDownloadURL,
    ref,
    uploadBytesResumable,
  } from "firebase/storage";
  import { db, storage } from "../../../firebase/config";
  import { doc, setDoc, Timestamp } from "firebase/firestore";
  import { toast } from "react-toastify";
import useFetchNews from '../../../hooks/useFetchNews';

const EditNews = () => {
    const {id}  = useParams();
   const [isLoading, setIsLoading] = useState<boolean>(false);
    const editorRef = useRef<any | null>(null);
    const [newsTitle, setNewsTitle] = useState<string>('')
    const [newsImg, setNewsImg] = useState<string>('')
    const [uploadProgress, setUploadProgress] = useState<number>(0);
    const [content, setContent] = useState<string>('');
  const {news}=useFetchNews(id)
 useEffect(() => {
    setNewsTitle((news as any)?.title)
    setNewsImg((news as any)?.imageURL)
    setContent((news as any)?.newsText)
 }, [news])
   
    const navigate=useNavigate();
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setNewsTitle(e.target.value ) 
    };
      const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target= e.target as HTMLInputElement;
        const file: File = (target.files as FileList)[0];
        const storageRef = ref(storage, `images/${Date.now()}${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on('state_changed', 
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
         setUploadProgress(progress);
      }, 
      (error) => {
        toast.error(error.message);
      }, 
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setNewsImg(downloadURL)
        });
      }
    );
      }
      const editNews =(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setIsLoading(true);
        if(id===undefined) throw new Error("Value must be provided");
          try {
            setDoc(doc(db, "news", id), {
                title: newsTitle,
                imageURL: newsImg,         
                newsText: editorRef.current.getContent(),
                createdAt: Timestamp.now().toDate(),
            });
            setIsLoading(false);
            navigate("/admin/publishedNews");
          } catch (error:any) {
            setIsLoading(false);
            toast.error(error.message);
          }
          }
          const handleEditorChange = (content:string) => {
            setContent(content);
          };
          const handleReset = () => {
            setNewsTitle('');
            setNewsImg('')
            setUploadProgress(0)
            setContent('');
          };
  return (
    <>  {isLoading && <Loader />}
    <motion.div className={styles.addNews}
    initial='hidden'
      whileInView='visible'
      viewport={{once:true,amount:0.5}}
      transition={{duration:1}}
      variants={{hidden: {opacity:0, x:50}, visible: {opacity:1, x:0}}}>
    <h2>Update News</h2>
    <div className={styles.card}>
    <form onSubmit={editNews}>
          <label>News Title:</label>
          <input
            type="text"
            required
            name="title"
            value={newsTitle || ''}
            onChange={(e) => handleInputChange(e)}
            placeholder='Add News title here'
          />
          <label>News image:</label>
          <div className={styles.group}>
            <input
              type="file"
              accept="image/*"
              placeholder="News Image"
              name="image"
              onChange={(e) => handleImageChange(e)}
            />
                {uploadProgress === 0 ? null : (
              <div className={styles.progress}>
                <div
                  className={styles["progress-bar"]}
                  style={{ width: `${uploadProgress}%` }}
                >
                  {uploadProgress < 100
                    ? `Uploading ${uploadProgress}`
                    : `Upload Complete ${uploadProgress}%`}
                </div>
              </div>
            )}
          </div>
          <label>News text:</label>
          <Editor
        apiKey='9x16gq12hrxuygls5fyzao3611inw5omf5yx6pl5twbor2ce'
        onInit={(evt, editor) => editorRef.current= editor }
        value={content}
        onEditorChange={handleEditorChange}
        init={{
          height: 500,
          menubar: false,
          placeholder:"Write down News contents here...",
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
          <button >
            Update
          </button>
          <button onClick={handleReset}>
            Reset
          </button>
        </form>
    </div>
  </motion.div>
  </>
  )
}

export default EditNews