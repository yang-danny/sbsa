import Banner from '../../components/banner/Banner'
import NewsEvent from '../event/NewsEvent'
import Services from '../services/Services'
import Support from '../support/Support'

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <NewsEvent />
      <Support />
    </div>
  )
}

export default Home