import sbsaLogo from '../../assets/sbsa.png'
import styles from './CitizenAdvocacy.module.scss'
import citizenAdvocate from '../../assets/citizen-advocacy.jpg'
import useLocalStorage from 'use-local-storage';

const CitizenAdvocacy = () => {
    const defaultTheme = window.matchMedia('(prefers-color-scheme: high)').matches;
  const theme = useLocalStorage('theme', defaultTheme ? 'high' : 'normal');
  return (
    <section data-theme={theme}>
        <div className={styles.serviceText}>
            <div className={styles.serviceTitle}>
            <img src={sbsaLogo} alt="SBSA Logo" />
            <h3>What is Citizen Advocacy?</h3>
            </div>
            <div className={styles.serviceParagraph}>
            <p>
            Citizen Advocacy promotes and protects the rights, needs and interests of
people with intellectual disability by connecting them in one-to-one, freely
given relationships with local citizens.
            </p>
            </div>
        </div>
        <div className={styles.serviceText}>
            <div className={styles.serviceTitle}>
            <img src={sbsaLogo} alt="SBSA Logo" />
            <h3>What does a citizen advocate do?</h3>
            </div>
            <div className={styles.serviceParagraph}>
            <p>
            A citizen advocate is an unpaid person who commits to a long-term
connection with a person with intellectual disability who has unmet needs
and is at risk of social exclusion. Some of these connections may last for life.
What the citizen advocate does will vary depending on the needs of the
person they are matched with.
It is common for the role of the citizen advocate to evolve over time as they
develop a deeper understanding of the life experiences, needs and interests
of the person with disability they are matched with.
            </p>
            </div>
        </div>
        <div className={styles.serviceText}>
            <img src={citizenAdvocate} alt="Citizen Advocate" />
            <p>“I see my role as being a friend who occasionally challenges bureaucracy.
There are a few parts to that. I feel the need to challenge things when the
person I’m matched with is expected to settle for less than I would accept for
myself. I apply an ordinary perspective – not a bureaucratic perspective.”</p>
        </div>
        <div className={styles.serviceText}>
            <div className={styles.serviceTitle}>
            <img src={sbsaLogo} alt="SBSA Logo" />
            <h3>Why is Citizen Advocacy important?</h3>
            </div>
            <div className={styles.serviceParagraph}>
            <p>
            Many people with intellectual disability have little control over where they
live and what they do each day, have few people in their life who are not
paid to be there and are at ongoing risk of abuse, neglect and exploitation.
Citizen Advocacy is an opportunity for a local citizen to advocate for one
person, address these negative forces, increase positive opportunities, and
work together to achieve a good life for a person with intellectual disability.
            </p>
            </div>
        </div>
        <div className={styles.serviceText}>
            <div className={styles.serviceTitle}>
            <img src={sbsaLogo} alt="SBSA Logo" />
            <h3>What is Side By Side Advocacy’s role?</h3>
            </div>
            <div className={styles.serviceParagraph}>
            <p>
            We make matches between a local citizen and a person with intellectual
disability with unmet needs. We provide orientation, ongoing support, and
training opportunities for citizen advocates, but the relationship that the
citizen advocate and the person with disability build is independent from
Side By Side Advocacy.
            </p>
            </div>
        </div>
        <div className={styles.serviceText}>
            <div className={styles.serviceTitle}>
            <img src={sbsaLogo} alt="SBSA Logo" />
            <h3>How to get involved:</h3>
            </div>
            <div className={styles.serviceParagraph}>
            <p>
            If you think you could be a supporter and ally to a person with intellectual
disability, please contact Side By Side Advocacy.
We will explain what is involved in becoming a citizen advocate and you can
ask questions and learn more about Citizen Advocacy.
If Citizen Advocacy is right for you, you will be offered training and ongoing
support to assist you to make a real difference in the life of a person with
intellectual disability.  </p>
            </div>
        </div>
    </section>
  )
}

export default CitizenAdvocacy