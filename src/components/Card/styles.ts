import styled from "styled-components";

export const CardContainer = styled.article`
  width: 416px;
  height: 260px;
  padding: 2rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme["base-post"]};
  border: 1px solid ${(props) => props.theme["base-border"]};
  transition: border 0.2s;
  cursor: pointer;

  &:hover {
    border: 1px solid ${(props) => props.theme["base-label"]};
  }

  header {
    display: flex;
    justify-content: space-between;

    h2 {
      font-weight: 700;
      font-size: ${(props) => props.theme["font-size-4"]};
      color: ${(props) => props.theme["base-title"]};
      margin-bottom: 1.25rem;
    }

    span {
      font-size: ${(props) => props.theme["font-size-2"]};
      color: ${(props) => props.theme["base-span"]};
      white-space: nowrap;
    }
  }

  p {
    display: flex;
    color: ${(props) => props.theme["base-text"]};
    max-height: 112px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
