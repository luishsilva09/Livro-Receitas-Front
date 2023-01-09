import styled from "styled-components";

export function SideMenu() {
  return (
    <ContainerMenu>
      <Left>
        <p>Receitas</p>
        <p>Nova receita</p>
        <p>Minhas receitas</p>
      </Left>
      <Right></Right>
    </ContainerMenu>
  );
}

const ContainerMenu = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  padding-top: 60px;
  position: absolute;
`;

const Left = styled.div`
  background-color: #88c100;
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: width 2s;
  :hover {
    width: 400px;
  }
  p {
    color: #fff;
    font-size: 25px;
    font-weight: 300;
    margin: 15px;
  }
`;
const Right = styled.div`
  background-color: rgba(156, 154, 154, 0.31);
  height: 100%;
  width: 100%;
`;
