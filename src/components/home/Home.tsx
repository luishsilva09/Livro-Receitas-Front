import { TopBar } from "../topBar/TopBar";
import styled from "styled-components";

export function Home() {
  return (
    <>
      <TopBar />
      <ContainerHome>
        <p>testedslcksdlcmsldcslkvcs</p>
        <p>testedslcksdlcmsldcslkvcs</p>
        <p>testedslcksdlcmsldcslkvcs</p>
        <p>testedslcksdlcmsldcslkvcs</p>
      </ContainerHome>
    </>
  );
}

const ContainerHome = styled.div`
  p {
    font-size: 50px;
  }
`;
