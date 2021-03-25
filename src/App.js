import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomePage from './components/pages/HomePage'
import CheckOutPage from './components/pages/CheckOutPage'
import LoginPage from './components/pages/LoginPage'


function App() {
  return (
    <Router>

    <div className="App">
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path='/check-out'>
            <CheckOutPage />
          </Route>
          <Route path='/login'>
            <LoginPage />
          </Route>
        </Switch>
    </div>
    </Router>

  );
}

export default App;
