import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Learn from './components/Learn';
import Incubator from './components/Incubator';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Navbar />
          <Route path='/learn' component={Learn} />
          {/* <Route path='/' exact component={Home}/> */}
          <Route path='/incubator' component={Incubator} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
