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
    this.stateRes = 'red'
    this.buttonState = { color: 'activeB' }
  }
  updateInputValue(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  sendingRequest() {
    const r = request('http://localhost:3000/sign_up', "POST", this.state)
      .then(function (response) {
        return response.json()
      })
      .then((data) => {
        if (!data.token) {
          throw data;
        }
      })
      .catch((error) => {
        console.log(error)
        this.setState({ color: this.buttonState.color = "noActiveB" })
      });
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
        <button className={style[this.buttonState.color]} onClick={() => this.sendingRequest()}>
          Login
        </button>
      </div >
    );
  }
};

export default signUp;