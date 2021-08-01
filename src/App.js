import { Switch, Route } from 'react-router-dom';

import './App.scss';
import Home from './pages/Home';
import List from './pages/List';

function App() {
  return (
    <>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/list'>
          <List />
        </Route>
      </Switch>
    </>
  );
}

export default App;
