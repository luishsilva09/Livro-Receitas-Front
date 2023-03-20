import styled from "styled-components";

export function Recipe() {
  return (
    <ContainerRecipe>
      <img
        src="https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSwMeZlcl3tffuBLpsU7s1baTaFsGmUV3SoPluJ38X4PeYygCrZZpSSqn6EVkjWfnZg"
        alt="foto"
      />
    </ContainerRecipe>
  );
}

const ContainerRecipe = styled.div`
  margin-top: 30px;
  width: 90%;
  height: 200px;
  background-color: blue;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
