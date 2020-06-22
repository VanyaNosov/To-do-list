import React from 'react';
import style from './registration.css';
import { NavLink } from "react-router-dom";

function signIn() {
  return (
    <div className={style.registrationFieldsContainer}>
      <div className={style.fieldBlock}>
        <p className={style.nameField}>Name</p>
        <input className={style.registrationFields}></input>
      </div>
      <div className={style.fieldBlock}>
        <p className={style.nameField}>Password</p>
        <input className={style.registrationFields}></input>
      </div>
      <div className={style.buttonRout}>
        <NavLink to="/signUp">Sing up</NavLink>
      </div>
    </div>
  );
}

export default signIn;
