import React, { useState } from "react";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import styles from "./styles/InputElement.module.scss";

const InputElement = ({
  inputId,
  type,
  labelText,
  placeholder,
  value,
  onChange,
}) => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const isPasswordField = (type) => {
    return type === "password" ? true : false;
  };

  const changePasswordVisibility = (e) => {
    e.preventDefault();
    const passwordInput = document.getElementById(inputId);

    setPasswordVisibility(!passwordVisibility);
    passwordInput.type === "text"
      ? (passwordInput.type = "password")
      : (passwordInput.type = "text");
  };

  return (
    <div className={styles.input}>
      <label className={styles.inputLabel} htmlFor={inputId}>
        {labelText}
      </label>
      <input
        id={inputId}
        className={styles.inputField}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {isPasswordField(type) && (
        <button
          className={`${styles.input__PasswordToggle}`}
          onClick={(e) => changePasswordVisibility(e)}
        >
          {passwordVisibility ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </button>
      )}
    </div>
  );
};

export default InputElement;
