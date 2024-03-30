import { Navbar } from './Components/Navbar';
import './App.css';
import { Route , Routes } from 'react-router-dom';
import { Home } from './Components/pages/Home';
import { Contact } from './Components/pages/Contact';
import { Jobs } from './Components/pages/Jobs';
import { About } from './Components/pages/About';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path = "/jobs" element = {<Jobs/>}/>
      <Route path='/Home' element = {<Home/>}/>
      <Route path='/Contact' element = {<Contact/>}/>
      <Route path='/About' element = {<About/>}/>
      
    </Routes>

    </div>
  );
}

export default App;
