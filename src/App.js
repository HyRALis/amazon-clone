import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "./firebase";

import "./App.css";

import { useStateValue } from "./context/StateProvider";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Checkout from "./components/Checkout";
import SignInForm from "./components/SignInForm";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is ", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

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
