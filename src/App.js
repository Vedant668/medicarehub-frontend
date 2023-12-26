import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Home} from './Components/Home.jsx';
import {NavigationBar} from './Components/NavigationBar.jsx';
import {About} from './Components/About.jsx';
import {Contact} from './Components/Contact.jsx';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
  <BrowserRouter>
    <NavigationBar></NavigationBar>
    <Routes>
      <Route path="/" element={<Home/>}> </Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
        
    </Routes>
  </BrowserRouter>
  );
}

export default App;

