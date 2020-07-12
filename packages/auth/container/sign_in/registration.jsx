import React from 'react';
import style from './registration.css';
import { NavLink } from "react-router-dom";

function signIn() {
  const [state, setState] = React.useState({ name: '' });

  const handleChange = () => {
    setState()
  }

  const handleClick = () => {
    (async () => {
      const r = await fetch({ password: '12345', name: 'Ivan' });

    })();
  }

  return (
    <form>
      <div className={style.registrationFieldsContainer}>
        <div className={style.fieldBlock}>
          <p className={style.nameField}>Name</p>
          <input className={style.registrationFields} />
        </div>
        <div className={style.fieldBlock}>
          <p className={style.nameField}>Password</p>
          <input className={style.registrationFields} />
        </div>
        <div className={style.buttonRout}>
          <NavLink to="/signUp">Sing up</NavLink>
        </div>
        <div className={style.buttonRout}>
          <NavLink to="/signIn">Sing in</NavLink>
        </div>
      </div>
    </form>
  );
}

export default signIn;
