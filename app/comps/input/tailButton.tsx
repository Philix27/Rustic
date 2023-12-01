"use client";
import { styled } from "styled-components";

export const ButtonWithTrailingIcon = (props: {
  placeholder: string;
  maxLength: number;
  icon: JSX.Element;
  className?: string;
  onClick: VoidFunction;
}) => {
  return (
    <Div onClick={props.onClick}>
      <Text>{props.placeholder}</Text>
      {props.icon}
    </Div>
  );
};

const Text = styled.p`
  font-size: 14px;
  padding: 8px;
  margin: 5px 0;
`;
const Div = styled.div`
  background-color: white;
  border: solid #c0d6e0 0.1px;
  height: 45px;
  padding: 5px 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
