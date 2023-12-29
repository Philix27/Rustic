"use client";
import { Path, UseFormRegister } from "react-hook-form";
import Image from "next/image";
import { Text } from "@/comps";
import { ChangeEvent, useState } from "react";
import { AppImages, AppStyles } from "@/lib";
import { styled } from "styled-components";

export const AppInput = (props: {
  label: Path<any>;
  name: string;
  placeholder: string;
  maxLength?: number;
  minLength?: number;
  type?: "text" | "tel" | "password" | "email";
  className?: string;
  value?: string;
  hasError?: boolean;
  hasInfo?: string;
  isPassword?: boolean;
  errorMsg?: string;
  register?: UseFormRegister<any>;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Wrapper>
      <label htmlFor={props.name}>
        <Text variant="B4">{props.label}</Text>
      </label>

      <input
        className={`${
          props.errorMsg ? "border-red-600" : "border-grey-dark-30"
        } `}
        aria-label={props.label}
        placeholder={props.placeholder}
        maxLength={props.maxLength}
        type={props.type === "password" && showPassword ? "text" : props.type}
        value={props.value}
        onChange={props.onChange}
        // {...props.register(props.name)}
      />

      {props.hasInfo && <span className="text-xs">{props.hasInfo}</span>}
      {props.hasError && (
        <span className="text-centurian-red text-xs">{props.errorMsg}</span>
      )}
      {props.isPassword ? (
        <div className={`error_msg ${props.errorMsg && "pb-6"}`}>
          <Image
            onClick={() => setShowPassword(!showPassword)}
            src={showPassword ? AppImages.name : AppImages.name}
            width={18}
            height={18}
            priority
            alt={AppImages.name}
          />
        </div>
      ) : null}
    </Wrapper>
  );
};

/* className={`flex flex-col space - y - 2 w - full relative ${ props.className }`} */
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 10px 0;

  label > p {
    font-size: 16px;
    margin-bottom: 10px;
    justify-self: flex-start;
  }

  input {
    /* border rounded-md py-3 px-4 min-w-full border-none outline-none font-medium text-white bg-grey */
    border-radius: 5px;
    padding: 12px 10px;
    min-width: 100%;
    color: white;
    background-color: ${AppStyles.colors.backgroundLight};
    font-size: 14px;
    outline: none;
    border: none;
    border: solid 0.5px ${AppStyles.colors.grey1};
  }
  .error_msg {
    /* absolute inset-y-0 right-0 flex items-center pr-3  */
    position: absolute;
    right: 0;
    display: flex;
    align-items: center;
    padding-right: 14px;
  }
`;
