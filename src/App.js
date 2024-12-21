
import Contact from './components/contact/Contact';
import Faq from './components/faq/Faq';
import Home from './components/home/Home';
import Service from './components/service/Service';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/gnwife' element={<Home/>}></Route>
        <Route path='/gnwife/service' element={<Service/>}></Route>
        <Route path='/gnwife/faq' element={<Faq/>}></Route>
        <Route path='/gnwife/contact-us' element={<Contact/>}></Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
