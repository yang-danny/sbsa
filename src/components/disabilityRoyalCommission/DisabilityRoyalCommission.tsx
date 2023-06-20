import sbsaLogo from '../../assets/sbsa.png'
import styles from '../citizenAdvocacy/CitizenAdvocacy.module.scss'
import disablityRoyalCommission from '../../assets/Disability-Royal-Commission.jpg'

const DisabilityRoyalCommission = () => {
  return (
    <section>
    <div className={styles.serviceText}>
        <div className={styles.serviceTitle}>
        <img src={sbsaLogo} alt="SBSA Logo" />
        <h3>What is the Disability Royal Commission?</h3>
        </div>
        <div className={styles.serviceParagraph}>
        <p>
        A Royal Commission looks into problems that are important to the
community. There is a Royal Commission for people with disability called the
Disability Royal Commission. The Disability Royal Commission started because
some people with disability said bad things had been done to them.
The Disability Royal Commission is looking into how to:
        </p>
        <ul>
           <li>
           protect people with disability from violence, abuse, neglect and
exploitation
           </li>
           <li>
           be better at reporting, investigating and responding when people with
disability experience violence, abuse, neglect and exploitation 
           </li>
           <li>
           work towards a more inclusive society that supports people with disability
to be independent and live free from violence, abuse, neglect and
exploitation.
           </li>
        </ul>  
        <p>The Disability Royal Commission wants to hear from people with disability
about their experiences and about how things can be improved. These stories
can be about things that happened recently or a long time ago. </p>
        </div>
    </div>
    <div className={styles.serviceText}>
        <div className={styles.serviceTitle}>
        <img src={sbsaLogo} alt="SBSA Logo" />
        <h3>How can Side By Side Advocacy help?</h3>
        </div>
        <div className={styles.serviceParagraph}>
        <p>
        Side By Side Advocacy is one organisation that can help people with disability
share their stories with the Disability Royal Commission.
If you have a story that you want to share, we can help you to:</p>
        <ul>
           <li>
           learn more about what the Disability Royal Commission is doing
           </li>
           <li>
           decide if you want to share your story
           </li>
           <li>
           support you to contact the Royal Commission in a way that suits you
           </li>
           <li>
           connect with support from other organisations such as legal advice or
counseling.
           </li>
          
        </ul>    
        </div>
    </div>
    <div className={styles.serviceText}>
        <img src={disablityRoyalCommission} alt="Disability Royal Commission Advocacy" />
    </div>
    <div className={styles.serviceText}>
        <div className={styles.serviceTitle}>
        <img src={sbsaLogo} alt="SBSA Logo" />
        <h3>Who can access Disability Royal Commission Advocacy?</h3>
        </div>
        <div className={styles.serviceParagraph}>
        <p>
        You can access Disability Royal Commission Advocacy from Side By Side
Advocacy if you have a disability and live in the Northern Suburbs of Greater
Sydney. We specialise in advocacy for people with intellectual disability.</p>
        </div>
    </div>

</section>
  )
}

export default DisabilityRoyalCommission