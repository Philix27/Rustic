import styled from "styled-components";

export const InputWithTrailingIcon = (props: {
  placeholder: string;
  maxLength: number;
  icon: JSX.Element;
  className?: string;
}) => {
  return (
    <Div className={props.className}>
      <InputField placeholder={props.placeholder} maxLength={props.maxLength} />
      {props.icon}
    </Div>
  );
};

const InputField = styled.input`
  border: none;
  outline: none;
  font-size: 14px;
  padding: 8px;
  margin: 5px 0;
`;
const Div = styled.div`
  background-color: white;
  display: flex;
  border: solid #e3e3e3 1px;
  height: 45px;
  padding: 5px 10px;
  border-radius: 5px;
  align-items: center;
`;
