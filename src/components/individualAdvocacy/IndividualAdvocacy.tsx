import sbsaLogo from '../../assets/sbsa.png'
import styles from '../citizenAdvocacy/CitizenAdvocacy.module.scss'
import individualAdvocacy from '../../assets/individual-advocacy.jpg'
const IndividualAdvocacy = () => {
  return (
    <section>
    <div className={styles.serviceText}>
        <div className={styles.serviceTitle}>
        <img src={sbsaLogo} alt="SBSA Logo" />
        <h3>What is Individual Advocacy?</h3>
        </div>
        <div className={styles.serviceParagraph}>
        <p>
        Individual Advocacy is one-on-one assistance for a person with disability to
help solve problems and explore possibilities. It is free.
An Individual Advocate can help you take action if you think something is
unfair or someone is treating you badly and you would like to change this.
Individual Advocacy can support you to make a good change in your life
        </p>
        </div>
    </div>
    <div className={styles.serviceText}>
        <div className={styles.serviceTitle}>
        <img src={sbsaLogo} alt="SBSA Logo" />
        <h3>What can Individual Advocacy help with?</h3>
        </div>
        <div className={styles.serviceParagraph}>
        <p>
        We can help with all kinds of issues and problems. For example:</p>
        <ul>
           <li>
           with housing and tenancy issues
           </li>
           <li>
           with education and work opportunities
           </li>
           <li>
           getting the medical care that you need
           </li>
           <li>
           accessing the NDIS, NDIS Plans and Plan Reviews
           </li>
        </ul>  
        </div>
    </div>
    <div className={styles.serviceText}>
        <img src={individualAdvocacy} alt="Individual Advocate" />
    </div>
    <div className={styles.serviceText}>
        <div className={styles.serviceTitle}>
        <img src={sbsaLogo} alt="SBSA Logo" />
        <h3>How does an individual advocate help?</h3>
        </div>
        <div className={styles.serviceParagraph}>
        <p>
        You will work with an advocate who will listen to you to find out what the
problem is and what you want to do about it.
What happens next depends on what you need and want. The advocate
can give you advice, information, and referrals so that you can speak up for
yourself.
The advocate can also give information and advice to someone you know
and trust, so they can speak up for you. This could be a family member, a
friend, or someone else.
If you cannot solve the problem by yourself, the advocate can work with you
to address your concern. There are lots of different ways this can happen.       </p>
        </div>
    </div>
    <div className={styles.serviceText}>
        <div className={styles.serviceTitle}>
        <img src={sbsaLogo} alt="SBSA Logo" />
        <h3>Who can access Individual Advocacy?</h3>
        </div>
        <div className={styles.serviceParagraph}>
        <p>
        Individual Advocacy is available from Side By Side Advocacy if you have a
disability and live in the Northern Suburbs of Sydney and in Parramatta and
Cumberland LGAs. We specialise in advocacy for people with intellectual
disability.
We will tell you if we cannot help you straight away or we know that another
organisation may be able to help you in the way you need.
        </p>
        </div>
    </div>

</section>
  )
}

export default IndividualAdvocacy