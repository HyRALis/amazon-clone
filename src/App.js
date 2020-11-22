import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import Landing from "./components/Landing";
import Checkout from "./components/Checkout";
import SignInForm from "./components/SignInForm";

function App() {
  return (
    //BEM convention
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Header />
            <Landing />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route exact path="/login">
            <SignInForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
