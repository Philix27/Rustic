import styled from "styled-components";

export const IconButton = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.backgroundLight};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }
  svg {
    font-size: 18px;
  }
`;
