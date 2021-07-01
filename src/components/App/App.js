import './App.css';
import Landing from '../../containers/Landing/Landing.js';
import { Route, Switch } from 'react-router-dom';
import Profile from '../../containers/Profile/Profile.js'

function App() {
  return (
    <Switch>
      <Route exact path='/Profile' component={ Profile }/>
      <Route path='/' component={ Landing }/>
    </Switch>
  );
}

export default App;
