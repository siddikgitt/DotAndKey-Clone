import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import LP_Slider from './Components/LandingPage/LP_Slider';
import LandingPage from './Components/LandingPage/LandingPage';
import { Container } from '@chakra-ui/react';
import Footer from './Components/Footer/Footer';
import AllRoutes from './Components/Routes/AllRoutes';

function App() {
  return (
    <div>
      
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
