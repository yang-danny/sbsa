import { FormEvent, useState } from "react";
import styles from "./auth.module.scss";
import Loader from "../../components/loader/Loader";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import { toast } from 'react-toastify';
import registerImg from '../../assets/user-registration.png'
const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const registerUser=(e:FormEvent)=>{
          e.preventDefault();
          if (password !== cPassword) {
          toast.error("Passwords do not match.");
          }
          setIsLoading(true)
          createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => { 
          setIsLoading(false)
          toast.success('Registration successful.')
          navigate('/login');
    })
    .catch((error) => {
          toast.error(error.message);
          setIsLoading(false);
    });
    }
    return (
      <>
    {isLoading ? <Loader/>:(
      <section className={styles.auth}>
        <div className={styles.card}>
        <div className={styles.img}>
          <img src={registerImg} alt="Register" width="400" />
        </div>
          <div className={styles.form}>
            <h2>Register</h2>
            <form  onSubmit={registerUser} >
              <input
                type="text"
                placeholder="Email"
                required
                value={email || ''}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={password || ''}
               onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                required
                value={cPassword || ''}
               onChange={(e) => setCPassword(e.target.value)}
              />
              <button type="submit" className="--btn --btn-primary --btn-block">
                Register
              </button>
            </form>
            <span className={styles.register}>
              <p>Already an account?</p>
              <Link to="/login">Login</Link>
            </span>
          </div>
        </div>
      </section>
      )}
    </>
    )
  }
  
  export default Register