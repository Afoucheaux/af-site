import './App.css';
import Landing from '../../containers/Landing/Landing.js';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route path='/' component={ Landing }/>
    </Switch>
  );
}

export default App;
