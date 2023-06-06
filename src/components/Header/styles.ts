import cover from "../../assets/cover.png";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  background-size: cover;
  background: url(${cover});
  background-repeat: no-repeat;
  height: 296px;
  background-position: center;
  background-size: cover;

  a {
    margin-top: 64px;
    height: fit-content;
  }
`;
