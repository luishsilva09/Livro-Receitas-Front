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
          <p>testedslcksdlcmsldcslkvcs</p>
          <p>testedslcksdlcmsldcslkvcs</p>
          <p>testedslcksdlcmsldcslkvcs</p>
        </Content>
      </ContainerHome>
    </>
  );
}

const Content = styled.div`
  background-color: red;
  width: 70%;
  padding: 4%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContainerHome = styled.div`
  width: 100%;
  height: 100%;
  background-color: aliceblue;
  display: flex;
  justify-content: center;

  p {
    font-size: 50px;
  }
`;

const SearchBar = styled.div`
  width: 70%;
  height: 50px;
  background-color: #d9d9d9;
  border-radius: 50px;
  display: flex;
  align-items: center;
  padding: 1%;

  input {
    background-color: #d9d9d9;
    border: none;
    width: 100%;

    :focus {
      outline: none;
    }
  }
`;
