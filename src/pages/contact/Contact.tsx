import styles from './Contact.module.scss'
import { Editor } from '@tinymce/tinymce-react';
import {AiOutlineHome,AiOutlinePhone,AiOutlineMail,AiOutlineGlobal,AiOutlineTranslation } from "react-icons/ai";
import { motion } from "framer-motion";
import useLocalStorage from 'use-local-storage';
const Contact = () => {
  const defaultTheme = window.matchMedia('(prefers-color-scheme: high)').matches;
  const theme = useLocalStorage('theme', defaultTheme ? 'high' : 'normal');

  return (
    <section data-theme={theme}>
      <h3>Contact Us</h3>
      <motion.div className={styles.contact}
       initial='hidden'
       whileInView='visible'
       viewport={{once:true,amount:0.5}}
       transition={{duration:1}}
       variants={{hidden: {opacity:0, x:-50}, visible: {opacity:1, x:0}}}>
        <div className={styles.contactFrame}>
          <div className={styles.left}>
        <div className={styles.google}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.9395551741263!2d151.0098535!3d-33.8138729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a319989a1805%3A0x6c7b4baea3f815f1!2sLevel%202%2C%20Suite%20206%2F34%20Charles%20St%2C%20Parramatta%20NSW%202150!5e0!3m2!1sen!2sau!4v1686568378888!5m2!1sen!2sau" 
      width="480" height="350" 
      style={{ border: 1 }} loading="lazy"></iframe>
      </div>
      <div className={styles.contactInfo}>
      <h2>Side By Side Advocacy</h2>
      <table>
<tbody>
  <tr>
    <td><AiOutlineHome size={25}/></td>
    <td>Level 2, Suite 206, 34 Charles Street</td>
  </tr>
  <tr>
    <td> </td>
    <td>Parramatta NSW 2150</td>
  </tr>
  <tr>
    <td><AiOutlinePhone size={25}/></td>
    <td>(02) 9808 5500 or 1300 162 510</td>
  </tr>
  <tr>
    <td><AiOutlineMail size={25}/></td>
    <td><a href="mailto:info@sidebysideadvocacy.org.au">info@sidebysideadvocacy.org.au</a></td>
  </tr>
  <tr>
    <td><AiOutlineGlobal size={25}/></td>
    <td><a href="https://www.sidebyside.org.au/">www.sidebysideadvocacy.org.au</a></td>
  </tr>
  <tr>
    <td><AiOutlineTranslation size={25}/></td>
    <td>131 450 (to speak to us in your language)</td>
  </tr>
  </tbody>
      </table>
      </div> 
      </div>
      <form >
            <div className={styles.card}>
              <label>Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="Full Name"
                required
              />
              <label>Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="Your active email"
                required
              />
                <label>Phone</label>
              <input
                type="text"
                name="user_phone"
                placeholder="Your active phone number"
                required
              />
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
              <label>Message</label>
              <Editor
        apiKey='9x16gq12hrxuygls5fyzao3611inw5omf5yx6pl5twbor2ce'
        init={{
          height: 300,
          menubar: false,
          placeholder:"Write down your interested here...",
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
        }}/>
              <button >Send Message</button>
            </div>
          </form>
          </div>
          </motion.div>
    </section>
  )
}

export default Contact