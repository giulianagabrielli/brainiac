import React, { useState, useEffect, FormEvent } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import PageHeader from "../../components/PageHeader";
import { useHistory } from "react-router-dom";

import logoImg from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/landing4.svg";
import warningIcon from "../../assets/images/icons/warning.svg";

import api from "../../services/api";

import "./styles.css";

function Login() {
  const history = useHistory();

  function handleLogin(e: FormEvent) {
    e.preventDefault();
    history.push("/landing");
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader title="Get Started!" />

      <main>
        <form onSubmit={handleLogin}>
          <fieldset>
            <legend>Login</legend>
            <Input
              name="email"
              label="E-mail"
              type="email"
              placeholder="example@example.com"
              required
              // value={email}
              // onChange={(e) => {
              //   setEmail(e.target.value);
              // }}
            />
            <Input
              name="password"
              label="Password"
              type="password"
              required
              // value={email}
              // onChange={(e) => {
              //   setEmail(e.target.value);
              // }}
            />
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso Importante" />
              Forgot your password? <br />
              Click here.
            </p>
            <button type="submit">Login</button>
          </footer>
        </form>
      </main>
    </div>
  );
}

export default Login;
