import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export function SigninForm() {
  const [load, setLoad] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  async function sendLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("login");
  }
  return (
    <ContainerForm>
      <Form onSubmit={(event) => sendLogin(event)}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="e-mail"
          disabled={load}
          value={loginData.email}
          onChange={(e) =>
            setLoginData({ ...loginData, email: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="senha"
          disabled={load}
          value={loginData.password}
          onChange={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
        />
        <button type="submit" disabled={load}>
          {load ? <>load</> : <>Entrar</>}
        </button>

        <Link to="/signup">
          <h3>Ainda não possui cadastro? Faça cadastro aqui.</h3>
        </Link>
      </Form>
    </ContainerForm>
  );
}

const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ff8a00;
  border-radius: 20px;
  height: 380px;
  width: 100%;
  padding: 0px 20px 30px 20px;
  flex-wrap: wrap;
  max-width: 500px;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  h2 {
    color: #fff;
    font-size: 40px;
    margin-bottom: 20px;
    width: 100%;
    text-align: center;
  }
  input {
    height: 50px;
    border: none;
    border-radius: 20px;
    width: 100%;
    font-size: 20px;
    padding: 10px;
    margin-bottom: 30px;
    background-color: #d9d9d9;
  }
  p {
    font-size: 20px;
    margin: 10px;
    color: #fff;
  }
  h3 {
    text-align: center;
    margin-top: 10px;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
  a {
    text-decoration: none;
    color: #fff;
  }
  button {
    width: 80%;
    height: 35px;
    border: none;
    border-radius: 20px;
    background-color: #0ba035;
    color: #fff;
    font-size: 20px;
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      cursor: pointer;
      filter: brightness(130%);
    }
    &:active {
      transform: scale(0.9, 0.9);
    }
  }
`;
