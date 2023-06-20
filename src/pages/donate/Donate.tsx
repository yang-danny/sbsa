import styles from "./Donate.module.scss";
import donateImg from "../../assets/donation.webp"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.scss';
import { useState } from "react";
import { motion } from "framer-motion";
import Cards, { Focused } from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/lib/styles.scss';
import useLocalStorage from "use-local-storage";

const Donate = () => {
  const defaultTheme = window.matchMedia('(prefers-color-scheme: high)').matches;
  const theme = useLocalStorage('theme', defaultTheme ? 'high' : 'normal');

  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });
  const handleInputChange = (evt:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setState((prev) => ({ ...prev, [name]: value }));
  }
  const handleInputFocus = (evt:React.ChangeEvent<HTMLInputElement>) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  }
  return (
   <section  data-theme={theme}>
    <div className={styles.header}>
<img src={donateImg} alt="Donation" />
<div className={styles.info}>
<h3>Make a donation</h3>
<p>Want to help people with a disability to live a great life? Help right now by donating to Side By Side Advocacy as follows:</p>
</div>
    </div>
    <motion.div className={styles.donation}
     initial='hidden'
     whileInView='visible'
     viewport={{once:true,amount:0.5}}
     transition={{duration:1}}
     variants={{hidden: {opacity:0, x:-50}, visible: {opacity:1, x:0}}}
    >
      <div className={styles.contents}>
   <h2>Amount to donate:</h2>
<div className={styles.amount}>
    <div className={styles.selectamount}>
      <input type="radio" id="ten" name="donate-amount" value="$10" />
    <label >  $10</label>
    </div>
    <div className={styles.selectamount}>
      <input type="radio" id="fifty" name="donate-amount" value="$50" />
   <label >   $50</label>
    </div>
    <div className={styles.selectamount}>
      <input type="radio" id="hundred" name="donate-amount" value="$100" />
    <label >  $100</label>
    </div>
    <div className={styles.selectamount}>
    <input type="radio" id="own-choice" name="donate-amount" value="" />
    <label >  My choice: </label>      <span >$</span>
      <input type="text" placeholder="Enter your donate amount..."/>
    </div>
      </div>
      <h2>Payment Methord:</h2>
      <div className={styles.tabs}>
    <Tabs >
    <TabList>
      <Tab>Credit Card</Tab>
      <Tab>Bank Transfer</Tab>
      <Tab>Cheque/Money order</Tab>
    </TabList>
    <TabPanel>
    <div className={styles.creditcard}>
      <Cards
       number={state.number}
       expiry={state.expiry}
       cvc={state.cvc}
       name={state.name}
      focused={state.focus as Focused}
      />
      <form >
        <div className={styles.formGroup}>
          <input
            type="tel"
            name="number"
            placeholder="Card Number"
            pattern="[\d| ]{16,22}"
            required
            onChange={handleInputChange}
           onFocus={handleInputFocus}
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </div>
          <div className={styles.formGroup}>
            <input
              type="tel"
              name="expiry"
              placeholder="Valid Date"
              pattern="\d\d/\d\d"
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="tel"
              name="cvc"
              placeholder="CVC"
              pattern="\d{3,4}"
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
        <div className={styles.formActions}>
          <button id="submit">Donate Now</button>
        </div>
      </form>
    </div>
    </TabPanel>
    <TabPanel>
    <div className={styles.banktransfer}>
    <table>
  <tr>
    <td>Account Name:</td>
    <td>Side By Side Advocacy </td>
  </tr>
  <tr>
    <td>BSB:</td>
    <td>112-121</td>
  </tr>
  <tr>
    <td>Account No:</td>
    <td>1234-5678</td>
  </tr>
  <tr>
    <td>Desc:</td>
    <td>Donation from 'Your name'</td>
  </tr>
</table>
</div>
    </TabPanel>
    <TabPanel>
    <div className={styles.banktransfer}>
    <table>
  <tr>
    <td>Name:</td>
    <td>Side By Side Advocacy </td>
  </tr>
  <tr>
    <td>Address:</td>
    <td>30-32 Herbert Street, West Ryde NSW 2114</td>
  </tr>
</table>
</div>
    </TabPanel>
  </Tabs>
  </div>
      </div>
      </motion.div>
   </section>
  )
}

export default Donate