import styled from "styled-components";

export const PostContainer = styled.main`
  width: 864px;
  margin: 0 auto 14.625rem;
`;

export const Content = styled.section`
  overflow: hidden;
  padding: 2.5rem 2rem;

  p {
    font-size: 16;
  }

  strong {
    font-size: 16;

    font-weight: 700;
  }

  a {
    font-size: 16;

    color: ${({ theme }) => theme.colors.blue};

    &:hover {
      text-decoration: underline;
    }
  }

  img {
    max-width: 100%;
    object-fit: cover;
  }

  ul {
    margin-left: 1.25rem;
  }

  .line-break {
    white-space: pre-wrap;
  }
`;
