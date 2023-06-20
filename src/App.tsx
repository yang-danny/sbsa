import { BrowserRouter,Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import AboutUs from "./pages/about/AboutUs";
import Contact from "./pages/contact/Contact";
import Admin from "./components/admin/Admin";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Donate from "./pages/donate/Donate";
import CitizenAdvocacy from "./components/citizenAdvocacy/CitizenAdvocacy";
import IndividualAdvocacy from "./components/individualAdvocacy/IndividualAdvocacy";
import NDIS from "./components/ndis/NDIS";
import DisabilityRoyalCommission from "./components/disabilityRoyalCommission/DisabilityRoyalCommission";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Reset from "./pages/auth/Reset";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import NewsEvent from "./pages/event/NewsEvent";
import NewsEventDetails from "./pages/eventDetails/NewsEventDetails";
import ServiceBox from "./components/serviceBox/ServiceBox";
import useLocalStorage from 'use-local-storage';
function App() {
  const defaultTheme = window.matchMedia('(prefers-color-scheme: high)').matches;
  const [theme] = useLocalStorage('theme', defaultTheme ? 'high' : 'normal');

  return (
    <div data-theme={theme}>
    <BrowserRouter>
    <ToastContainer />
     <Header />
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<AboutUs/>} />
      <Route path='/services' element={<ServiceBox/>} />
      <Route path='/event' element={<NewsEvent/>} />
      <Route path='/eventDetails/:id' element={<NewsEventDetails/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path="/admin/*" element={

      <Admin />
      
      } />
      <Route path="/citizenAdvocacy" element={<CitizenAdvocacy/>} />
      <Route path="/individualAdvocacy" element={<IndividualAdvocacy/>} />
      <Route path="/ndis" element={<NDIS/>} />
      <Route path="/disablityRoyalCommission" element={<DisabilityRoyalCommission/>} />
      <Route path='/donate' element={<Donate/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/reset' element={<Reset/>} />
     </Routes>
     <Footer />
    </BrowserRouter>
    </div>
  )
}

export default App
