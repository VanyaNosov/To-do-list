import React from 'react';
import style from './login.css';
import { NavLink } from "react-router-dom";
function signUp() {
  return (
    <div className={style.registrationFieldsContainer}>
      <div className={style.fieldBlock}>
        <p className={style.nameField}>Name</p>
        <input className={style.registrationFields}></input>
      </div>
      <div className={style.fieldBlock}>
        <p className={style.nameField}>Email</p>
        <input className={style.registrationFields}></input>
      </div>
      <div className={style.fieldBlock}>
        <p className={style.nameField}>Password</p>
        <input className={style.registrationFields}></input>
      </div>

      <div className={style.buttonRout}>
        <NavLink to="/signIn">Sing in</NavLink>
      </div>
    </div>
  );
}

export default signUp;