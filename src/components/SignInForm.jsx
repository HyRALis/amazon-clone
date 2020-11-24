import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import InputElement from "./InputElement";
import Button from "./Button";
import styles from "./styles/SignInForm.module.scss";
import { auth } from "../firebase";

const SignInForm = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
        alert(`You have succesfuly signed in!`);
      })
      .catch((err) => alert(err.message));
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
          alert(
            `You have succesfuly Signed In! Please check ${email} for the verification email!`
          );
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className={styles.signIn}>
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="Amazon logo"
          className={styles.signIn__logo}
        />
      </Link>
      <div className={styles.signIn__container}>
        <h1>Sign in</h1>
        <form action="">
          <InputElement
            inputId="signIn"
            type="text"
            labelText="Email"
            placeholder="example@mail.com"
            value={email}
            onChange={setEmail}
          />
          <InputElement
            inputId="password"
            type="password"
            labelText="Password"
            placeholder="Yout Password"
            value={password}
            onChange={setPassword}
          />
          <Button type={"submit"} width="fullWidth" onClickAction={signIn}>
            Sign In
          </Button>

          <p className={styles.signIn__Conditions}>
            By signing-in you agree to the My Amazon Clone Conditions of Use &
            Sale. Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>
        </form>
      </div>
      <p>New to Amazon?</p>
      <Button type={"submit"} onClickAction={register}>
        Create your Amazon Account
      </Button>
    </div>
  );
};
export default SignInForm;
