import { Link } from "react-router-dom";
import styled from "styled-components";

export function SideMenu(props: any) {
  return (
    <ContainerMenu>
      <Left>
        <Link to="/recipes">
          <p>Receitas</p>
        </Link>
        <Link to="/newrecipe">
          <p>Nova receita</p>
        </Link>
        <Link to="/myrecipes">
          <p>Minhas receitas</p>
        </Link>
      </Left>
      <Right onClick={() => props.setShowMenu(false)}></Right>
    </ContainerMenu>
  );
}

const ContainerMenu = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  padding-top: 60px;
  position: absolute;

  a {
    text-decoration: none;
  }
`;

const Left = styled.div`
  background-color: #88c100;
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: width 2s;

  p {
    color: #fff;
    font-size: 25px;
    font-weight: 300;
    margin: 15px;
    :hover {
      cursor: pointer;
      filter: brightness(20%);
    }
  }
`;
const Right = styled.div`
  background-color: rgba(156, 154, 154, 0.31);
  height: 100%;
  width: 100%;
`;
