import styled from "styled-components";
import { HiMenu } from "react-icons/hi";

export function TopBar() {
  return (
    <ContainerBar>
      <HiMenu className="icon" />
      <p>Lista Receitas</p>
    </ContainerBar>
  );
}

const ContainerBar = styled.div`
  background-color: #fabe28;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  position: relative;

  p {
    color: #fff;
    font-size: 50px;
    font-weight: 400;
    width: 100%;
    text-align: center;
    position: fixed;
  }

  .icon {
    color: #fff;
    font-size: 40px;
    font-weight: 500;
  }
  @media (max-width: 460px) {
    p {
      font-size: 30px;
    }
  }
`;
