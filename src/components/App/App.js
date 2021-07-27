import './App.css';
import Landing from '../../containers/Landing/Landing.js';
import DetailView from '../../containers/DetailView/DetailView.js'
import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Switch>
      <Route exact path='/:id' render={({ match }) => <DetailView id={match.params.id}/>}/>
      <Route path='/' component={ Landing }/>
    </Switch>
  );
}

export default App;
