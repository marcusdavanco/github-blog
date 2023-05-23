import styled from "styled-components";

export const SearchInputContainer = styled.div`
  display: flex;
  input {
    display: flex;
    flex: 1;
    background-color: ${(props) => props.theme["base-input"]};
    padding: 0.75rem 1rem;
    border: 1px solid ${(props) => props.theme["base-border"]};
    border-radius: 6px;
    color: ${(props) => props.theme["base-text"]};

    &:placeholder {
      color: ${(props) => props.theme["base-label"]};
    }
  }
`;
