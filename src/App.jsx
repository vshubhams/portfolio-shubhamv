import './App.css';
import { AboutMe } from './Components/AboutMe/AboutMe';
import { Navbar } from './Components/Navbar/Navbar';
import { Profile } from './Components/Profile/Profile';
import { Projects } from './Components/Projects/Projects';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
