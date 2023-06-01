import styled from "styled-components";

export const SearchInputContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 3rem;

  header {
    display: flex;
    justify-content: space-between;

    p {
      font-weight: 700;
      font-size: ${(props) => props.theme["font-size-4"]};
      color: ${(props) => props.theme["base-subtitle"]};
    }

    span {
      font-size: ${(props) => props.theme["font-size-2"]};
      color: ${(props) => props.theme["base-span"]};
    }
  }

  input {
    display: flex;
    flex: 1;
    background-color: ${(props) => props.theme["base-input"]};
    padding: 0.75rem 1rem;
    border: 1px solid ${(props) => props.theme["base-border"]};
    border-radius: 6px;
    color: ${(props) => props.theme["base-text"]};

    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
    }
  }
`;
