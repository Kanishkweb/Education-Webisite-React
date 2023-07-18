import './App.css';
import HeroSection from './components/Herosection';
import Navbar from './components/Navbar';
import Section01 from './components/Section01';

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <HeroSection/>
        <Section01/>
      </div>
    </>
  );
}

export default App;
