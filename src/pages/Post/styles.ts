import styled from "styled-components";

export const PostContainer = styled.main`
  width: 864px;
  margin: 0 auto 14.625rem;
`;

export const PostContent = styled.section`
  margin: 2.5rem 2rem;
  color: ${(props) => props.theme["base-label"]} strong {
    font-weight: 700;
  }

  span {
    color: ${(props) => props.theme["blue"]};
  }

  & > p:first-of-type {
    margin-bottom: 1.3rem;
  }

  & > p:last-of-type {
    margin-top: 1.5rem;
  }

  code {
    background-color: ${(props) => props.theme["base-post"]};
    display: flex;
    flex-direction: column;
    padding: 1.125rem 1rem;
    margin-top: 1.5rem;
  }
`;
