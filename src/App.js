import "./App.css";
import React, {useState} from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import CheckOutPage from "./components/pages/CheckOutPage";
import LoginPage from "./components/pages/LoginPage";
import Header from "./components/ui/Header";
import Navigation from "./components/ui/Navigation";
import AllModal from "./components/ui/AllModal";

function App() {

const [isOpen , setOpen] = useState(false)


  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <AllModal isOpen={isOpen}/>

            <Header />
            <Navigation isOpen={isOpen} setOpen={setOpen}/>
            <HomePage />
          </Route>
          <Route path="/check-out">
            <Header />
            <Navigation isOpen={isOpen} setOpen={setOpen}/>
            <CheckOutPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
