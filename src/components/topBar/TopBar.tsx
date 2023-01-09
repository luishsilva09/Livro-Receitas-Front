import styled from "styled-components";
import { HiMenu } from "react-icons/hi";
import { SideMenu } from "./SideMenu";
import { useState } from "react";

export function TopBar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <ContainerBar>
        <HiMenu className="icon" onClick={() => setShowMenu(!showMenu)} />
        <p>Lista Receitas</p>
      </ContainerBar>
      {showMenu ? <SideMenu /> : <></>}
    </>
  );
}

const ContainerBar = styled.div`
  background-color: #fabe28;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  position: absolute;

  p {
    color: #fff;
    font-size: 50px;
    font-weight: 400;
    width: 100%;
    text-align: center;
    position: relative;
  }

  .icon {
    z-index: 1;
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
