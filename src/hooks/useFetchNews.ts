import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { db } from "../firebase/config";

const useFetchNews = (newsID:string | undefined) => {
    const [news, setNews] = useState(null);
    if (newsID === undefined) {
      throw new Error("Value must be provided");
    }
    const getNews = async () => {
        const docRef = doc(db, 'news', newsID);
        const docSnap = await getDoc(docRef);
    
        if (docSnap.exists()) {
          const obj:any = {
            id: newsID,
            ...docSnap.data(),
          };
          setNews(obj);
        } else {
          toast.error("Document not found");
        }       
    };
    useEffect(() => {
      getNews();
      }, []);
      return {news}
      
}

export default useFetchNews