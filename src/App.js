import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import CheckOutPage from "./components/pages/CheckOutPage";
import LoginPage from "./components/pages/LoginPage";
import Header from "./components/ui/Header";
import Navigation from "./components/ui/Navigation";
import AllModal from "./components/ui/AllModal";
import RegisterPage from "./components/pages/RegisterPage";
import { AppProvider } from "./AppContext";
import products from "./products";
import ProductList from "./ProductList";

function App() {
  const [isOpen, setOpen] = useState(false);

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
            </Route>
          </Switch>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
