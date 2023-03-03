import styled from "styled-components";

export function Recipe() {
  return (
    <ContainerRecipe>
      <img src="https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSwMeZlcl3tffuBLpsU7s1baTaFsGmUV3SoPluJ38X4PeYygCrZZpSSqn6EVkjWfnZg" />
    </ContainerRecipe>
  );
}

const ContainerRecipe = styled.div`
  margin-top: 30px;
  width: 70%;
  height: 250px;
  object-fit: cover;
  img {
    object-fit: cover;
  }
`;
