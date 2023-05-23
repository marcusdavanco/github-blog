import styled from "styled-components";

export const LinkButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  border-bottom: 1px solid transparent;

  a {
    display: flex;
    font-size: ${(props) => props.theme["font-size-1"]};
    text-transform: uppercase;
    color: ${(props) => props.theme["blue"]};
    text-decoration: none;
  }
  &:hover {
    border-bottom: 1px solid ${(props) => props.theme["blue"]};
  }
`;
