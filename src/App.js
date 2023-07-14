import './App.css';
import NavBar from './Components/Navbar'
import Contact from './Components/Contact'
import Physiotherapy from './Components/Physiotherapy'
import Yoga from './Components/Yoga'
import About from './Components/About'
import Prices from './Components/Prices'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Physiotherapy />
      <Yoga />
      <About />
      <Prices />
      <Contact />
    </div>
  );
}

export default App;
