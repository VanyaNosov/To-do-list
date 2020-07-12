import React from 'react';
import style from './login.css';
import { NavLink } from "react-router-dom";
import { request } from "../../api/index.js";

class signUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
    };
  }
  updateInputValue(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  sendingRequest() {
    (async () => {
      const r = await request('http://localhost:3000/sign_up', 'POST', JSON.stringify(this.state))
    })()
  }
  render() {
    return (
      <div className={style.registrationFieldsContainer}>
        <div className={style.fieldBlock}>
          <p className={style.nameField}>firstName</p>
          <input name="firstName" className={style.registrationFields} value={this.state.firstName} onChange={e => this.updateInputValue(e)} />
        </div>
        <div className={style.fieldBlock}>
          <p className={style.nameField}>lastName</p>
          <input name="lastName" className={style.registrationFields} value={this.state.lastName} onChange={e => this.updateInputValue(e)} />
        </div>
        <div className={style.fieldBlock}>
          <p className={style.nameField}>email</p>
          <input name="email" className={style.registrationFields} value={this.state.email} onChange={e => this.updateInputValue(e)} />
        </div>
        <div className={style.fieldBlock}>
          <p className={style.nameField}>password</p>
          <input name="password" className={style.registrationFields} value={this.state.password} onChange={e => this.updateInputValue(e)} />
        </div>
        <div className={style.buttonRout}>
          <NavLink to="/signIn">Sing in</NavLink>
        </div>
        <button id="vanya" onClick={() => this.sendingRequest()}>
          Login
        </button>
      </div >
    );
  }
};

export default signUp;