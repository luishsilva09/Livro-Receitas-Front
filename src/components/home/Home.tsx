import { TopBar } from "../topBar/TopBar";
import styled from "styled-components";
import { Recipe } from "./Recipe";
export function Home() {
  return (
    <>
      <TopBar />
      <ContainerHome>
        <Content>
          <SearchBar>
            <input placeholder="Pesquisar..."></input>
          </SearchBar>
          <Recipe />
          <Recipe />
          <Recipe />
        </Content>
      </ContainerHome>
    </>
  );
}

const Content = styled.div`
  width: 70%;
  padding: 4%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;
  @media (max-width: 460px) {
    margin-top: 15%;
  }
`;

const ContainerHome = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  p {
    font-size: 50px;
  }
`;

const SearchBar = styled.div`
  width: 90%;
  height: 50px;
  background-color: #d9d9d9;
  border-radius: 50px;
  display: flex;
  align-items: center;
  padding: 3%;

  input {
    background-color: #d9d9d9;
    border: none;
    width: 100%;

    :focus {
      outline: none;
    }
  }
`;
