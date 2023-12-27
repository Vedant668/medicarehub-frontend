import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Home} from './Components/Home.jsx';
import {NavigationBar} from './Components/NavigationBar.jsx';
import {Medicine} from './Components/Medicine.jsx';
import {About} from './Components/About.jsx';
import {Contact} from './Components/Contact.jsx';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Footer } from './Components/Footer.jsx';
import Signup from './Components/Signup.jsx';
import Login from './Components/Login.jsx';
import { Hospitals } from './Components/Hospitals.jsx';
function App() {
  return ( 
  <BrowserRouter>
    <NavigationBar></NavigationBar>
    <Routes>
      <Route path="/" element={<Home/>}> </Route>
      <Route path="/medicine" element={<Medicine/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/hospital" element={<Hospitals/>}></Route>
      
        
    </Routes>
    <Footer></Footer>
  </BrowserRouter>
  );
}

export default App;

