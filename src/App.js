import "./App.css";
import React, { useState, useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import CheckOutPage from "./components/pages/CheckOutPage";
import CheckOut from './components/pages/CheckOut'
import LoginPage from "./components/pages/LoginPage";
import Header from "./components/ui/Header";
import Navigation from "./components/ui/Navigation";
import AllModal from "./components/ui/AllModal";
import RegisterPage from "./components/pages/RegisterPage";
import { AppProvider } from "./AppContext";
import products from "./products";
import ProductList from "./ProductList";
import {AppContext} from './AppContext'
import {auth} from './firebase'

function App() {
  const [isOpen, setOpen] = useState(false);
  const {user, dispatch} = useContext(AppContext)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser => {
      if(authUser) {
        // The user is logged in

        dispatch({
          type: 'SET_USER',
          payload: user
        })
      } 
      else {
        // The user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
    return () => {
      // clean up operation
      unsubscribe()
    }
  }, [])

  console.log(user)
  return (
    <AppProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <AllModal isOpen={isOpen} setOpen={setOpen} />

              <Header />
              <Navigation setOpen={setOpen} />
              <HomePage />
            </Route>

            <Route path="/check-out">
              <Header />
              <Navigation setOpen={setOpen} />
              <CheckOutPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/register">
              <RegisterPage />
            </Route>
            <Route path="/today-deal">
              <AllModal isOpen={isOpen} setOpen={setOpen} />
              <Header />
              <Navigation setOpen={setOpen} />
              <ProductList products={products} />
            </Route>
            <Route path="/checkout">
              <AllModal isOpen={isOpen} setOpen={setOpen} />
              <Header />
              <Navigation setOpen={setOpen} />
              <CheckOutPage />
              <CheckOut />
            </Route>
          </Switch>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
