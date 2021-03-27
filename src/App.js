import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import CheckOutPage from "./components/pages/CheckOutPage";
import LoginPage from "./components/pages/LoginPage";
import Header from "./components/ui/Header";
import Navigation from "./components/ui/Navigation";
import AllModal from "./components/ui/AllModal";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <AllModal />

            <Header />
            <Navigation />
            <HomePage />
          </Route>
          <Route path="/check-out">
            <Header />
            <Navigation />
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
