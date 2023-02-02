import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import './style.css';
import {Routes, Route} from 'react-router-dom';

//Highest Level Component
//It will handle the Route matching
function App() {
  return (
    <div>
      <h1>Hello React Router</h1>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/about/:heroId" element={<About />} />
          <Route path="/contact" element={<Contact />}/>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
      {/* Outlets, Layout Elements */}
    </div>
  );
}

export default App;