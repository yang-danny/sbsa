import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup, } from "firebase/auth";
import { auth } from "../../firebase/config";
import Loader from "../../components/loader/Loader";
import {toast } from 'react-toastify';
import styles from './auth.module.scss'
import loginImg from '../../assets/login.png'
import { FaGoogle } from "react-icons/fa";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const loginUser=(e:React.FormEvent)=>{
          e.preventDefault();
          setIsLoading(true);
          signInWithEmailAndPassword(auth, email, password)
    .then(() => {
          setIsLoading(false);
          toast.success("Login Successful...");
          localStorage.setItem('user', JSON.stringify(email));
          navigate('/admin')
    })
    .catch((error) => {
          setIsLoading(false);
          toast.error(error.message);
    });
  };
  const provider= new GoogleAuthProvider();
  const signInWithGoogle=()=>{
          signInWithPopup(auth, provider)
    .then((result) => {
         const user = result.user.email;
         localStorage.setItem('user', JSON.stringify(user));
         toast.success("Login Successfully");
         navigate('/admin')
    })
    .catch((error) => {
         toast.error(error.message);
    });
  }
    return (
      <>
       {isLoading ?<Loader />:(
     <section className={styles.auth}>
      <div className={styles.card}>
      <div className={styles.img}>
         <img src={loginImg} alt='' width="400"/>  
      </div>
      <div className={styles.form}>
      <h2>Login</h2>
        <form  onSubmit={loginUser}>
          <input
          type="text"
          placeholder="Email"
          required
          value={email|| ''}
          onChange={(e) => setEmail(e.target.value)}/>
         <input
          type="password"
          placeholder="Password"
          required
          value={password || ''}
          onChange={(e) => setPassword(e.target.value)} />
         <button type="submit" className="--btn --btn-primary --btn-block">
          Login
         </button>
         <div className={styles.links}>
          <Link to="/reset">Reset Password</Link>
         </div>
        <p>-- or --</p>
  </form>
  <button
    className={`--btn --btn-danger --btn-block ${styles.btnGoogle}`}
    onClick={signInWithGoogle}
  >
    <FaGoogle color="#fff" /> Login With Google
  </button>
  <span className={styles.register}>
    <p>Don't have an account? </p>
    <Link to="/register"> Register</Link>
  </span>
      </div>
      </div>
      </section>
      )}
      </>
    )
  }
  
  export default Login