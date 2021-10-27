import {
  BrowserRouter as Router, Link, Switch, Route,
} from 'react-router-dom';

import Home from './components/Home';
import Quote from './components/Quote';
import Math from './components/Math';

const App = () => (
  <Router>
    <div className="App">
      <h1>Math Magicians</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>|</li>
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
        <li>|</li>
        <li>
          <Link to="/quote">Quote</Link>
        </li>
      </ul>
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
