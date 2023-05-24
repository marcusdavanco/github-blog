import styled from "styled-components";

export const PostHeaderCardContainer = styled.section`
  display: flex;
  gap: 2rem;
  background-color: ${(props) => props.theme["base-profile"]};
  padding: 2rem 2.5rem;
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  margin-top: -5.625rem;
  margin-bottom: 4.5rem;

  img {
    width: 9.25rem;
    border-radius: 8px;
  }

  & > div {
    width: 100%;
  }

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.25rem;
  }

  h2 {
    font-size: ${(props) => props.theme["font-size-5"]};
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme["base-title"]};
    margin-bottom: 0.5rem;
  }

  div > div {
    display: flex;
    gap: 1.5rem;

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      width: fit-content;
    }
  }
`;
