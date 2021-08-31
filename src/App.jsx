import './App.css';
import { AboutMe } from './Components/AboutMe/AboutMe';
import { Navbar } from './Components/Navbar/Navbar';
import { Profile } from './Components/Profile/Profile';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <AboutMe />
    </div>
  );
}

export default App;
