import Navbar from './components/Navbar';
import Cards from './components/Cards';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='gradient'>
        <div className='startup-container'>
          <p className='startup-head'>Featured Startups</p>
          <p className='startup-txt'>Invest in the next billion dollar company today</p>
        </div>
        <Cards />
      </div>
    </div>
  );
}

export default App;
