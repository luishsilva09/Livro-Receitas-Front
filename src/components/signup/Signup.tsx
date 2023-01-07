import styled from "styled-components";
import { SignupForm } from "./SignupForm";

export function Signup() {
  return (
    <Container>
      <h1>Livro Receitas</h1>
      <SignupForm />
    </Container>
  );
}
const Container = styled.div`
  background-color: #fabe28;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  a {
    text-decoration: none;
  }
  h1 {
    font-size: 80px;
    margin-bottom: 40px;
    color: #fff;
  }
  @media (max-width: 610px) {
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
    h1 {
      font-size: 40px;
    }
  }
  @media (max-height: 460px) {
    height: 100%;
    h1 {
      font-size: 20px;
    }
  }
`;
