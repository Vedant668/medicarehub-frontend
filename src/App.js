import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Home} from './Components/Home.jsx';
import {NavigationBar} from './Components/NavigationBar.jsx';
import {Medicine} from './Components/Medicine.jsx';
import {About} from './Components/About.jsx';
import {Contact} from './Components/Contact.jsx';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Footer } from './Components/Footer.jsx';
import {Signup} from './Components/Signup.jsx';
import {Login} from './Components/Login.jsx';
import { Hospitals } from './Components/Hospitals.jsx';
import { General} from './Components/General.jsx';
import { Neuro } from './Components/Neuro.jsx';
import { Cardio } from './Components/Cardio.jsx';
import { Dentist } from './Components/Dentist.jsx';
import { Ortho } from './Components/Ortho.jsx';
import { Urology } from './Components/Urology.jsx';

import { BookingForm } from './Components/BookingForm.jsx';
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
      <Route path="/general" element={<General/>}></Route>
      <Route path="/neuro" element={<Neuro/>}></Route>
      <Route path="/cardio" element={<Cardio/>}></Route>
      <Route path="/dentist" element={<Dentist/>}></Route>
      <Route path="/ortho" element={<Ortho/>}></Route>
      <Route path="/urology" element={<Urology/>}></Route>

      <Route path="/bookingForm" element={<BookingForm/>}></Route>
      
        
    </Routes>
    <Footer></Footer>
  </BrowserRouter>
  );
}

export default App;

