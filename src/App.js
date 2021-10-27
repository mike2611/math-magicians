import {
  BrowserRouter as Router, Link, Switch, Route,
} from 'react-router-dom';

import Home from './components/Home';
import Quote from './components/Quote';
import Math from './components/Math';
import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <div className="nav-bar d-flex">
        <h1>
          <span className="big-m">M</span>
          ath Magicians
        </h1>
        <ul className="nav-menu d-flex">
          <li>
            <Link to="/" className="nav-elements">Home</Link>
          </li>
          <li className="separations">|</li>
          <li>
            <Link to="/calculator" className="nav-elements">Calculator</Link>
          </li>
          <li className="separations">|</li>
          <li>
            <Link to="/quote" className="nav-elements">Quote</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/calculator">
          <Math />
        </Route>
        <Route path="/quote">
          <Quote />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
