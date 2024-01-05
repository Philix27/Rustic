import styled from "styled-components";

export const IconButton = styled.div<{ size?: number; iconSize?: number }>`
  height: ${(props) => props.size ?? "40px"};
  width: ${(props) => props.size ?? "40px"};
  border-radius: ${(props) => props.size / 2 ?? 20};
  background-color: ${(props) => props.theme.colors.backgroundLight};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }
  svg {
    font-size: ${(props) => props.iconSize ?? "18px"};
  }
`;
