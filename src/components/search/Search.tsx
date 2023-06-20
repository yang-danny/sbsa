import styles from "./Search.module.scss";
import { BiSearch } from "react-icons/bi";
type Props={
    value:string;
    onChange:any;
}
const Search = ({value,onChange}:Props) => {

  return (
    <div className={styles.search}>
    <BiSearch size={18} className={styles.icon} />
    <input
      type="text"
      placeholder="Search by News title..."
      value={value || ''}
      onChange={onChange}
    />
  </div>
  )
}

export default Search