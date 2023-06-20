import sbsaLogo from '../../assets/sbsa.png'
import styles from '../citizenAdvocacy/CitizenAdvocacy.module.scss'
import ndis from '../../assets/ndis.webp'

const NDIS = () => {
  return (
    <section>
    <div className={styles.serviceText}>
        <div className={styles.serviceTitle}>
        <img src={sbsaLogo} alt="SBSA Logo" />
        <h3>What is an NDIS Appeal?</h3>
        </div>
        <div className={styles.serviceParagraph}>
        <p>
        The National Disability Insurance Scheme (NDIS) provides funding for eligible
people with disability so they can access support. The National Disability
Insurance Agency (NDIA) runs the NDIS.
If you are unhappy with a decision that was made by the NDIA, you can ask
for the decision to be changed at an internal review.
If you are still unhappy with the decision, you can ask for a further review by
people who do not work for the NDIA. This is what we call an NDIS Appeal.
The appeal will take place at the Administrative Appeals Tribunal (AAT).
        </p>
        </div>
    </div>
    <div className={styles.serviceText}>
        <div className={styles.serviceTitle}>
        <img src={sbsaLogo} alt="SBSA Logo" />
        <h3>How can Side By Side Advocacy help with your appeal?</h3>
        </div>
        <div className={styles.serviceParagraph}>
        <p>
        Ways we can help include:</p>
        <ul>
           <li>
           explain the appeal process
           </li>
           <li>
           tell you what you need to do to appeal
           </li>
           <li>
           help you prepare documents for the appeal
           </li>
           <li>
           support you to represent yourself
           </li>
           <li>
           help you to apply for legal services
           </li>
           <li>
           go to conferences and hearings with you to help explain your case.
           </li>
        </ul>    
        </div>
    </div>
    <div className={styles.serviceText}>
        <img src={ndis} alt="NDIS" />
    </div>
    <div className={styles.serviceText}>
        <div className={styles.serviceTitle}>
        <img src={sbsaLogo} alt="SBSA Logo" />
        <h3>Who is eligible?</h3>
        </div>
        <div className={styles.serviceParagraph}>
        <p>
        You can access NDIS Appeals Support if you have a disability and live in
Greater Sydney.</p>
        </div>
    </div>

</section>
  )
}

export default NDIS