import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputElement from "./InputElement";
import Button from "./Button";
import styles from "./styles/SignInForm.module.scss";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          <Button width="fullWidth">Sign In</Button>

          <p className={styles.signIn__Conditions}>
            By signing-in you agree to the My Amazon Clone Conditions of Use &
            Sale. Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>
        </form>
      </div>
    </div>
  );
};
export default SignInForm;
