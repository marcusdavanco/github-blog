import styled from "styled-components";

export const HomeContainer = styled.main`
  width: 864px;
  margin: 0 auto 14.625rem;
`;

export const CardsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 2.5rem;
  width: fit-content;
`;
