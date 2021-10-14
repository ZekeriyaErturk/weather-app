import { Route, Switch } from 'react-router';
import './css/App.css';

// Components
import About from './components/About';
import Home from './components/Home';
import Notification from './components/Notification';
import NotFound from './components/NotFound';
import Nav from './components/Nav';

function App() {
  return (
    <div className="container mt-5">
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/*" component={NotFound}></Route>
      </Switch>
      <Nav></Nav>
      <Notification></Notification>
    </div>
  );
}

export default App;
