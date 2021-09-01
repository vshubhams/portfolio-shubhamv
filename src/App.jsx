import './App.css';
import { AboutMe } from './Components/AboutMe/AboutMe';
import { Navbar } from './Components/Navbar/Navbar';
import { Profile } from './Components/Profile/Profile';
import { Projects } from './Components/Projects/Projects';
import Sidebar from "./Components/Sidebar/"
import { useState } from 'react';
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="App">
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Profile />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
